const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const usersSchema = new Schema(
  {

    avatar:{
        type:String,
        default:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg"
    },
    firstName:{
        type:String,
    },
    lastName:{
        type:String,
    },
    area:{
        type:String,
    },
    email:{
        type:String,
    },
    phone:{
        type:String,
    },
    admissionDate:{
        type:String,
    },
    birthDay:{
        type:String,
    },
},
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Users = model("Users", usersSchema);

module.exports = Users;
