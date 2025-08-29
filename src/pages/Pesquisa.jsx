import Filtro from "../components/Filtro";
import ImovelCard from "../components/ImovelCard";
import PesquisaFiltro from "../components/PesquisaFiltro";

const Pesquisa = () => {

    const imovelTeste = {
        imovel_nome: "Casa na Praia",
        imovel_endereco: "Av. Beira Mar",
        imovel_endereco_numero: "123",
        imovel_bairro: "Aldeota",
        imovel_cidade: "Fortaleza",
        imovel_descricao: "Linda casa com vista para o mar, 2 suítes, piscina e ampla garagem. Excelente localização próximo ao centro comercial.",
        imovel_metragem: 150,
        imovel_quartos: 3,
        imovel_banheiros: 2,
        imovel_garagens: 2,
        preco: 1200000,
        imagem_url: "https://img.apresenta.me/DcxJDoAgDADA3-TIJpuHvsVIJaSGYKMxfF-nAUMoE8KC14Q2RKXsPfIEhw80OZWrhko2xVUf49Z3YRp8i15Ttla3wUfntyD-hQlIHw.jpg"
    };

    return (
        <div className="flex px-[50px] gap-[30px] pt-5">
            {/* lado esquerdo */}
            <div className=" w-[394px]">
                <h3 className="flex gap-2 text-[18px] mb-[54px]"><box-icon name='slider-alt'></box-icon>Filtros</h3>
                <div className="border border-black/15 rounded-xl pb-7">
                    <div className="flex">
                        <button className="h-[53px] flex-1 bg-gray-300 text-gray-900 font-semibold rounded-tl-xl">Comprar</button>
                        <button className="flex-1 bg-orange-600 text-white font-semibold rounded-tr-xl">Alugar</button>
                    </div>
                    <div className="px-7 pb-[34px] border-b border-black/15">
                        <h3 className="text-[18px] mt-[30px] mb-[14px] font-semibold">Localização</h3>
                        <div className=" gap-4 border border-black/15 h-[54px] rounded-lg flex items-center px-5 mb-[14px]">
                            <box-icon type='solid' name='map'></box-icon>
                            <input className="flex-1" type="text" placeholder="Digite o bairro,rua ou cidade" />
                        </div>
                        <div className="flex justify-start">
                            <div className="bg-orange-600 text-white fill-white h-[35px] flex items-center gap-[7px] rounded-full px-[14px] font-semibold">
                                Fortaleza-CE
                                <box-icon name='x'></box-icon>
                            </div>
                        </div>
                    </div>
                    <div className="px-7 pb-[34px] border-b border-black/15">
                        <h3 className="text-[18px] mt-[30px] mb-[14px] font-semibold">Tipos de imóveis</h3>
                        <div className="flex gap-4">
                            <button className="h-[75px] bg-orange-600 rounded text-white fill-white flex flex-col justify-center px-6 items-center"><box-icon name='home' ></box-icon>Casa</button>
                            <button className="h-[75px] bg-orange-600/20 rounded text-orange-600 fill-orange-600 flex flex-col justify-center px-6 items-center"><box-icon name='buildings' ></box-icon>Apartamento</button>
                        </div>
                    </div>
                    <div className="flex px-7 gap-4 pb-[34px] border-b border-black/15">
                        <div className="flex-1">
                            <h3 className="text-[18px] mt-[30px] mb-[14px] font-semibold">Preço a partir de</h3>
                            <input type="text" className="h-[54px] border border-black/15 rounded-lg pl-4 w-full" placeholder="0" />
                        </div>

                        <div className="flex-1">
                            <h3 className="text-[18px] mt-[30px] mb-[14px] font-semibold">Até</h3>
                            <input type="text" className="h-[54px] border border-black/15 rounded-lg pl-4 w-full" placeholder="0" />
                        </div>
                    </div>
                    <div className="border-b border-black/15">
                        <Filtro titulo = "Quantidade de quartos"/>

                    </div>
                    <div className="border-b border-black/15">
                        <Filtro titulo = "Banheiros"/>

                    </div>
                    <div>
                        <Filtro titulo = "Garagens"/>
                        </div>
                </div>


            </div>
            {/* Lado direito */}
            <div className="flex-1">
                <PesquisaFiltro />
                <div className="grid gap-7">
                    <ImovelCard imovel={imovelTeste} direcao={"x"}/>
                    <ImovelCard imovel={imovelTeste} direcao={"x"}/>
                    <ImovelCard imovel={imovelTeste} direcao={"x"}/>
                </div>
            </div>
        </div>
    );
}

export default Pesquisa;