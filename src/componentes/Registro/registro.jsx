import imgregistro from "../../assets/registro.png";
import logoXcien from "../../assets/xcien_logo.png";
import {useNavigate} from "react-router-dom";

function Registro() {
    const navigate = useNavigate();

    const handleInicio = () => {
        // Aquí iría la lógica de autenticación
        // ...
        navigate('/dashboard');
    };

    return (
        <div className="bg-gray-800 flex h-screen w-full text-white font-sans">

            {/* Lado izquierdo */}
            <div className="w-1/2 flex justify-center items-center min-h-screen p-6 relative z-10">
                <div
                    className="w-full h-full space-y-6 p-8 bg-gray-900
                    rounded-xl shadow-[15px_30px_30px_5px_rgba(0,0,0,0.3)] ">
                    {/* Título */}
                    <h2 className="text-2xl font-bold text-center text-white">Crea una nueva cuenta</h2>
                    <div>
                        <div className=" flex grid-col">

                            {/* Input Nombre */}
                            <label className="block w-1/2 text-sm font-medium text-gray-300 px-1">Nombre
                                <input
                                    type="nombre"
                                    placeholder="Nombre"
                                    className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </label>


                            {/* Input Apellido */}
                            <label className="block text-sm font-medium text-gray-300 px-1">Apellido
                                <input
                                    type="apellido"
                                    placeholder="Apellido"
                                    className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </label>

                        </div>

                    </div>

                    <div className="space-y-2">
                        <div className="space-y-2 flex grid-col">

                            {/* Input País */}
                            <label className="block w-1/2 text-sm font-medium text-gray-300 px-1">País
                                <input
                                    type="pais"
                                    placeholder="País"
                                    className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </label>


                            {/* Input Ciudad */}
                            <label className="block text-sm font-medium text-gray-300 px-1">Ciudad
                                <input
                                    type="ciudad"
                                    placeholder="Ciudad"
                                    className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </label>

                        </div>

                    </div>

                    <div className="space-y-2">
                        <div className="space-y-2 flex grid-col">

                            {/* Input Fecha de nacimiento */}
                            <label className="block w-2/5 text-sm font-medium text-gray-300 px-1">Fecha de nacimiento
                                <input
                                    type="birthday"
                                    placeholder="00/00/0000"
                                    className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                                />
                            </label>

                            {/* Input Género */}
                            <div className="block  text-sm text-gray-300">
                                <label className="font-medium px-1">Género</label>
                                <div className="flex flex-row gap-2 pl-4 mt-1 pt-3 justify-between">
                                    <label className="inline-flex items-center gap-5 text-gray-200">
                                        <input type="radio" name="gender" value="hombre" className="accent-green-500" />
                                        Hombre
                                    </label>
                                    <label className="inline-flex items-center gap-2 text-gray-200">
                                        <input type="radio" name="gender" value="mujer" className="accent-green-500" />
                                        Mujer
                                    </label>
                                    <label className="inline-flex items-center gap-2 text-gray-200">
                                        <input type="radio" name="gender" value="otro" className="accent-green-500" />
                                        Otro
                                    </label>
                                </div>
                            </div>

                        </div>

                    </div>

                    {/* Input Email */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="password"
                            placeholder="tu@email.com"
                            className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Input Contraseña */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-black px-4 py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />

                        <div className="flex flex-row justify-center mt-1 pt-3">
                            {/* Botón de Inicio de Sesión */}
                            <button
                                onClick={handleInicio}
                                className="w-1/2 px-4 py-3 bg-green-600/80 text-white
                                font-medium rounded-full text-sm hover:opacity-90 transition-all duration-300
                                outline-none ring-3 ring-green-500 ring-opacity-50
                                cursor-pointer"
                            >
                                Registrarme
                            </button>
                        </div>

                    </div>

                </div>
            </div>
            {/* Lado derecho */}
            <div className="w-3/4 flex items-center justify-center relative">
                {/* Fondo que no intercepta clicks */}
                <img
                    src={imgregistro}
                    alt="background"
                    className="absolute w-full h-full object-cover opacity-70 pointer-events-none"
                />
                <div className="relative z-10 text-center">
                    <div className="text-green-500 text-6xl font-bold">
                        <img src={logoXcien} alt="Xcien Logo"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Registro;