import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './api/routes/auth.js'
import usersRoute from './api/routes/users.js'
import hotelsRoute from './api/routes/hotels.js'
import roomsRoute from './api/routes/rooms.js'
const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log('Connected to mongoDB')
    } catch (error) {
        throw error;
    }
};

// middlewares
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);













mongoose.connection.on("disconnected", () => {
    console.log("mondoDB connected!")
})

mongoose.connection.on("connected", () => {
    console.log("mongoDb connected!")
})



app.get('/users', (req, res) => {
    res.send('This is the first request')
})



app.listen(5000, () => {
    connect()
    console.log('Connected to backend.')
})