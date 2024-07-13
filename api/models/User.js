import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = new mongoose.Schema({
    username:{
        type: String, 
        required: true,
        unique:true
    },
    email:{
        type: String, 
        unique:true
    },
    password:{
        type: String, 
        required: true,
    },
    isAdmin: {
        type: Boolean,
        required: false,
        default: false
    },
},
{ timestamps: true}
);

export default mongoose.model("User", UserSchema)