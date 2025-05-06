import React from 'react';
import Mayo from '../../assets/mayonesa.jpeg';
import Grafico from '../../assets/grafico.png';

const Contenido = () => {
    return (
        <div className="flex h-130 text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800/70 py-10 flex flex-col items-center justify-center rounded-2xl">
                <img src={Mayo} alt="Perfil" className="w-24 h-24 rounded-full mb-4 border-4 border-white" />
                <div className="text-center">
                    <h2 className="text-lg font-semibold">Angel García</h2>
                    <p className="text-sm">XCIEN0134566</p>
                    <p className="mt-2 text-xs font-bold">REY DEL MUNDO</p>
                    <p className="text-sm">JEFE</p>
                    <p className="text-sm italic mt-2">CEO</p>
                </div>
                <button className="mt-6 px-4 py-2 bg-green-600 rounded hover:bg-[#0B744F] cursor-pointer">Logout</button>
                <p className="mt-auto text-xs text-gray-300 pt-6">Último inicio de sesión 25 Abril 2025</p>
            </aside>

            {/* Main Content */}
            <main
                className="flex-1 bg-gray-900/60 p-6 overflow-y-auto space-y-6 bg-[#000000]/40 rounded-tl-2xl rounded-bl-2xl custom-scrollbar">
                {/* Header */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md font-bold">Reportes</div>
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md font-bold">Roles</div>
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md font-bold">Noticias y actualizaciones</div>
                </div>

                {/* Gráfico */}
                <div className="bg-white/10 p-4 rounded-2xl shadow-md">
                    <h3 className="text-lg mb-2 font-bold">Red al momento</h3>
                    <img src={Grafico} alt="Gráfico" className="w-full h-full object-contain rounded cursor-pointer"/>
                </div>

                {/* Notificaciones y Mensajes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Notificaciones */}
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md">
                        <h3 className="text-lg mb-4 font-bold">Notificaciones</h3>
                        {[1, 2].map((_, i) => (
                            <div key={i} className="bg-gray-900 p-3 rounded-xl mb-3 cursor-pointer">
                                <h4 className="font-bold text-[#12F59B]">Título de Notificación</h4>
                                <p className="text-sm">Bla bla bla</p>
                                <span className="text-xs text-gray-300">18 - Abril - 2025</span>
                            </div>
                        ))}
                    </div>

                    {/* Mensajes */}
                    <div className="bg-white/10 p-4 rounded-2xl shadow-md">
                        <h3 className="text-lg mb-4 font-bold">Mensajes</h3>
                        {[1, 2].map((_, i) => (
                            <div key={i} className="bg-gray-900 p-3 rounded-xl mb-3 cursor-pointer">
                                <h4 className="font-bold text-[#12F59B]">Título de Mensaje</h4>
                                <p className="text-sm">Bla bla bla</p>
                                <span className="text-xs text-gray-300">16 - Abril - 2025</span>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Contenido;
