import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";
import Login from "../pages/Login";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;