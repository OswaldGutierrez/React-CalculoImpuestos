import { useState } from "react";


const Counter = () =>
{

    const [number , setNumber] = useState(1);

    const sumar = () =>{
        setNumber(number + 1)
    }


    return <div>
            <h2>{number}</h2>
            <button onClick={sumar}> Aquí sumamos </button>
            <hr/>
        </div>
}

export default Counter;
