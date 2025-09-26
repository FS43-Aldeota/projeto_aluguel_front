import { Drawer, Form, Input, Popconfirm, Table, Tooltip, Button as ButtonAnt, Divider, InputNumber, Radio } from "antd";
import { useEffect, useState } from "react";
import { BiPencil, BiTrash } from "react-icons/bi";
import Button from "../components/Button";


const Imoveis = () => {

    const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};
    const [imoveis, setImoveis] = useState([]);
    const [gavetaAberta, setGavetaAberta] = useState(false);

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

    function criarImovel(dados){
        console.log(dados);
        
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
                    onClick={() => setGavetaAberta(true)}
                />
            </div>
            <Table
                dataSource={imoveis || []}
                rowKey={"imovel_id"}
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

            <Drawer
                title="Adicionar Imóvel"
                closable={{ 'aria-label': 'Close Button' }}
                onClose={() => setGavetaAberta(false)}
                open={gavetaAberta}
            >
                <Form
                    layout="vertical"
                    onFinish={criarImovel}
                >
                    <Form.Item
                        name={"imovel_nome"}
                        label={"Nome do imóvel"}
                        rules={[{ required: true, message: 'Campo obrigatório!' }]}
                    >
                        <Input type="text" placeholder="Digite o nome do imóvel" />
                    </Form.Item>
                    <Divider orientation="left" style={{ borderColor: '#00000050' }}>Endereço</Divider>
                    <Form.Item
                        name={"imovel_cep"}
                        label={"CEP"}
                        rules={[{ required: true, message: 'Campo obrigatório!' }]}
                    >
                        <Input type="text" placeholder="00000000" />
                    </Form.Item>
                    <Form.Item
                        name={"imovel_endereco"}
                        label={"Endereço"}
                        rules={[{ required: true, message: 'Campo obrigatório!' }]}
                    >
                        <Input type="text" placeholder="Rua ...." />
                    </Form.Item>
                    <div className="flex gap-4">
                        <Form.Item
                            name={"imovel_endereco_numero"}
                            label={"Nº"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                            className="w-[100px]"
                        >
                            <Input type="text" placeholder="000" />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_complemento"}
                            label={"Complemento"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                            className="flex-1"
                        >
                            <Input type="text" placeholder="Ap 300" />
                        </Form.Item>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            name={"imovel_bairro"}
                            label={"Bairro"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <Input type="text" placeholder="bairro" />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_cidade"}
                            label={"Cidade"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <Input type="text" placeholder="cidade" />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_estado"}
                            label={"Estado"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <Input type="text" placeholder="estado" />
                        </Form.Item>
                    </div>
                    <Divider orientation="left" style={{ borderColor: '#00000050' }}>Características</Divider>
                    <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                            name={"imovel_quartos"}
                            label={"Quartos"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_banheiros"}
                            label={"Banheiros"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_garagens"}
                            label={"Garangens"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_metragem"}
                            label={"Metragem"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                        <Form.Item
                            name={"imovel_valor"}
                            label={"Valor"}
                            rules={[{ required: true, message: 'Campo obrigatório!' }]}
                        >
                            <InputNumber style={{ width: "100%" }} />
                        </Form.Item>
                    </div>
                    <Form.Item
                        name={"imovel_disponibilidade"}
                        label={"Disponibilidade"}
                        rules={[{ required: true, message: 'Campo obrigatório!' }]}
                    >
                        <Radio.Group
                            options={[
                                {
                                    key: 1,
                                    value: "comprar",
                                    label: "comprar"
                                },
                                {
                                    key: 2,
                                    value: "alugar",
                                    label: "alugar"
                                }
                            ]}
                        />
                    </Form.Item>
                    <Form.Item
                        name={"imovel_descricao"}
                        label={"Descrição do imóvel"}
                        rules={[{ required: true, message: 'Campo obrigatório!' }]}
                    >
                        <Input.TextArea rows={4} placeholder="Descrição do imóvel" />
                    </Form.Item>

                    <ButtonAnt
                        htmlType="submit"
                    >Enviar</ButtonAnt>
                </Form>
            </Drawer>
        </>
    );
}

export default Imoveis;