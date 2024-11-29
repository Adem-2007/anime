import React from 'react'
import { motion } from 'framer-motion'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { app } from '../../firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../store/Slice/UserSlice'

const GoogleAuth = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleGoogleAuth = async () => {
        try {
            const provider = new GoogleAuthProvider()
            const auth = getAuth(app)
            const result = await signInWithPopup(auth, provider)
            
            // IMPROVEMENT 1: Format user data consistently
            // Now we structure the user data in a consistent format
            // This matches the structure expected by our Redux store
            const userData = {
                username: result.user.displayName,
                email: result.user.email,
                image: result.user.photoURL,
            }

            // IMPROVEMENT 2: Simplified API call
            // Send only the necessary user data to backend
            const res = await fetch('/api/auth/google', { 
                method: 'POST', 
                headers: {
                    'Content-Type': 'application/json', 
                },
                body: JSON.stringify(userData)
            })

            const data = await res.json()

            // IMPROVEMENT 3: Proper Redux Integration
            // Now we dispatch the login action with properly structured data
            // This ensures consistency between regular login and Google login
            dispatch(login({
                user: {
                    username: userData.username,
                    email: userData.email,
                    image: userData.image
                },
                token: data.access_token // Using the token from backend response
            }))

            navigate('/')
        } catch (error) {
            console.log("Error in loginGoogleAuth :", error.message)
        }
    }

    return (
        <motion.button
            type='button'
            onClick={handleGoogleAuth}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1.4, delay: 0.8 } }}
            className='bg-white text-black w-[330px] h-[50px] p-3 rounded-lg text-xl 
                font-cinzel font-extrabold shadow-xl hover:shadow-[0px_0px_10px_white]
                flex justify-center items-center'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" className="mr-2">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
            </svg>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.9, type: 'spring', ease: 'easeInOut' }}>
                {'Continue with google'}
            </motion.p>
        </motion.button>
    )
}

export default GoogleAuth