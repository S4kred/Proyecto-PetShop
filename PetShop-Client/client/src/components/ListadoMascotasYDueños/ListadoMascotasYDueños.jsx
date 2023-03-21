import useMascotas from "../../hooks/useMascotas";
import MascotasYDueños from "../MascotasYDueños";

import "./ListadoMascotasYDueños.scss";


export default function ListadoMascotasYDueños () {

  const { usuariosYMascotas } = useMascotas()

  return (
    <>
      <h4 className='titulo'>Lista de Clientes</h4>
        { usuariosYMascotas.length ? ( 
            <>
              {usuariosYMascotas.map( cliente => (
                <MascotasYDueños 
                  key={cliente._id}
                  cliente={cliente}
                />
              ))}
            </>
          ) : 
          ( 
            <>
              <h2 className='titulo'>No hay Clientes</h2>
            </>
          )
        }      
    </>
  )
}

