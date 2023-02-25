
const {expressjwt: jwt} = require("express-jwt")


//Instancia del jwt para validar

const isAuthenticated = jwt({
    secret:process.env.TOKEN_SECRET,
    algorithms:["HS256"],
    requestProperty:'payload',
    getToken: getTokenFromHeaders
})


function getTokenFromHeaders(req){

    //vamos a checar si el token esta disponble en el request.headers
    //Authorization: "Bearer 912390712u39u128932.1923921893798127.dusad89ua98du"
    //              ["Bearer","912390712u39u128932.1923921893798127.dusad89ua98du"]
    if(req.headers.authorization && req.headers.authorization.split(" ")[0] === "Bearer"){
        //obtener el encoded token string 
        const token = req.headers.authorization.split(" ")[1]
        return token
    }

    return null
}


module.exports = {
    isAuthenticated
}