import ImovelCard from "../components/ImovelCard";


const TesteImovelCard = () => {
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
        <div className="p-8">
            <h1 className="text-2xl font-bold mb-6">Teste do Card de Imóvel</h1>
            <div className="max-w-3xl mx-auto">
                <ImovelCard imovel={imovelTeste} />
            </div>
        </div>
    );
};

export default TesteImovelCard;