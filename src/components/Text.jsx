import { useState } from "react";
import TextH2 from "./TextH2";

// Aquí controlamos si el texto se muestra o no con un botón

const Text = () =>
{

    const [show , setShow] = useState(false);

    function mostrarTexto()
    {
        setShow(!show)
    }

    return <div>
        <button onClick={mostrarTexto}> {show === true ? "Ocultar" : "Mostrar"} </button>
        {show === true && <TextH2/>}
    </div>
}

export default Text;