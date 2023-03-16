import express from "express";
import conectarDB from "./config/db.js";
import dotenv from "dotenv";
import usuariosRoutes from "./routes/usuariosRoutes.js";
import mascotaRoutes from "./routes/mascotaRoutes.js";
import pedidosRoutes from "./routes/pedidosRoutes.js";
import cors from "cors";

const app = express();
app.use(express.json());


dotenv.config();

conectarDB();

const dominiosPermitidos =[process.env.FRONTEND_URL]

const corsOptions = {
  origin: function(origin, callback) {
    if(dominiosPermitidos.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("No Permitido por CORS"))
    }
  },
};

app.use(cors(corsOptions));

app.use('/api/usuarios', usuariosRoutes);
app.use('/api/mascotas', mascotaRoutes);
app.use('/api/pedidos', pedidosRoutes);



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});