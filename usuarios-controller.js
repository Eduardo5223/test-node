const Usuario = require("../models/usuario");

//CRUD
//Create
function createUsuario(req, res) {
    console.log("Creando un usuario...");
    console.log(req.body);
    let usuario = new Usuario({
        nombre: req.body.nombre,
        email: req.body.email,
        password: req.body.password,
    });
    usuario.save().then(result => { 
        console.log(result) 
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result,
        })
    })

    
}

function updateUsuario(req, res) {

console.log("Actualizando usuario...");
    const usuarioId = req.params.id; // id de de la tarea a actualizar
    const newUsuario = req.body;
    // Body call
    Usuario.findByIdAndUpdate(usuarioId, newUsuario, { new: true }).then((result) => {
        
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error)
        if (error) {
            return res.status(400).json({
                error: true,
                message: "Error updating",
                code: 0
            });
        }
    });
}


// ? FIND ALL
function findAllUsuarios(req, res) {
    console.log("Obteniendo todos las usuarios...");
    console.log(req.body);

    Usuario.find().then( (result) => {
        
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error);
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}

// ? DELETE
function deleteUsuario(req, res) {
    console.log("Eliminando 1 usuario...");
    const usuarioId = req.params.id; // id de de la tarea a actualizar
   

    Usuario.deleteOne({ _id: usuarioId }).then( (result) => {
       console.log("result delete:",result)
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}

function find_id(req, res) {
    console.log("Obteniendo el usuaio...");
    console.log(req.body);
    const usuarioId = req.params.id;
    
    Usuario.findById({ _id: usuarioId }).then( (result) => {
        
        if (!result) {
            return res.status(400).json({
                error: true,
                message: "Cliente error",
                code: 10
            });
        }
        return res.status(200).json({
            error: false,
            message: "OK",
            code: 20,
            data: result
        });
    })
    .catch( (error) => {
        console.log("Error:",error);
        if (error) {
            return res.status(500).json({
                error: true,
                message: "Server down",
                code: 0
            });
        }
    });
}

module.exports = {
    createUsuario,
    updateUsuario,
    findAllUsuarios,
    deleteUsuario,
    find_id
}