import { useState } from 'react';
import LocationIcon from "../assets/location-icon.png"
import ImagemInicio from "../assets/imagem-aluga.png"

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
        <div className='flex-1 flex flex-col md:flex-row items-center justify-between px-[50px] gap-8 mt-auto'>
            <div className=''>
        <h1 className="font-extrabold text-[36px] text-gray-700 mb-4">Onde você quer morar?</h1>
        <div className='flex items-center rounded-full border-[3px] border-orange-600 justify-between w-[600px] h-[75px] px-4 py-3'>
        <img className='h-[35px] w-[35px]' src= {LocationIcon} alt="" />
        <input className='my-2 mx-[16px] flex-1 text-gray-700 placeholder-gray-400 outline-none' type="text" placeholder=''/>
        <h3 className='bg-orange-600 px-4 py-2 font-extrabold text-[20px] text-white rounded-full align-baseline flex justify-center hover:bg-orange-700 transform-fill duration-300 cursor-pointer'>Buscar</h3>
        </div>
            </div>
        <img className='h-[489px] w-[550px]' src={ImagemInicio} alt="" />
        </div>
    );
}

export default Inicio;