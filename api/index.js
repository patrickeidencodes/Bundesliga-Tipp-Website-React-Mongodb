// @ts-nocheck
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import tippsRoute from "./routes/tipps.js"
import authRoute from "./routes/auth.js"
import wmRoute from "./routes/wm.js"

0
import wmStatsRoute from "./routes/wmStats.js"
import cookieParser from "cookie-parser";
import path from "path"
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express()
dotenv.config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
    } catch (err){
        throw err
    }
};

mongoose.connection.on("disconnected", ()=> {
    console.log("disconnected from mongoDB");
})

//middlewares
app.use(cookieParser());
app.use(express.json());
app.use("/api/tipps", tippsRoute);
app.use("/api/auth", authRoute);
app.use("/api/wm", wmRoute);
app.use("/api/wmstats", wmStatsRoute);

app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "bad things happened"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})

app.use(express.static(path.join(__dirname, "/my-app/build")));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/my-app/build', 'index.html'));
});

app.listen(process.env.PORT || 8800, () => {
    connect()
    console.log("connected to backend uhuu")
})