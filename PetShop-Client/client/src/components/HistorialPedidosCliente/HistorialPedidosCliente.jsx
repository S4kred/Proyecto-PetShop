import usePedidos from '../../hooks/usePedidos';
import PedidosClientes from '../PedidosClientes';

import "./HistorialPedidosCliente.scss"

export default function HistorialPedidosCliente() {
  
  const { pedidos } = usePedidos()

  console.log(pedidos)

  return (
    <>
      <h4>Historial de pedidos</h4>
        { pedidos.length ? ( 
            <>
              {pedidos.map( pedido => (
                <PedidosClientes 
                  key={pedido._id}
                  pedido={pedido}
                />
              ))}
            </>
          ) : 
          ( 
            <>
              <h2>No hay pedidos realizados</h2>
            </>
          )
        }      
    </>  
  );
}



