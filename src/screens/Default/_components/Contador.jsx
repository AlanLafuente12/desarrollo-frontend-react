import { useState, useEffect } from "react";

const Contador = () => {
    const [contador, setContador] = useState(0);
    const handleContador1 = () => {
        setContador(contador + 1);
    };
    const handleContador2 = () => {
        setContador(contador - 1);
    };

    // Esta funcion especial se ejecuta cuando el componente se haya montado
    useEffect(() => {
        setContador(12);
    }, []);

    // Esta funcion especial se ejecuta cuando haya cambiado el valor de contador
    useEffect(() => {
        if (contador === 15) {
            alert('Contador es 15');
        }
    }, [contador]);

    // esta funcion especials e ejcuta cuando el componente se desmonta
    useEffect(() => {
        return () => {
            console.log('El componenete se desmonto');
        }
    });


    return (
        <>
            <h4>Componente Contador</h4>
            <h5>Contador: {contador}</h5>
            <div className="button-container">
                <button onClick={handleContador2}>Disminuir</button>
                <button onClick={handleContador1}>Aumentar</button>
            </div>
        </>
    );
};

export default Contador;