const { string } = require('joi');
const mongoose = require('mongoose');

const MovieSchema = new mongoose.Schema(
    {
        Movie_Name:{
            type: String,
            trim: true,
        },
        Ticket_buyer_name:{
            type: String,
            trim: true,
        },
        Ticket_price:{
            type: Number,
            trim:true,
        },
        Sit_number:{
            type: String,
            trim:true,
        },
        Movie_time:{
            type: String,
            trim:true,
        },
    },
    {
        timestamps:true,
        versionKey:false,
    }
);

const Movie=mongoose.model("Movie",MovieSchema)
module.exports = Movie