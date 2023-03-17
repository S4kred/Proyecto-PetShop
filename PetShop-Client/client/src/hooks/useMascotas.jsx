import { useContext } from "react";
import MascotasContext from "../context/MascotasProvider";


const useMascotas = () => {
  return useContext(MascotasContext)
}

export default useMascotas