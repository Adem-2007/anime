import mongoose from "mongoose";

const userModel = new mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String, 
        required : true,
    },
    image: { 
        type: String ,
        default :"https://www.bing.com/th?id=OIP.mP1RB8xuQaHAvUkonYY6HwHaHK&w=150&h=145&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
    }, 
}, {timestamps : true})

const User = mongoose.model('User', userModel)

export default User