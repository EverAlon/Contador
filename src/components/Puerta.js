import { useState } from "react";

export default function Puerta(){
    const puertas = ['Abierta.jpg', 'Cerrada.jpg'];
    const [estadoP, setEstadoP] = useState(0);

    function cerrarAbrir(){
        setEstadoP((estadoP+1)%2);
    }

    return(
        <>
            <div>
                <input type="button" value={estadoP === 0 ? '<' : '>' } onClick={cerrarAbrir} />
                {puertas[estadoP].replace(".jpg", "")}
                
                <img src={process.env.PUBLIC_URL + "/images/" + puertas[estadoP]} alt="bandera" />
            </div>
        </>
    )
}