import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import connecteDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
const PORT = process.env.PORT || 3000 

const app = express()
app.use(cors())
app.use(express.json())


app.use('/api/auth', authRoutes)
app.use('/api/user', userRoutes)


app.listen(PORT, () => {   
    connecteDB() 
    console.log("Server is running in : ", PORT) 
})