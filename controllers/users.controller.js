const mongoose = require("mongoose")
const Users = require("../models/Users.model")
exports.listUser = async(req,res,next)=>{
    try {
        
        const findUsers = await Users.find({},{avatar:1,
        firstName:1,
        lastName:1,
        area:1})
        res.status(200).json(findUsers)

    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ messageError: error.message });
          }
          if (error.code === 11000) {
            return res.status(400).json({
              messageError: "Something goes wrong, try later",
            });
          }
          return res.status(500).json({ messageError: error.message });
        }
};
exports.findUser = async(req,res,next)=>{
    try {
        const {id} = req.params
        console.log("perro",id)
        const findUser = await Users.findById(id)
        res.status(200).json(findUser);
    } catch (error) {
        if (error instanceof mongoose.Error.ValidationError) {
            return res.status(400).json({ messageError: error.message });
          }
          if (error.code === 11000) {
            return res.status(400).json({
              messageError: "Something goes wrong, try later",
            });
          }
          return res.status(500).json({ messageError: error.message });
        }
}