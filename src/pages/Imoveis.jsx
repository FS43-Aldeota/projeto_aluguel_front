import { Popconfirm, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import Button from "../components/Button";


const Imoveis = () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [imoveis, setImoveis] = useState([]);

    async function buscarMeusImoveis() {
        try {
            const request = await fetch(`http://localhost:8000/imoveis/usuario/${usuario.usuario_id}`);
            const response = await request.json();
            if (Array.isArray(response)) {
                setImoveis(response);
            } else {
                alert("Houve um problema na requisição")
            }
        } catch (error) {
            alert(error.message);
        }
    }

    useEffect(() => {
        buscarMeusImoveis();
    }, [])

    return (
        <>
            <div className="flex justify-between items-center mb-4">
                <h1 className="font-bold text-3xl text-orange-600">
                    Meus imoveis
                </h1>
                <Button
                    titulo={"Cadastrar imóvel"}
                />
            </div>
            <Table
                dataSource={imoveis || []}
            >
                <Table.Column
                    key={"imovel_id"}
                    dataIndex={"imovel_id"}
                    title="id"
                />
                <Table.Column
                    key={"imovel_nome"}
                    dataIndex={"imovel_nome"}
                    title="Nome"
                />
                <Table.Column
                    key={"imovel_disponibilidade"}
                    dataIndex={"imovel_disponibilidade"}
                    title="Disponibilidade"
                />
                <Table.Column
                    title="Tipo"
                    render={(_, imovel) => (
                        <>{imovel.tipos.tipo_nome}</>
                    )}
                />
                <Table.Column
                    title="Ações"
                    className="w-[100px]"
                    render={(_, imovel) => (
                        <div className="flex gap-4 *:cursor-pointer *:hover:fill-orange-600">
                            <Tooltip
                                title="Editar"
                            >
                                <BiPencil size={20} />
                            </Tooltip>
                            <Tooltip
                                title="Deletar"
                            >
                                <Popconfirm
                                    title="Aviso:"
                                    description="Deseja realmente apagar este registro?"
                                    okText="Sim"
                                    cancelText="Não"
                                >
                                    <BiTrash size={20} />
                                </Popconfirm>
                            </Tooltip>
                        </div>
                    )}
                />
            </Table>
        </>
    );
}

export default Imoveis;