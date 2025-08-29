import { useState } from 'react';

const Inicio = () => {

    let nome = "Gleidson";
    function mudarNome(outroNome){
        nome = outroNome;
        console.log(nome);
    }
    console.log(nome);

    const [numero, setNumero] = useState(0);
    function add(){
        setNumero(numero + 1);
    }    
    console.log(numero);
    return (
        <>
            
        </>
    );
}

export default Inicio;