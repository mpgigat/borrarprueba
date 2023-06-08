import mongoose from "mongoose";
 
const personaSchema=new mongoose.Schema({
    nombre:{type:String, required:true,minlength:8, maxlength:50},    
    cc:{type:String,required:true,unique:true},    
    edad:{type:Number,default:0},
    fechanacimiento:{type:Date,default:new Date()},
    mayor:{type:Boolean,default:false},
    hijos:[
        {nombre:{type:String,required:true}}
    ],
    createdAt:{type:Date,default:new Date()},
})

export default mongoose.model("Persona",personaSchema)