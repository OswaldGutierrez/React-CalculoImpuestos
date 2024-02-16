import { useState } from "react";



function InputReteica() {
    const [inputValueIva, setInputValueIva] = useState("");
    const [resultadoIva, setResultadoIva] = useState("");

    
    const handleInputChange = (event) => {
        const valueIva = event.target.value;

        if (!isNaN(valueIva)) {
            setInputValueIva(valueIva);
        }
    };

    const handleClick = () => {

        const valorIva = parseInt(inputValueIva);
        const resultadoProcedimientosIva = valorIva * (0.19);

        setResultadoIva(resultadoProcedimientosIva);
    };

    return (
        <div>
            <label>
                2. Ingrese el monto para calcular el IVA:
                <input type="text" valueIva={inputValueIva} onChange={handleInputChange} />
            </label>
            <button onClick={handleClick}> Realizar Iva</button>
            <p> El monto a pagar por el IVA es: {resultadoIva}</p>
            <hr/>
        </div>
        
    );
}

export default InputReteica;

