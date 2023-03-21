import express from "express";
const router = express.Router();
import { registrar, perfil, confirmar, autenticar, obtenerVendedores } from "../controllers/usuarioController.js"
import checkAuth from "../middleware/authMiddleware.js";
import verificarVendedor from "../middleware/authVendedorMiddleware.js";


router.post('/', registrar);
router.get("/confirmar/:token", confirmar);
router.post("/login", autenticar);
router.get('/perfil', checkAuth, perfil);
router.get('/obtenerVendedores', checkAuth, verificarVendedor, obtenerVendedores);


export default router;