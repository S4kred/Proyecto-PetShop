import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import AuthLayout from "../layout/AuthLayout";
import RutaProtegida from "../layout/RutaProtegida";
import RutaProtegidaVendedor from "../layout/RutaProtegidaVendedor";

import LogSignUp from '../page/LogSignUp';
import ConfirmarCuenta from "../page/ConfirmarCuenta";
import HomeCliente from "../page/HomeCliente";
import HomeVendedor from "../page/HomeVendedor";

import { AuthProvider } from '../context/AuthProvider';
import { MascotasProvider } from "../context/MascotasProvider"; 
import { PedidosProvider } from "../context/PedidosProvider";

export default function Routing() {
  return (
    <Router>
      <AuthProvider>
        <MascotasProvider>
          <PedidosProvider>
            <Routes>
              <Route path="/" element={<AuthLayout />} >
                  <Route index element={<LogSignUp />} />
                  <Route path='/confirmar/:id' element={<ConfirmarCuenta />} />
              </Route>
              <Route path='/vendedor' element={<RutaProtegidaVendedor />}>
                  <Route index element={<HomeVendedor />} />
              </Route>
              <Route path='/cliente' element={<RutaProtegida />}>
                  <Route index element={<HomeCliente />} />
              </Route>           
            </Routes>
          </PedidosProvider>
        </MascotasProvider>
      </AuthProvider>
    </Router>
  );
}
