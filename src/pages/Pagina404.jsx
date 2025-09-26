import { Link } from "react-router";

const Pagina404 = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Página não encontrada</h1>
            <Link to={"/"} className="font-bold text-lg">Voltar</Link>
        </div>
    );
}

export default Pagina404;