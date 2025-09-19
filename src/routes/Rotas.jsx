// No seu arquivo Rotas.jsx
import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import PageLayout from "../layouts/PageLayout";
import Pesquisa from "../pages/Pesquisa";
import TesteImovelCard from "../pages/TesteImovelCard";
import Favoritos from "../pages/Favoritos";
import Perfil from "../pages/Perfil";
import PerfilLayout from "../layouts/PerfilLayout";
import Imoveis from "../pages/Imoveis";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Inicio />} />
                    <Route path="/pesquisa" element={<Pesquisa />} />
                    <Route path="/favoritos" element={<Favoritos />} />
                    <Route path="/meu-perfil" element={<PerfilLayout/>}>
                        <Route index element={<Perfil />} />
                        <Route path="/meu-perfil/imoveis" element={<Imoveis />} />
                    </Route>
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/teste-card" element={<TesteImovelCard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;