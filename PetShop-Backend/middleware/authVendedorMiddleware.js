import jwt from "jsonwebtoken";
import Usuario from "../models/Usuario.js";

const verificarVendedor = async (req, res, next) => {
  const token = req.headers.authorization.split(' ')[1]; 
  const decodedToken = jwt.decode(token, process.env.JWT_SECRET);
  const userId = decodedToken.id;

  try {
    // Buscar el usuario en la base de datos
    const usuario = await Usuario.findById(userId);

    if (!usuario) {
      throw new Error('Usuario no encontrado');
    }

    // Verificar si es vendedor
    if (usuario.tipovendedor) {
      // Continuar con el siguiente middleware en la cadena
      // console.log("Tiene permisos de Vendedor");
      next();
    } else {
      // Devolver un error 403 (prohibido) si el valor de "tipovendedor" es falso
      const error = new Error("No tiene permisos de vendedor");
      res.status(403).json({ msg: error.message });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: 'Error al verificar permisos de vendedor' });
  }
};

export default verificarVendedor;
