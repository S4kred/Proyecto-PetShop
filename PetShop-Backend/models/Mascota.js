import mongoose from "mongoose";

  const mascotaSchema = mongoose.Schema({
    tipo: {
      type: String,
    },
    nombre: {
      type: String,
      required: true
    },
    edad: {
      type: Number,
      required: true
    },
    peso: {
      type: Number,
      required: true
    },
    castrado: {
      type: Boolean,
      required: true,
      default:false,
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
  }
);

const Mascota = mongoose.model('Mascota', mascotaSchema);

export default Mascota;