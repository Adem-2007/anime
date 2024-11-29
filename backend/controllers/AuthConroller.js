import User from "../models/User.js"
import bcryptjs from 'bcryptjs'
import jwt from 'jsonwebtoken'

export const RegisterController = async (req, res) => {
    try {
        const {username, email, password} = req.body
        const existingUserName = await User.findOne({username})
        const existingEmail = await User.findOne({email})

        if (!username || !email || !password) return res.status(400).json({message : 'All fields are required'})
        
        if (existingEmail) {
            return res.status(400).json({message : 'Email is exist'})
        }

        if (existingUserName) {
            return res.status(400).json({message : 'UserName is exist '})
        }

        if (password.length < 8) {
            return res.status(400).json({message : 'Password must be Atleast 8 characters'})
        }

        const HashPassword = await bcryptjs.hash(password, 10)

        const newUser = new User({ 
            username,
            email,
            password : HashPassword
        })

        await newUser.save()

        const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(201).json({
            message : 'Registered successfully',
            user : {
                Id : newUser._id,
                username,
                email
            },
            token 
        })

    } catch (error) {
        console.log('error in register controller', error.message)
        res.status(500).json({message : 'Internal server error in register controller', error : error.message})
    }
}

export const LoginController = async (req, res) => {
    try {
        const {email, password} = req.body
        const user = await User.findOne({email})

        if (!email || !password) return res.status(400).json({message : 'All fields are required'})
        
        if (!user) return res.status(400).json({message : "Email doesn't exist"})
            
        const passwordCompared = await bcryptjs.compare(password, user.password)
        if(!passwordCompared) return res.status(400).json({message : "Wrong password"})

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' })

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
        });

        res.status(200).json({
            message : 'Login successful',
            user : {
                Id : user._id,
                username : user.username,
                email : user.email
            },
            token
        })
 
    } catch (error) {
        console.log('error in login controller', error.message)
        res.status(500).json({message : 'Internal server error in login controller', error : error.message})
    }
}

export const LogoutController = async (req, res) => { 
    try {
        res.clearCookie('token', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict'
        });
        
        res.status(200).json({
            message: 'Logged out successfully'
        })
    } catch (error) {
        console.log('error in logout controller', error.message)
        res.status(500).json({
            message: 'Internal server error in logout controller',    
            error: error.message
        })
    }
}

export const GoogleAuthController = async (req, res) => {
    try {
        const { email, username, image } = req.body;
        
        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }
        
        let user = await User.findOne({ email });
        let token;
        
        if (user) {
            token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
            
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            return res.status(200).json({
                message: 'Login successful',
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    image: user.image
                },
                access_token: token
            });
        } else {
            const newUser = new User({
                username,
                email,
                image,
                password: Math.random().toString(36).slice(-8)
            });
            
            await newUser.save();
            
            token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
            
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
            });

            return res.status(201).json({
                message: 'Registration successful',
                user: {
                    id: newUser._id,
                    username: newUser.username,
                    email: newUser.email,
                    image: newUser.image
                },
                access_token: token
            });
        }
    } catch (error) {
        console.log("Error in googleAuthController:", error.message);
        res.status(500).json({ message: error.message });
    }
};
