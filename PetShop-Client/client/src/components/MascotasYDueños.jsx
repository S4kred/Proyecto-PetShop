import { Table } from "react-bootstrap";

const MascotasYDueños = ({cliente}) => {

  const {tipo, edad, peso, usuario, nombre, castrado} = cliente
  const nombreUsuario = usuario.nombre;
  const apellidoUsuario = usuario.apellido;
  const emailUsuario = usuario.email;

  return (
    <Table striped hover size="sm" variant='dark'>
      <thead>
          <tr>
            <th>Nombre del Cliente</th>
            <th>Email</th>
            <th>Nombre de la mascota</th>
            <th>Tipo</th>
            <th>Edad</th>
            <th>Peso</th>
            <th>Castrad@</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nombreUsuario} {apellidoUsuario}</td>
          <td>{emailUsuario}</td>
          <td>{nombre}</td>
          <td>{tipo}</td>
          <td>{edad}</td>
          <td>{peso}</td>
          <td>{(!castrado) ? 'No' : 'Si'}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default MascotasYDueños