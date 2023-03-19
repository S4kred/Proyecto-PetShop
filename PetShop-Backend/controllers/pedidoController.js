import Pedidos from "../models/Pedidos.js";
import Mascota from "../models/Mascota.js";

const crearPedido = async (req, res) => {
  try {
    // const mascota = await Mascota.findOne({ _id: req.body.mascotaId, usuario: req.usuario._id });
    // console.log(mascota)
    // if (!mascota) {
    //   return res.status(400).json({ error: 'No se encontró la mascota del usuario' });
    // }

    const pedido = new Pedidos( req.body
      // tipo: req.body.tipo,
      // cantidadAlimento: mascota.cantidadAlimento,
      // complementosDietarios: mascota.complementosDietarios,
      // usuario: req.usuario._id,
      // mascota: mascota._id
    );

    const pedidoEnBd = await pedido.save();
    res.json(pedidoEnBd);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error al crear el pedido' });
  }
};

const obtenerPedido = async (req, res) => {
  try {
    const pedidos = await Pedidos.find().where("usuario").equals(req.usuario);

    res.json(pedidos);
  } catch (error) {
    console.log("Error a obtener pedido")
  }
};

const obtenerPedidosClientes = async (req, res) => {

  try {
    const pedidos = await Pedidos.find().populate('usuario').sort('usuario.nombre');
    res.json(pedidos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener los pedidos.' });
  }
};

export {crearPedido, obtenerPedido, obtenerPedidosClientes};