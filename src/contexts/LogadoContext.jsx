import { createContext, useState } from "react";

export const LogadoContext = createContext();

const LogadoProvider = ({ children }) => {
    const [logado, setLogado] = useState(sessionStorage.getItem("token") || false);
    return (
        <LogadoContext.Provider value={{ logado, setLogado }}>
            {children}
        </LogadoContext.Provider>
    );
}

export default LogadoProvider;