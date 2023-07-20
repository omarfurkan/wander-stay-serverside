import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from './routes/auth.js'
import usersRoute from './routes/users.js'
import hotelsRoute from './routes/hotels.js'
import roomsRoute from './routes/rooms.js'
import cookieParser from "cookie-parser"
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
app.use(cookieParser())
app.use(express.json())




app.use('./api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);


app.use((err, req, res, next) => {
    const errorStatus = err.stack || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    });
})









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