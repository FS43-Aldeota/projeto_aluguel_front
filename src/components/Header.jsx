import { Link, useNavigate } from "react-router";
import logo from "../assets/Favicon.png"
import Button from "./Button";
import ButtonLink from "./ButtonLink";
import { useContext, useState } from 'react';
import { LogadoContext } from "../contexts/LogadoContext";
const Header = () => {
    const { logado } = useContext(LogadoContext);
    const [menuAberto, setMenuAberto] = useState(false);
    const navigate = useNavigate();
    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};

    return (
        <header className="px-4 lg:px-[50px] py-4 flex justify-between items-center border-b border-black/15">
            <div className="flex gap-[10px] items-center">
                <box-icon
                    name='menu'
                    className="fill-gray-600 lg:hidden"
                    onClick={() => {
                        setMenuAberto(true);
                    }}
                ></box-icon>
                <img className="w-[36px] h-[36px] bg-orange-600 rounded p-[6px]" src={logo} alt="" />
                <h1 className="text-orange-600 text-[20px] font-bold">Aluga Web</h1>
            </div>
            {
                logado ? (
                    <>
                        <div className="hidden lg:flex items-center gap-[50px]">
                            <ButtonLink titulo={"Favoritos"} icon={<box-icon name='heart' ></box-icon>} />
                            <Button titulo={"Anunciar"} icon={<box-icon type='solid' name='megaphone'></box-icon>} />
                            <div className="flex gap-3">
                                <div className="text-right">
                                    <a 
                                        className="font-bold text-orange-600! block"
                                        onClick={() => {
                                            navigate("/meu-perfil")
                                        }}
                                    >
                                        {usuario.usuario_nome}
                                    </a>
                                    <a 
                                    className="text-gray-800! font-semibold text-[12px]" 
                                    onClick={() => {
                                        sessionStorage.clear()
                                        navigate("/login")
                                    }}
                                    >Sair</a>
                                </div>
                                <Link to={"/meu-perfil"}>
                                    <div className="w-[50px] h-[50px] bg-orange-600 rounded-full flex justify-center items-center">
                                        <span className="text-white font-semibold text-3xl leading-[50px]">{usuario.usuario_nome[0].toUpperCase()}</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <box-icon name='slider-alt' className="fill-gray-600 lg:hidden"></box-icon>
                        <div
                            className={`w-full h-screen overflow-hidden bg-black/85 fixed top-0 left-0 duration-300 ${!menuAberto && 'opacity-0 invisible'}`}
                            onClick={() => {
                                setMenuAberto(false);
                            }}
                        ></div>
                        <div className={`w-3/4 h-screen bg-white fixed top-0 left-0 duration-300 delay-200 ${menuAberto ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div className="flex gap-[10px] items-center px-4 py-5">
                                <img className="w-[36px] h-[36px] bg-orange-600 rounded p-[6px]" src={logo} alt="" />
                                <h1 className="text-orange-600 text-[20px] font-bold">Aluga Web</h1>
                            </div>
                            <div className="flex gap-4 items-center bg-orange-600/7 px-4 py-5">
                                <div className="w-[70px] h-[70px] bg-orange-600 rounded-full"></div>
                                <div className="text-right">
                                    <h3 className="font-semibold text-orange-600 text-xl">{usuario.usuario_nome}</h3>
                                </div>
                            </div>
                            <nav className="py-4 flex flex-col gap-4">
                                <ButtonLink titulo={"Favoritos"} icon={<box-icon name='heart' ></box-icon>} />
                                <ButtonLink titulo={"Meu perfil"} icon={<box-icon name='heart' ></box-icon>} />
                                <ButtonLink
                                    titulo={"Sair"}
                                    icon={<box-icon name='log-out'></box-icon>}
                                    onClick={() => {
                                        sessionStorage.clear()
                                        navigate("/login")
                                    }}
                                />
                            </nav>
                        </div>
                    </>
                ) : (
                    <Button
                        titulo={"Entrar"}
                        icon={<box-icon name='user'></box-icon>}
                        onClick={() => navigate("/login")}
                    />
                )
            }

        </header>

    );
}

export default Header;