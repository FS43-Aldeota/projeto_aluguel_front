import { BrowserRouter, Route, Routes } from "react-router";
import Inicio from "../pages/Inicio";

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Rotas;