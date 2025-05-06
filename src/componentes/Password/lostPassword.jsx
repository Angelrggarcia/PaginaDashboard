function ForgotPasswordPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
            <div className="max-w-md w-full bg-gray-800 p-8 rounded-2xl shadow-lg">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">¿Olvidaste tu contraseña?</h2>
                <p className="text-sm text-gray-400 mb-4 text-center">
                    Ingresa tu correo electrónico y te enviaremos instrucciones para restablecerla.
                </p>
                <form className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full rounded-lg px-4 py-2 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                            placeholder="tucorreo@ejemplo.com"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                    >
                        Enviar enlace de recuperación
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <a href="/" className="text-sm text-green-400 hover:underline">
                        ¿Ya recordaste tu contraseña? Inicia sesión
                    </a>
                </div>
            </div>
        </div>
    );
}
export default ForgotPasswordPage;