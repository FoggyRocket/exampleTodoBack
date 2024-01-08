
const mongoose = require("mongoose");
const Users = require("../models/Users.model");
const DB_NAME =  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/todoserver"; 

mongoose
.connect(DB_NAME)

const team = [
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/amaury_jivg8l.png",
        firstName:"Amaury ",
        lastName:"Almanza",
        area:"CEO ",
        email:'amaury@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/emilio_ih0t1p.png",
        firstName:"Emilio ",
        lastName:"Camargo",
        area:"CTO ",
        email:'emilio@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/mendoza_o8x5hh.png",
        firstName:"César ",
        lastName:"Mendoza",
        area:"VP ",
        email:'cesar.men@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/claudia_bjobdx.png",
        firstName:"Claudia ",
        lastName:"Rodríguez",
        area:"Product",
        email:'claudia@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/juan_rtex1c.png",
        firstName:"Juan",
        lastName:"Rivera",
        area:"App MovileI",
        email:'juan@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/humberto_wu4cwn.png",
        firstName:"Humberto ",
        lastName:"Alonso",
        area:"UX&UI Manager",
        email:'humberto@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/luis_yakodt.png",
        firstName:"Luis ",
        lastName:"Mota",
        area:"Trainne UX&UI",
        email:'luis@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/cesar_nx1vkn.png",
        firstName:"César",
        lastName:"Ramón",
        area:"Trainne UX&UI",
        email:'cesar.ra@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/aline_kvxuq8.png",
        firstName:"Aline",
        lastName:"Palacios",
        area:"Trainne UX&UI",
        email:'aline@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/nathali_vefdzc.png",
        firstName:"Nathali",
        lastName:"Ortiz",
        area:"Trainne UX&UI",
        email:'nath.oo@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    },
    {
        avatar:"https://res.cloudinary.com/dhgfid3ej/image/upload/v1704669407/vane_povgjv.png",
        firstName:"Vanessa",
        lastName:"Luna",
        area:"Trainne UX&UI",
        email:'vane@maanyuba.com',
        phone:'5539700892',
        admissionDate:"04 de Septiembre de 2023",
        birthday:"02 de Febrero"
    }
]
//vamos a crear 

Users.create(team, err=>{
    if(err){
        throw err;
    }
    console.log(`Creamos ${team.length} en dog model`)
    mongoose.connection.close()
})