import express from "express";
const router = express.Router();
import checkAuth from "../middleware/authMiddleware.js";
import {crearPedido, recibirPedido} from "../controllers/pedidoController.js"

router.route("/")
  .post(checkAuth, crearPedido)
  .get(checkAuth, recibirPedido);





export default router;