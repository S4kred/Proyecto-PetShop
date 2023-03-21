import Table from 'react-bootstrap/Table';


const PedidosClientes = ({pedido}) => {

  const { _id, tipo, cantidadAlimento, complementosDietarios, usuario, enviado, nombre } = pedido;

  return (
    <Table striped hover size="sm" variant='dark'>
      <thead>
          <tr>
            <th>Pedido para</th>
            <th>Cantidad de alimento para {tipo}</th>
            <th>Cantidad de suplemento/suplementos para {tipo}</th>
            <th>Despachado</th>
            <th>Identificador del pedido</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nombre}</td>
          <td>{cantidadAlimento} Kg</td>
          <td>{complementosDietarios} Unidad(es)</td>
          <td>{(!enviado) ? "No" : "Si"}</td>
          <td>{_id}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PedidosClientes