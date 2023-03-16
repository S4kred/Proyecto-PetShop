import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeCliente from "../page/HomeCliente";
import HomeVendedor from "../page/HomeVendedor";
import ConfirmarCuenta from "../page/ConfirmarCuenta";
import AuthLayout from "../layout/AuthLayout";
import LogSignUp from '../page/LogSignUp';
import { AuthProvider } from '../context/AuthProvider';


export default function Routing() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<AuthLayout />} >
            <Route index element={<LogSignUp />} />
            <Route path='/confirmar/:id' element={<ConfirmarCuenta />} />
            <Route path='/cliente' element={<HomeCliente />} />
            <Route path='/vendedor' element={<HomeVendedor />} />          
          </Route>        
        </Routes>
      </AuthProvider>
    </Router>
  );
}
