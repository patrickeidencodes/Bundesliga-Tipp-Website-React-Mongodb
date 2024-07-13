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
});

export default mongoose.model("Spiel", SpielSchema)