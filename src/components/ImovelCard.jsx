import { HeartIcon } from "@heroicons/react/24/outline";
import { ArrowsPointingOutIcon, HomeIcon } from "@heroicons/react/24/outline";
import { FaCar } from "react-icons/fa";

const ImovelCard = ({ imovel }) => {
    return (
        <div className="flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden">
            <div className="md:w-1/3 w-full">
                <img
                    src={imovel.imagem_url || "https://via.placeholder.com/400x300"}
                    alt={imovel.imovel_nome}
                    className="w-full h-52 md:h-full object-cover"
                />
            </div>

            <div className="flex-1 p-4 flex flex-col justify-between">
                <p className="font-semibold text-gray-800">
                    {imovel.imovel_endereco}, {imovel.imovel_endereco_numero}
                </p>
                <p className="text-sm text-gray-600">{imovel.imovel_bairro}</p>

                <p className="text-sm text-gray-600 my-2 line-clamp-2">
                    {imovel.imovel_descricao}
                </p>

                <div className="flex gap-6 text-sm text-gray-700 mt-2">
                    <span className="flex items-center gap-1">
                        <ArrowsPointingOutIcon className="w-5 h-5 text-gray-500" />
                        {imovel.imovel_metragem}m²
                    </span>
                    <span className="flex items-center gap-1">
                        <HomeIcon className="w-5 h-5 text-gray-500" />
                        {imovel.imovel_quartos} Quartos
                    </span>
                    <span className="flex items-center gap-1">
                        <FaCar className="w-5 h-5 text-gray-500" />
                        {imovel.imovel_garagens} Garagem
                    </span>
                </div>
            </div>


            <div className="flex md:flex-col justify-between items-center md:items-end p-4 w-full md:w-1/4 gap-3">

                <button className="text-gray-400 hover:text-orange-600">
                    <HeartIcon className="w-7 h-7" />
                </button>

                <p className="font-bold text-lg md:text-xl text-orange-600">
                    R$ {imovel.preco?.toLocaleString("pt-BR") || "Consultar"}
                </p>

                <button className="bg-orange-600 text-white px-3 py-2 rounded-lg hover:bg-orange-700 text-sm md:text-base">
                    Contatar
                </button>
            </div>
        </div>
    );
};

export default ImovelCard;