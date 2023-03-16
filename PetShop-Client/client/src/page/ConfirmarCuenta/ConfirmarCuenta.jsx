import { Container, Row, Col } from  "react-bootstrap";
import { useParams, Link } from "react-router-dom";
import "./ConfirmarCuenta.scss";
import { useEffect, useState } from "react";
import clienteAxios from '../../config/axios';
import { toast } from 'react-toastify';

const ConfirmarCuenta = () => {
  const [cuentaConfirmada, setCuentaConfirmada] = useState(false);
  const [loading, setloading] = useState(true);
  const [esExitoso, setEsExitoso] = useState(false);

  const params = useParams()
  const { id } = params

  useEffect(() => {
      const confirmarCuenta = async () => {
        try {
          const url = `/usuarios/confirmar/${id}`
          const { data } = await clienteAxios(url)
          setCuentaConfirmada(true)
          setEsExitoso(true)
        } catch (error) {
          setEsExitoso(false)
        }
        setloading(false)
      }
      confirmarCuenta();
  }, [])

  const mensaje = esExitoso ? "Cuenta confirmada" : "Error al confirmar cuenta"

  return (
    <>
      <Container className="confirmar-cuenta">
        <Row>
          <h2>Confirmar tu cuenta</h2>
          {cuentaConfirmada && (
          <Link to="/">Iniciar Sesión</Link>)}
        </Row>
      </Container>
      {!loading && toast(mensaje, { type: esExitoso ? toast.TYPE.SUCCESS : toast.TYPE.ERROR })}
    </>
  )
};

export default ConfirmarCuenta;
