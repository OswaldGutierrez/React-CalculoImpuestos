import { useState } from "react"


// Bloque de código para crear un textboxt y la información que se escribe ahí mostrarla abajo.

const TextH2 = () =>
{
    const[text, setText] = useState("");

    const contenedorTexto = (e) => 
    {
        setText(e.target.value)
    }    

    return (
        <div>
            <input type = "text" onChange={ contenedorTexto} />
            <p>{text}</p>
        </div>
    )
}

export default TextH2;