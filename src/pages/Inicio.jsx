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
            Pagina inicial
            <h1>{nome}</h1>
            <button onClick={() => mudarNome("Pedro")}>trocar nome</button>
            <h1>{numero}</h1>
            <button onClick={add}>add</button>
        </>
    );
}

export default Inicio;