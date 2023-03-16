import mongoose from "mongoose";
import bcrypt from "bcrypt";
import generarId from "../helpers/generarId.js"

const usuarioSchema = mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true,
  },
  apellido: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  tipovendedor: {
    type: Boolean,
    default: false,
  },
  token: {
    type: String,
    default: generarId(),
  },
  confirmado: {
    type: Boolean,
    default: false,
  },
});


usuarioSchema.pre('save', async function (next) {
  if(!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt);
});

usuarioSchema.methods.comprobarPassword = async function (passwordFormulario) {
  return await bcrypt.compare(passwordFormulario, this.password);
};



const Usuario = mongoose.model("Usuario", usuarioSchema);
export default Usuario;

/* Este código define un esquema de usuario utilizando la biblioteca 
Mongoose para MongoDB. En el esquema se definen dos funciones. 
La primera se ejecuta antes de guardar un documento en la base de datos 
y utiliza la biblioteca bcrypt para cifrar la contraseña del usuario. 
La función comprueba si el campo de contraseña ha sido modificado y, 
si no ha sido así, se omite el cifrado. Si el campo de contraseña ha 
sido modificado, se genera una cadena aleatoria de caracteres llamada 
"salt" y se utiliza para cifrar la contraseña del usuario.
La segunda función, llamada "comprobarPassword", 
se define como un método en el esquema y utiliza la biblioteca bcrypt 
para comparar la contraseña introducida por el usuario con la contraseña 
almacenada en la base de datos. Esta función devuelve un valor booleano 
que indica si las contraseñas coinciden o no.
Finalmente, se crea un modelo de Mongoose a partir del esquema definido 
y se exporta el modelo para que pueda ser utilizado en otros módulos de la aplicación.
*/