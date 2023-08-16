const mongoose=require("mongoose")

const userSchema = new mongoose.Schema(
    {
        first_name:{
            type:String,
            trim:true,
        },
        last_name:{
            type:String,
            trim:true,
        },
        email:{
            type:String,
            trim:true,
        },
        phone:{
            type:Number,
            trim:true,
        },
        password:{
            type:Number,
            trim:true,
        },
        address:{
            type:String,
            trim:true
        },
         is_active:{
            type:Boolean,
            default:true,
        }
    },
    {
        timestamps:true,
        versionKey:false,
    }

);

const User=mongoose.model("User",userSchema)

module.exports=User