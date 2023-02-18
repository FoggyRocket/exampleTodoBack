const router = require("express").Router();
const Todo = require("../models/Todo.model")
const {getById,deleteTodo,updateTodo} = require("../controllers/todo.crontroller")
router.get("/", (req, res, next) => {
  res.json("All good in here");
});

//recodemos!!! 

router.post("/todo/create",async (req,res,next)=>{
  //lite
  //res.json({msg:"Esta ruta es para crear"})
  //todo lo que va dentro de los () del .json
  //lo encontraremos en el response.data (del lado del front axios o fetch)
  try {
    const {title,description} = req.body
    const todoCreated = await Todo.create({title,description})

    res.status(201).json(todoCreated)
    //res.status(201).json({todoCreated}) => response.data = { todoCreated: {title:"",description:"",status:...}}
  } catch (error) {
    //next(error)
    console.log("error",error)
    res.status(400).json({ messageError:"Error created" })
  }
})

// obtener la lista
router.get("/todo/list",async(req,res,next)=>{
  //pro
  //res.status(200).json({msg:"Esta ruta es para tener un listado"})
  try {
      const listTodo = await Todo.find() // --> []
      res.status(200).json(listTodo)
  } catch (error) {
    next(error)
  }
})
// obtener tarea por id
router.get("/todo/:id",getById)

// eliminar tarea
//.post
router.delete("/todo/:idTodo/delete",deleteTodo);

// editar tarea por id 
//post
//put
//patch ---->

router.patch("/todo/:idTodo/edit",updateTodo)



//mickey herramienta
//router.use("/todo",)

module.exports = router;
