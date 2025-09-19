import Button from "../components/Button";


const Perfil = () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};

    return (
        <>
            <h1 className="font-bold text-3xl text-orange-600 mb-4">Minhas informações</h1>
            <div className="border border-black/15 rounded-lg p-4">
                <h6>Nome: {usuario.usuario_nome}</h6>
                <h6>Email: {usuario.usuario_email}</h6>
                <h6>Telefone: {usuario.usuario_telefone}</h6>
                <div className={"mt-4"}>
                    <Button 
                        titulo={"Editar perfil"}
                    />
                </div>
            </div>
        </>
    );
}

export default Perfil;