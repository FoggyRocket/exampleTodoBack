//importar los modelos a utlizar, utils
const Todo = require("../models/Todo.model");



exports.getById = async (req,res,next)=>{
    try {
        //El nombre de mi variable dentro de los params (req.params) Yo la defino!!
        const {id} = req.params
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
                                    //req.body = {title,des,stauts}
        const updatedTodo = await Todo.findByIdAndUpdate(idTodo,req.body,{new:true})

        res.status(200).json(updatedTodo)
    } catch (error) {
        next(error)
    }
}