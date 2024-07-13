// @ts-nocheck
import mongoose from "mongoose";
const StatsSchema = new mongoose.Schema({
    user: {
        type: String, 
        required: true
    },
    winner: {
        type: String,
        default: ""
    },
    mostGoals: {
        type: String,
        default: ""
    },
    luecke: {
        type: Number,
        default: 0
    },
    far: {
        type: String,
        default: ""
    },
    points: {
        type: Number,
        default: 0
    },
    extensions: {
        type: Number,
        default: 0
    }
})

export default mongoose.model("StatsWM", StatsSchema)