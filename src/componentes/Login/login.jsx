import sphere from "../../assets/sphere-green.gif";
import logoXcien from "../../assets/xcien_logo.png";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Aquí iría la lógica de autenticación
        // ...
        navigate('/dashboard');
    };
    const handleRegistro = () => {
        // Aquí iría la lógica de autenticación
        // ...
        navigate('/registrarse');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full text-white font-sans bg-gray-900 overflow-hidden">
            {/* Lado izquierdo - Visible solo en pantallas medianas/grandes */}
            <div className="hidden md:flex md:w-1/2 lg:w-3/4 h-full items-center justify-center relative">
                {/* Fondo animado */}
                <img
                    src={sphere}
                    alt="background"
                    className="absolute w-full h-full object-cover opacity-70 rotate-180 pointer-events-none"
                />
                <div className="relative z-10 text-center p-4">
                    <div className="text-green-500 text-4xl md:text-5xl lg:text-6xl font-bold">
                        <img 
                            src={logoXcien} 
                            alt="Xcien Logo" 
                            className="w-full max-w-xs md:max-w-sm lg:max-w-md mx-auto"
                        />
                    </div>
                </div>
            </div>

            {/* Lado derecho - Ocupa todo el ancho en móviles */}
            <div className="w-full md:w-1/2 lg:w-1/4 flex justify-center items-center min-h-[80vh] md:min-h-screen p-4 sm:p-6 relative z-10">
                <div className="w-full bg-gray-800 max-w-md space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-xl shadow-lg md:shadow-[15px_30px_30px_5px_rgba(0,0,0,0.3)]">
                    {/* Título con logo en móviles */}
                    <div className="md:hidden flex justify-center mb-4">
                        <img 
                            src={logoXcien} 
                            alt="Xcien Logo" 
                            className="h-12"
                        />
                    </div>
                    <h2 className="text-xl sm:text-2xl font-bold text-center text-white">Bienvenido a Xcien</h2>

                    {/* Input Email */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Email</label>
                        <input
                            type="email"
                            placeholder="tu@email.com"
                            className="w-full text-black px-4 py-2 sm:py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Input Contraseña */}
                    <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-300">Contraseña</label>
                        <input
                            type="password"
                            placeholder="********"
                            className="w-full text-black px-4 py-2 sm:py-3 bg-[#D9D9D9] border border-gray-700 rounded-lg
                            placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        />
                    </div>

                    {/* Enlace "¿Olvidaste la contraseña?" */}
                    <div className="text-right">
                        <a href="/forgot" className="text-sm text-green-500 hover:text-green-400 hover:underline">
                            ¿Olvidaste la contraseña?
                        </a>
                    </div>

                    {/* Botones de Acción */}
                    <div className="flex flex-col sm:flex-row justify-between gap-3 mt-4 pt-2">
                        <button
                            onClick={handleLogin}
                            className="w-full sm:w-1/2 px-4 py-2 sm:py-3 bg-green-600/80 text-white
                                font-medium rounded-full text-sm hover:opacity-90 transition-all duration-300
                                outline-none ring-2 sm:ring-3 ring-green-500 ring-opacity-50
                                cursor-pointer"
                        >
                            Iniciar sesión
                        </button>

                        <button
                            onClick={handleRegistro}
                            className="w-full sm:w-1/2 px-4 py-2 sm:py-3 bg-green-600/80 text-white
                                font-medium rounded-full text-sm hover:opacity-90 transition-all duration-300
                                outline-none ring-2 sm:ring-3 ring-green-500 ring-opacity-50
                                cursor-pointer"
                        >
                            Registrarme
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;