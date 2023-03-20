import { Tab, Tabs } from  "react-bootstrap";
import HistorialPedidosParaVendedor from "../../components/HistorialPedidosParaVendedor"

import "./HomeVendedor.scss"

export default function HomeVendedor() {

  return (
    <>
      <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="Pedidos Recibidos">
        <HistorialPedidosParaVendedor />
      </Tab>
      <Tab eventKey="profile" title="Listado de Mascotas y Dueños">
      
      </Tab>
      <Tab eventKey="longer-tab" title="Listado de Vendedores">
      
      </Tab>
    </Tabs>
    </>
  );
}

