const mongoose= require("mongoose");

const Session = new mongoose.Schema({
    ip_address:{
        type: String,
        required:true,
    },
    userId:{
        type: String,
        unique: true,
        required:true,
    },
    logged_in_devices:{
        type: Number,
        default: 1,
    }
},{timestamps: true})

const sessions_model=mongoose.model("sessions",Session)
module.exports = sessions_model
