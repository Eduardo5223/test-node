const express = require("express");
const router = express.Router();
const usuariosController = require("../controllers/usuarios-controller");

router.post("/",usuariosController.createUsuario);
router.put("/:id",usuariosController.updateUsuario);
router.get("/",usuariosController.findAllUsuarios);
router.delete("/:id",usuariosController.deleteUsuario);
router.get("/:id",usuariosController.find_id);
module.exports = router;

