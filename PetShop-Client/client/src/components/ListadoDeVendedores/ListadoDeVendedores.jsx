import useAuth from "../../hooks/useAuth";
import TablaVendedores from "../TablaVendedores";

import "./ListadoDeVendedores.scss";

export default function ListadoDeVendedores () {

  const { Vendedores } = useAuth()

  return (
    <>
      <h4 className='titulo'>Lista de Vendedores</h4>
        { Vendedores.length ? ( 
            <>
              {Vendedores.map( vendedor => (
                <TablaVendedores 
                  key={vendedor._id}
                  vendedor={vendedor}
                />
              ))}
            </>
          ) : 
          ( 
            <>
              <h2 className='titulo'>No hay Vendedores</h2>
            </>
          )
        }      
    </>
  )
}
