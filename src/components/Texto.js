import { useState } from "react";

export function Texto(){

    var [texto, setTexto] = useState("encendido")
    function switch2(){
        if(texto === "encendido"){
            setTexto("apagado");
        } else{
            setTexto("encendido");
        }
    }


    return(
        <>
            <div>{texto}</div>
            <button onClick={switch2}>Apagar/Encender</button>
        </>
    );

}