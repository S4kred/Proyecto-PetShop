import express from "express";
const router = express.Router();
import checkAuth from "../middleware/authMiddleware.js";
import {crearPedido, obtenerPedido, obtenerPedidosClientes} from "../controllers/pedidoController.js"
import verificarVendedor from "../middleware/authVendedorMiddleware.js";

router.route("/")
  .post(checkAuth, crearPedido)
  .get(checkAuth, obtenerPedido);


router.get("/pedidosclientes", checkAuth, verificarVendedor, obtenerPedidosClientes);


export default router;