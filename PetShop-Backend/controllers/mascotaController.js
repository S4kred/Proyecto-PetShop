import Mascota from "../models/Mascota.js";
import { Gato, Perro } from "../patronDiseño/calculoCombo.js";


const agregarMascota = async (req, res) => {
  let mascota;
  const tipo = req.body.tipo;
  
  if (tipo === 'gato') {
    mascota = new Gato(req.body.nombre, req.body.peso, req.body.edad, req.body.castrado);
  } else if (tipo === 'perro') {
    mascota = new Perro(req.body.nombre, req.body.peso, req.body.edad, req.body.castrado);
  } else {
    return res.status(400).json({ error: 'El tipo de mascota no es válido' });
  }

  mascota.usuario = req.usuario._id;
  
  // Calcular cantidad de alimento y complementos dietarios
  const cantidadAlimento = mascota.calcularCantidadAlimento();
  const complementosDietarios = mascota.obtenerComplementosDietarios();
  
  // Agregar cantidad de alimento y complementos dietarios a los datos de la mascota
  mascota.cantidadAlimento = cantidadAlimento;
  mascota.complementosDietarios = complementosDietarios;
  mascota.tipo = tipo;
  try {
    const nuevaMascota = new Mascota(mascota); // crear una instancia del modelo
    const mascotaEnBd = await nuevaMascota.save(); // guardar la instancia en la base de datos
    res.json(mascotaEnBd);    
  } catch (error) {
    console.log(error)
  }
};




const obtenerMascota = async (req, res) => {
  const mascotas = await Mascota.find().where("usuario").equals(req.usuario);

  res.json(mascotas);
};

const obtenerMascotaConUsuarios = async (req, res) => {

  try {
    const mascotas = await Mascota.find().populate('usuario').sort('usuario.nombre');
    res.json(mascotas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al obtener mascotas y usuarios.' });
  }
};  

export {agregarMascota, obtenerMascota, obtenerMascotaConUsuarios};

// const agregarMascota = async (req, res) => {
//   const mascota = new Mascota(req.body);
//   mascota.usuario = req.usuario._id;
//   try {
//     const mascotaEnBd = await mascota.save()
//     res.json(mascotaEnBd)    
//   } catch (error) {
//     console.log(error)
//   }
// };