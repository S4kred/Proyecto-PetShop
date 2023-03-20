import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import usePedidos from '../hooks/usePedidos';
import './PedidosClientesParaVendedor.scss'


const PedidosClientesParaVendedor = ({pedido}) => {

  const { setEnviado } = usePedidos()

  const { _id, tipo, cantidadAlimento, complementosDietarios, usuario , enviado } = pedido;
  const nombreUsuario = usuario.nombre;
  const apellidoUsuario = usuario.apellido;
  const emailUsuario = usuario.email;

  const handleDespachar = async () => {
    await setEnviado(pedido);
    window.location.reload();
  }

  return (
    <Table striped bordered hover size="sm" className={enviado ? 'despachado' : 'nodespachado'}  >
      <thead>
          <tr>
            <th>Identificador del pedido</th>
            <th>Cantidad de alimento para {tipo}</th>
            <th>Cantidad de suplemento/suplementos para {tipo}</th>
            <th>Nombre y Apellido del cliente</th>
            <th>Email de contacto</th>
            <th>{(!enviado) ? 'No' : ''} Despachado</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{_id}</td>
          <td>{cantidadAlimento} Kg</td>
          <td>{complementosDietarios} Unidad(es)</td>
          <td>{nombreUsuario} {apellidoUsuario}</td>
          <td>{emailUsuario}</td>
          <td>{(!enviado) ? <><Button variant="primary" type='submit' onClick={handleDespachar}>Despachar</Button></> : "Si"} </td>
        </tr>
      </tbody>
    </Table>
  )
}

export default PedidosClientesParaVendedor


// const { usuario } = pedidosParaVendedor;
// const nombreUsuario = usuario.nombre;