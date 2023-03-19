import Table from 'react-bootstrap/Table';
import usePedidos from '../hooks/usePedidos';



const PedidosClientes = ({pedido}) => {

  const { _id, tipo, cantidadAlimento, complementosDietarios, usuario, enviado, nombre } = pedido;

  return (
    <Table striped bordered hover size="sm" >
      <thead>
          <tr>
            <th>Tipo</th>
            <th>Nombre de Mascota</th>
            <th>Cantidad de Alimentos</th>
            <th>Cantidad de Suplementos</th>
            <th>Despachado</th>
            <th>Identificador del pedido</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{tipo}</td>
          <td>{nombre}</td>
          <td>{cantidadAlimento}</td>
          <td>{complementosDietarios}</td>
          <td>{(!enviado) ? "No" : "Si"}</td>
          <td>{_id}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PedidosClientes