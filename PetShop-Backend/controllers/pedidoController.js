import Pedidos from "../models/Pedidos.js";
import Mascota from "../models/Mascota.js";

const crearPedido = async (req, res) => {
  try {
    const mascota = await Mascota.findOne({ _id: req.body.mascotaId, usuario: req.usuario._id });
    console.log(mascota)
    if (!mascota) {
      return res.status(400).json({ error: 'No se encontró la mascota del usuario' });
    }

    const pedido = new Pedidos({
      tipo: req.body.tipo,
      cantidadAlimento: mascota.cantidadAlimento,
      complementosDietarios: mascota.complementosDietarios,
      usuario: req.usuario._id,
      mascota: mascota._id
    });

    const pedidoEnBd = await pedido.save();
    res.json(pedidoEnBd);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
};

const recibirPedido = async (req, res) => {
  try {
    console.log("Recibiendo pedido")
  } catch (error) {
    console.log("Error a recibir pedido")
  }
};


export {crearPedido, recibirPedido};