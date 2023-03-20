import { createContext, useState, useEffect } from "react";
import clienteAxios from "../config/axios";

const PedidosContext = createContext()

export const PedidosProvider = ({children}) => {

  const [pedidos, setPedidos] = useState([])
  const [pediosClientes, setPedidosClientes] = useState([])


  useEffect(() => {
    const obtenerPedidos = async () => {

      try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const { data } = await clienteAxios('/pedidos', config)
        setPedidos(data)
        
      } catch (error) {
        console.log(error)
      }
    }

    const obtenerPedidosClientes = async () => {
      try {
        const token = localStorage.getItem('token')
        if(!token) return

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
          }
        }

        const { data } = await clienteAxios('/pedidos/pedidosclientes', config)
        console.log(data)
        setPedidosClientes(data)

      } catch (error) {
        console.log(error)
      }
    }

    obtenerPedidos()
    obtenerPedidosClientes()

    

  }, [])

  const crearPedido = async (pedido) => {
    try {
      const token = localStorage.getItem('token')
        // if(!token) return

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      }
      console.log(pedido)
      const { data } = await clienteAxios.post('/pedidos', pedido, config)

      const { __v, ...pedidoAlmacenado } = data
      
      setPedidos([pedidoAlmacenado, ...pedidos])

      console.log(data)
    } catch (error) {
      console.log(error.response.data.msg)      
    }

  }

  return(
    <PedidosContext.Provider 
      value={{
        pedidos,
        crearPedido,
        pediosClientes
      }}
    >
      {children}
    </PedidosContext.Provider>
  )

}



export default PedidosContext;