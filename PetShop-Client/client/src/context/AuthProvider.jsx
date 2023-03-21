import { useState, useEffect, createContext } from "react";
import clienteAxios from "../config/axios";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

  const [cargando, setCargando] = useState(true)
  const [auth, setAuth] = useState({})
  const [Vendedores, setVendedores] = useState([])

  useEffect(() => {
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token')
      if(!token) {
        setCargando(false)
        return
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const { data } = await clienteAxios('/usuarios/perfil', config)
        setAuth(data)
      } catch (error) {
        console.log(error.response.data.msg)
        setAuth({})
      }

      setCargando(false)
    }

    const obtenerVendedor = async () => {
      try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}` 
          }
        }

        const { data } = await clienteAxios('/usuarios/obtenerVendedores', config)
        setVendedores(data)

      } catch (error) {
        console.log(error)
      }
    }

    obtenerVendedor()
    autenticarUsuario()
  }, [])

  const cerrarSesion = () => {
    localStorage.removeItem('token')
    setAuth({})
  }

  return (
    <AuthContext.Provider
      value = {{
        auth,
        setAuth,
        cargando,
        cerrarSesion,
        Vendedores
      }}
    >
      {children}
    </AuthContext.Provider>
  )

}

export {
  AuthProvider
}

export default AuthContext