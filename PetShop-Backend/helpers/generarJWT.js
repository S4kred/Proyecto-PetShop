import jwt from "jsonwebtoken";

const  generarJWT = (id, tipovendedor) => {

  return jwt.sign({id, tipovendedor}, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

};

export default generarJWT;


