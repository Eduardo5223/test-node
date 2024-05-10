//Con esto tenemos acceso al modulo
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
require("dotenv").config()
//Crear la aplicacion
const app = express();
//Vamos a hacer cosas con el servidor
//donde se va a escchar la peticion:
const port = 3001;

mongoose.connect(process.env.DATABASE_URL, {useNewURLParser: true});

const db = mongoose.connection;

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Conexion abierta..."));
//Setear la aplicacion
//1. Middleware: mediador entre el servidor y la peticion
//agregamos uno que soporte el JSON
app.use(express.json());
app.use(express.urlencoded({extended: true})); //para que reconozca lo que escribimos en la URL y las codifique 

app.use(cors())
app.use("/usuarios",require("./routes/usuario-routes"));
//setear un endpoint que pueda recibir solicitudes y mandar una respuesta (estamos poniendo funciones dentro de llamadas)
app.get("/", (req,res) =>{
    res.send("Hola mundo!!");
});

//"levanta todo", es como un main:
app.listen(port,() => console.log("El servidor esta funcionando"));

