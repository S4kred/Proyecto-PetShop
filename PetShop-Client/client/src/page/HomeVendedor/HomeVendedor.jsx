import { Tab, Tabs, Col } from  "react-bootstrap";
import HistorialPedidosParaVendedor from "../../components/HistorialPedidosParaVendedor"
import ListadoMascotasYDueños from "../../components/ListadoMascotasYDueños/ListadoMascotasYDueños";
import ListadoDeVendedores from "../../components/ListadoDeVendedores/ListadoDeVendedores";

import "./HomeVendedor.scss"

export default function HomeVendedor() {

  return (
    <>
      <Tabs
      defaultActiveKey="pedidos"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="pedidos" title="Pedidos Recibidos" >
        <Col>
          <HistorialPedidosParaVendedor />
        </Col>
      </Tab>
      <Tab eventKey="listaCLiente" title="Listado de Mascotas y Dueños" >
        <Col>
          <ListadoMascotasYDueños />
        </Col>
      </Tab>
      <Tab eventKey="listaVendedores-tab" title="Listado de Vendedores" >
      <Col>
          <ListadoDeVendedores />
        </Col>
      </Tab>
    </Tabs>
    </>
  );
}

