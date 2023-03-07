import React from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import HomeCliente from "../page/HomeCliente";
import HomeVendedor from "../page/HomeVendedor";
import Error404 from "../page/Error404";

export default function Routing() {
  return (
    <Router>
      <Routes>
          <Route path='/Cliente' element={<HomeCliente />} />
          <Route path='/Vendedor' element={<HomeVendedor />} />
          <Route path='*' element={<p>Estas "Logueado" <br/>- "/Vendedor" para el home de vendedor<br/>- "/Cliente" para el home de cliente</p>} />
      </Routes>
    </Router>
  );
}
