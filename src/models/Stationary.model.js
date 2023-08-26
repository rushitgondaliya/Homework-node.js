const { string } = require('joi');
const mongoose = require('mongoose');

const StationarySchema = new mongoose.Schema(
    {
        Stationary_Name:{
            type: String,
            trim: true,
        },
        Stationary_item:{
            type: String,
            trim: true,
        },
        Stationary_price:{
            type: Number,
            trim:true,
        },
        Stationary_address:{
            type: String,
            trim:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const Stationary=mongoose.model("Stationary",StationarySchema)
module.exports = Stationary