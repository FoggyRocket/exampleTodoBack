//1
const { Schema,model } = require("mongoose")
//2
const todoSchema = new Schema({
    //datos del modelo
    title:{
        type:String,
        required:true,
        minLength:2,
    },
    description:{
        type:String,
        minLength:2,
    },
    status:{
        type:String,
        enum:["Completed","Pending","In progress"],
        default:"Pending"
    },
    _owner:{
        type:Schema.Types.ObjectId,
        ref:"User"
    }

},{timestamps:true})
//3

module.exports = model("Todo",todoSchema)