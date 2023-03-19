import mongoose from "mongoose";

  const pedidosSchema = mongoose.Schema({
    tipo: {
      type: String,
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
    enviado: {
      type: Boolean,
      default: false,
    },
    nombre: {
      type: String,
    }
  }
);

const Pedidos = mongoose.model('Pedidos', pedidosSchema);

export default Pedidos;