import usePedidos from '../../hooks/usePedidos';
import PedidosClientesParaVendedor from '../PedidosClientesParaVendedor';

import "./HistorialPedidosParaVendedor.scss"

export default function HistorialPedidosParaVendedor() {
  
  const { pediosClientes } = usePedidos()

  console.log(pediosClientes)

  return (
    <>
      <h4>Pedidos a despachar y realizados</h4>
        { pediosClientes.length ? ( 
            <>
              {pediosClientes.map( pedido => (
                <PedidosClientesParaVendedor 
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