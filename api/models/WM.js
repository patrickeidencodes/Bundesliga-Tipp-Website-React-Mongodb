// @ts-nocheck
import mongoose from "mongoose";

const SpielSchema = new mongoose.Schema({
    heimName: {
        type: String,
        required: true
    },
    heimTore: {
        type: Number,
        required: true
    },
    auswName: {
        type: String,
        required: true
    },
    auswTore: {
        type: Number,
        required: true
    },
    ko:{
        type: Number, 
        default: 0,
        required: true
    }
});

const TippsSchema = new mongoose.Schema({
    group: {
        type: Number,
        required: true,
        default: 0
    },
    date: {
        type: String, 
        required: true
    },
    user: {
        type: String, 
        required: true
    },
    games: [SpielSchema],
    groupWin: {
        type: String
    },
    elf: {
        type: Number
    },
    goals: {
        type: Number
    }
})

export default mongoose.model("SpieleWM", TippsSchema)