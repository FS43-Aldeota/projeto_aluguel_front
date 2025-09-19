import { Outlet } from "react-router";
import MenuLateral from "../components/MenuLateral";

const PerfilLayout = () => {
    return (
        <div className="p-15 flex gap-4 items-start">
            <div className="w-[200px] border border-black/15 rounded-lg p-4">
                <MenuLateral />
            </div>
            <div className="flex-1">
                <Outlet />
            </div>
        </div>
    );
}

export default PerfilLayout;