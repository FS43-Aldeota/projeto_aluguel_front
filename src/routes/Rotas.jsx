import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";


const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;