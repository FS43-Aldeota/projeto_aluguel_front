// No seu arquivo Rotas.jsx
import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import TesteImovelCard from "../pages/TesteImovelCard"; // Adicione esta linha

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/teste-card" element={<TesteImovelCard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;