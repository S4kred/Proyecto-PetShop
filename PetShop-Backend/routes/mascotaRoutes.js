import express from "express";
const router = express.Router();
import { agregarMascota, obtenerMascota, obtenerMascotaConUsuarios } from "../controllers/mascotaController.js";
import checkAuth from "../middleware/authMiddleware.js";
import verificarVendedor from "../middleware/authVendedorMiddleware.js";


router.route("/")
  .post(checkAuth, agregarMascota)
  .get(checkAuth, obtenerMascota);


router.get("/usuariosymascotas", checkAuth, verificarVendedor, obtenerMascotaConUsuarios);


export default router;

