import usePedidos from '../../hooks/usePedidos';
import PedidosClientes from '../PedidosClientes';

import "./HistorialPedidosCliente.scss"

export default function HistorialPedidosCliente() {
  
  const { pedidos } = usePedidos()

  return (
    <>
      <h4 className='titulo'>Historial de pedidos</h4>
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
              <h2 className='titulo'>No hay pedidos realizados</h2>
            </>
          )
        }      
    </>  
  );
}



