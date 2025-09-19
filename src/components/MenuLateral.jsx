import { NavLink } from "react-router";

const MenuLateral = () => {
    return (
        <ul className="grid gap-3">
            <li>
                <NavLink end className={"text-gray-700! [&.active]:text-orange-600!"} to={'/meu-perfil'}>Meu perfil</NavLink>
            </li>
            <div className="border border-black/15"></div>
            <li>
                <NavLink end className={"text-gray-700! [&.active]:text-orange-600!"} to={'/meu-perfil/imoveis'}>Meus imóveis</NavLink>
            </li>
        </ul>
    );
}

export default MenuLateral;