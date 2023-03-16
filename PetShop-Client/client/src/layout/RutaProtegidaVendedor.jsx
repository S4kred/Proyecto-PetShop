import { Outlet, Navigate } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import Footer from "../components/Footer/Footer";
import HeaderVendedor from "../components/HeaderVendedor";



const RutaProtegidaVendedor = () => {

  const { auth, cargando } = useAuth()
  if (cargando) return 'cargando...'


  return (
    <>
      <HeaderVendedor />
      {auth._id && auth.tipovendedor ? <Outlet /> : <Navigate to="/" /> }
      <Footer />
    </>
  )
}

export default RutaProtegidaVendedor