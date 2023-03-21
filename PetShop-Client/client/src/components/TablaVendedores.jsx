import { Table } from "react-bootstrap";

const TablaVendedores = ({vendedor}) => {

  const {nombre, apellido, email} = vendedor

  return (
    <Table striped hover size="sm">
      <thead>
          <tr>
            <th>Vendedor</th>
            <th>Email</th>
          </tr>
      </thead>
      <tbody>
        <tr>
          <td>{nombre} {apellido}</td>
          <td>{email}</td>
        </tr>
      </tbody>
    </Table>
  )
}

export default TablaVendedores;