import { createContext, useState, useEffect } from "react"; 
import clienteAxios from "../config/axios";

const MascotasContext = createContext()

export const MascotasProvider = ({children}) => {

  const [mascotas, setMascotas] = useState([])

  useEffect(() => {
    const obtenerMascotas = async () => {

      try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const { data } = await clienteAxios('/mascotas', config)
        setMascotas(data)

      } catch (error) {
        console.log(error)
      }
    }

    obtenerMascotas()

  }, [])

  const guardarMascota = async (mascota) => {
    try {
      const token = localStorage.getItem('token')
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      const { data } = await clienteAxios.post('/mascotas', mascota, config)
      
      const { __v, ...mascotaAlmacenada } = data
      
      setMascotas([mascotaAlmacenada, ...mascotas])

    } catch (error) {
      console.log(error.response.data.msg)
    }
  }

  return(
    <MascotasContext.Provider
      value={{
        mascotas,
        guardarMascota
      }}
    >
      {children}
    </MascotasContext.Provider>
  )
}

export default MascotasContext;