import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connecteDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log('Data Base is connected successfully')
    } catch (error) {
        console.log('Happen an error in Data Base', error.message)
    }
}

export default connecteDB   