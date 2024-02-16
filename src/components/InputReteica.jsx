import { useState } from "react";


function InputReteica() {
    const [inputValueReteica, setInputValueReteica] = useState("");                         // Para el RETEICA
    const [resultadoReteica, setResultadoReteica] = useState("");

    
    const handleInputChange = (event) => {
        const valueReteica = event.target.value;

        if (!isNaN(valueReteica)) {
            setInputValueReteica(valueReteica);
        }
    };

    const handleClick = () => {

        const valorReteica = parseInt(inputValueReteica);
        const resultadoProcedimientosReteica = valorReteica * (0.01);

        setResultadoReteica(resultadoProcedimientosReteica);
    };

    return (
        <div>
            <label>
                1. Ingrese el monto para calcular el Reteica:
                <input type="text" valueReteica={inputValueReteica} onChange={handleInputChange} />
            </label>
            <button onClick={handleClick}> Realizar Reteica</button>
            <p> El monto a pagar por el Reteica es: {resultadoReteica}</p>
            <hr/>
        </div>
    );
}

export default InputReteica;