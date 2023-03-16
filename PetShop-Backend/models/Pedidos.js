import mongoose from "mongoose";

  const pedidosSchema = mongoose.Schema({
    tipo: {
      type: Number,
    },
    cantidadAlimento: {
      type: Number,
    },
    complementosDietarios: {
      type: Number,
    },
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usuario",
    },
    mascota: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Mascota",
    }
  }
);

const Pedidos = mongoose.model('Pedidos', pedidosSchema);

export default Pedidos;