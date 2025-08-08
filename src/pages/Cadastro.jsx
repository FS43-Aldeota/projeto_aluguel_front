import { useState } from 'react';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

const Cadastro = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ usuario_email: '', usuario_senha: '', usuario_nome: '' });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (evento) => {
        setForm({ ...form, [evento.target.name]: evento.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/usuarios', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (data.type) {
                toast(`Aviso: ${data.description}`, {
                    position: "bottom-right",
                    className: "bg-red-600! text-white!"
                });
                return;
            }

            toast(`Aviso: ${data.description}`, {
                position: "bottom-right",
                className: "bg-green-600! text-white!"
            });

            navigate('/login');
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-gray-100 font-inter">
            <main className="flex-grow flex items-center justify-center px-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 sm:p-10 flex flex-col relative"
                >
                    <a href="/login" className='absolute top-[46px] left-[28px] fill-orange-600'><box-icon name='arrow-back'></box-icon></a>
                    <div className="flex justify-center items-center mb-8">
                        <div className="bg-orange-600 p-2 rounded-lg mb-4 mr-3">
                            <img
                                src="/src/assets/favicon.png"
                                alt="Logo AlugaWeb"
                                className="w-8 h-8"
                            />
                        </div>
                        <h2 className="text-3xl font-bold text-orange-600">
                            AlugaWeb
                        </h2>
                    </div>

                    {error && (
                        <div className="mb-4 p-3 bg-red-50 text-red-600 text-sm rounded-lg text-center">
                            {error}
                        </div>
                    )}

                    <div className="space-y-5">
                        <div>
                            <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                                Nome
                            </label>
                            <input
                                type="nome"
                                name="usuario_nome"
                                id="nome"
                                placeholder="Digite seu nome"
                                required
                                value={form.usuario_nome}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                name="usuario_email"
                                id="email"
                                placeholder="email@alugaweb.com"
                                required
                                value={form.usuario_email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                Senha
                            </label>
                            <input
                                type="password"
                                name="usuario_senha"
                                id="password"
                                placeholder="••••••••"
                                required
                                value={form.usuario_senha}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 outline-none transition"
                            />
                        </div>


                        <button
                            type="submit"
                            disabled={isLoading}
                            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${isLoading
                                    ? 'bg-orange-400 cursor-not-allowed'
                                    : 'bg-orange-600 hover:bg-orange-700'
                                }`}
                        >
                            <p className="font-bold">Cadastrar</p>
                        </button>
                    </div>
                </form>
            </main>

            <footer className="py-4 mb-12 text-center font-bold text-orange-600 text-sm bg-transparent">
                © {new Date().getFullYear()} AlugaWeb - Todos os direitos reservados
            </footer>
        </div>
    );
};

export default Cadastro;