import { useState } from "react";
import logoXcien from "../xcien_logo.png";

function TopBar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 bg-opacity-80 shadow-sm w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logoXcien} alt="Xcien Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Botón menú cel */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {mobileMenuOpen ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Menú escritorio + cerrar sesión */}
          <div className="hidden sm:flex items-center space-x-6">
            <a
              href="dashboard"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Inicio
            </a>
            <a
              href="perfil"
              className="border-transparent text-gray-500 hover:border-gray-300 hover:text-white inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
            >
              Perfil
            </a>
            {/* Botón cerrar sesión */}
            <a
              href="/"
              className="bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200"
            >
              Cerrar Sesión
            </a>
          </div>
        </div>
      </div>

      {/* Menú cel */}
      {mobileMenuOpen && (
        <div className="sm:hidden px-4 pt-2 pb-3 space-y-1 bg-gray-800">
          <a
            href="dashboard"
            className="block text-gray-300 hover:text-white text-base font-medium"
          >
            Inicio
          </a>
          <a
            href="perfil"
            className="block text-gray-300 hover:text-white text-base font-medium"
          >
            Perfil
          </a>
          <a
            href="/logout"
            className="block mt-2 bg-red-600 hover:bg-red-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200"
          >
            Cerrar Sesión
          </a>
        </div>
      )}
    </nav>
  );
}

export default TopBar;
