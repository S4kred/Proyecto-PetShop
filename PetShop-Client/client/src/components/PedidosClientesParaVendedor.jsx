import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';


const PedidosClientesParaVendedor = ({pedido}) => {

  const { _id, tipo, cantidadAlimento, complementosDietarios, usuario , enviado } = pedido;
  const nombreUsuario = usuario.nombre;
  const apellidoUsuario = usuario.apellido;
  const emailUsuario = usuario.email;

  return (
    <Table striped bordered hover size >
      <thead>
          <tr>
            <th>Identificador del pedido</th>
            <th>Cantidad de alimento para {tipo}</th>
            <th>Cantidad de suplemento/suplementos para {tipo}</th>
            <th>Nombre y Apellido del cliente</th>
            <th>Email de contacto</th>
            <th>Despachado</th>
            <th></th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{_id}</td>
          <td>{cantidadAlimento} Kg</td>
          <td>{complementosDietarios} Unidad(es)</td>
          <td>{nombreUsuario} {apellidoUsuario}</td>
          <td>{emailUsuario}</td>
          <td>{(!enviado) ? "No" : "Si"} </td>
          <td><Button variant="primary" type='submit'>Despachar</Button></td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PedidosClientesParaVendedor


// const { usuario } = pedidosParaVendedor;
// const nombreUsuario = usuario.nombre;