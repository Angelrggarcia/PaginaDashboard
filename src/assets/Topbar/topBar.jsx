import logoXcien from "../xcien_logo.png";

function TopBar(){
    return(
    <div>
        {/* Barra de navegación superior */}
        <nav className="bg-gray-900 bg-opacity-80 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Logo a la izquierda */}
                    <div className="flex-shrink-0 flex items-center">
                                    <span className="w-1/8 text-xl font-bold text-gray-900">
                                        <a
                                            href="/"
                                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                                        >
                                            <img src={logoXcien} alt="Xcien Logo"/>
                                        </a>

                                    </span>
                    </div>

                    {/* Menú central */}
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a
                            href="dashboard"
                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            Inicio
                        </a>
                        <a
                            href="reportes"
                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            Reportes
                        </a>
                        <a
                            href="perfil"
                            className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                        >
                            Perfil
                        </a>
                    </div>

                    <div className="flex-shrink-0 flex items-center">
                        <span className="text-xl font-bold text-green-600">XCIEN</span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
    );
}
export default TopBar;