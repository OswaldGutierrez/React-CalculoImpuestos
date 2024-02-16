import { useState } from "react";




function InputComponent() {
    const [inputValue, setInputValue] = useState("");
    const [resultado, setResultado] = useState("");

    const handleInputChange = (event) => {
        const value = event.target.value;

        // Validar si el valor ingresado es un número
        if (!isNaN(value)) {
            setInputValue(value);
        }
    };

    const handleClick = () => {
        // Realizar los procedimientos sobre el valor ingresado
        const valor = parseInt(inputValue);
        const resultadoProcedimientos = valor * (0.11); // Por ejemplo, multiplicar por 2
        
        // Actualizar el estado con el resultado de los procedimientos
        setResultado(resultadoProcedimientos);
    };

    return (
        <div>
            <label>
                0. Ingrese el monto para calcular el RTI:
                <input type="text" value={inputValue} onChange={handleInputChange} />
            </label>
            <button onClick={handleClick}>Realizar RTI</button>
            <p> El monto a pagar por el impuesto de retención en la fueste es: {resultado}</p>
            <hr/>
        </div>
    );
}

export default InputComponent;
