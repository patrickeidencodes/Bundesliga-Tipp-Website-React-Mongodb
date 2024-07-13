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
        type: String,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
});

const TippsSchema = new mongoose.Schema({
    number: {
        type: Number,
        required: true
    },
    date: {
        type: String, 
        required: true
    },
    user: {
        type: String, 
        required: true
    },
    userId: {
        type: String, 
        required: true
    },
    games: [SpielSchema]
})

export default mongoose.model("Spieltag", TippsSchema)