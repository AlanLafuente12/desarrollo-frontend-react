import { useState } from "react";

const Contador = () => {
    const [contador, setContador] = useState([1]);
    const handleContador1 = () => {
        console.log(contador)
        contador.push(contador.length+1)
        setContador(contador.slice());
    };
    const handleContador2 = () => {
        console.log(contador)
        contador.pop()
        setContador(contador.slice());
    };

    return (
        <>
            <h4>Componente Contador Array</h4>
            <h5>{contador[contador.length-1]}</h5>
            <div>
                <button onClick={handleContador1}>Aumentar</button>
                <button onClick={handleContador2}>Disminuir</button>
            </div>
        </>
    );
};

export default Contador;