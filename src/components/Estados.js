import { useState } from "react";

export function Estados(){

    const luz = ["apagado","encendido al 25%","encendido al 50%","encendido al 75%","encendido al 100%"];

    var [estado, setEstado] = useState(luz[0]);
    

    function incrementar(){
        const cont = luz.indexOf(estado);

        if(cont < luz.length-1){
            setEstado(luz[cont+1]);
        } else {
            setEstado(luz[0]);
        }
    }

    function decrementar(){
        const cont = luz.indexOf(estado);
        
        if(cont > 0){
            setEstado(luz[cont-1]);
        } else {
            setEstado(luz[4]);
        }
    }
    function resetear(){
        setEstado(luz[0]);
    }

    return(
        <>
            <div>Iluminacion: {estado}</div>
            <button onClick={incrementar}>Incrementa</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetea</button>
            
        </>
    )

}