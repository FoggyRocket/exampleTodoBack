//importar los modelos a utlizar, utils
const Todo = require("../models/Todo.model");
const mongoose = require("mongoose")


exports.getById = async (req,res,next)=>{
    try {
        //El nombre de mi variable dentro de los params (req.params) Yo la defino!!
        const {id} = req.params
        //mongoose.Types.ObjectId.isValid(IDPARAMS) => valida si la variable que le pasamos es un ID de mongo
        //solo retorna true : false
        if(!mongoose.Types.ObjectId.isValid(id) ){
            return;
            //res.status(400).json({ messageErrors:"Mensaje custom"})
            //return ;
        }

        const detialTodo = await Todo.findById(id)
        res.status(200).json(detialTodo)
    } catch (error) {
        next(error)
    }
}

exports.deleteTodo = async (req,res,next)=>{
    try {
        //El nombre de mi variable dentro de los params (req.params) Yo la defino!!
        const {idTodo} = req.params
        if(!mongoose.Types.ObjectId.isValid(idTodo) ){
            return;
            //res.status(400).json({ messageErrors:"Mensaje custom"})
            //return ;
        }
        await Todo.findByIdAndRemove(idTodo)

        res.status(200).json({messageSuccess:"Tarea borrada"})
    } catch (error) {
        next(error)
    }
}

exports.updateTodo = async (req,res,next)=>{
    try {
        //El nombre de mi variable dentro de los params (req.params) Yo la defino!!
        const {idTodo} = req.params
        if(!mongoose.Types.ObjectId.isValid(idTodo) ){
            return;
            //res.status(400).json({ messageErrors:"Mensaje custom"})
            //return ;
        }
        //req.body = {title,des,stauts}
        const updatedTodo = await Todo.findByIdAndUpdate(idTodo,req.body,{new:true})

        res.status(200).json(updatedTodo)
    } catch (error) {
        next(error)
    }
}

//doc

//axios.get(`https://fedex.com/api/search/${trackID}`)
//htto: network access
//CORS: Access-Control-Allow-origin