import Usuario from "../models/Usuario.js";
import generarJWT from "../helpers/generarJWT.js";

const registrar = async (req, res) => {
  const { email } = req.body;

  // Prevenir usuarios registrados
  const existeUsuario = await Usuario.findOne({email})
  
  if(existeUsuario) {
    const error = new Error("Usuario ya registrado");
    return res.status(400).json({ msg: error.message })
  }

  try {
    // Guardar un Nuevo Vendedor
    const usuario = new Usuario(req.body);
    const usuarioGuardado = await usuario.save();

    res.json(usuarioGuardado); 
  } catch (error) {
    console.log(error);
  }
};

const perfil = (req, res) => {
  const { usuario } = req;

  res.json({ usuario });
};


const confirmar = async (req, res) => {
  const { token } = req.params

  const usuarioConfirmar = await Usuario.findOne({token});

  if(!usuarioConfirmar) {
    const error = new Error("Token no válido");
    return res.status(404).json({msg: error.message})
  }

  try {
      usuarioConfirmar.token = null;
      usuarioConfirmar.confirmado = true;
      await usuarioConfirmar.save();
    
      res.json({msg: "Usuario confirmado correctamente"});
  } catch (error) {
    console.log(error)
  }
};

const autenticar = async (req, res) => {
  const { email, password } = req.body;

  // Comprobar si el usuario existe
  const usuario = await Usuario.findOne({ email });
  if(!usuario) {
    const error = new Error("El usuario no existe");
    return res.status(404).json({ msg: error.message });
  } 

  // Comprobar si el usuario esta confirmado
  if(!usuario.confirmado) {   
    const error = new Error("El usuario no está confirmado, revise su email");
    return res.status(403).json({ msg: error.message });
  }

  // Revisar password
  if( await usuario.comprobarPassword(password)) {
    // Autenticar
    res.json({ token: generarJWT(usuario.id, usuario.tipovendedor) });
  } else {
    const error = new Error("El password es incorrecto");
    return res.status(403).json({ msg: error.message });
  }

};


export { registrar, perfil, confirmar, autenticar};