import React from 'react';
import Mayo from '../../assets/mayonesa.jpeg';
import {notificationsData} from "../../variablesTemp/notificaciones.jsx";
import {messagesData} from "../../variablesTemp/mensajes.jsx";
import './inicio.css';

// Datos simulados para la red
const networkData = {
    labels: ['Nodo 1', 'Nodo 2', 'Nodo 3', 'Nodo 4', 'Nodo 5'],
    stability: [85, 92, 78, 95, 88],
    latency: [45, 32, 55, 28, 40],
    throughput: [120, 150, 90, 180, 130]
};

    const NetworkChart = ({ title, data, labels, metric, context }) => {
    const maxValue = Math.max(...data);

    return (
        <div className="bg-white/10 p-4 rounded-2xl shadow-md">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <div className="h-48 flex items-end gap-2 mb-4">
                {data.map((value, index) => (
                    <div
                        key={index}
                        className="flex-1 bg-[#12F59B]/30 hover:bg-[#12F59B]/50 transition-all rounded-t-lg relative group"
                        style={{ height: `${(value / maxValue) * 80}%` }}
                    >
                        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 bg-gray-900 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                            {labels[index]}: {value}{metric}
                        </div>
                    </div>
                ))}
            </div>
            <p className="text-sm text-gray-300">{context}</p>
        </div>
    );
};

const ListSection = ({ title, items }) => {
    return (
        <div className="bg-white/10 p-4 rounded-2xl shadow-md h-full">
            <h3 className="text-lg font-bold mb-4">{title}</h3>
            <div className="space-y-3">
                {items.map((item) => (
                    <div key={item.id} className="bg-gray-900 p-3 rounded-xl cursor-pointer hover:bg-gray-800 transition">
                        <h4 className="font-bold text-[#12F59B]">{item.title}</h4>
                        <p className="text-sm">{item.content}</p>
                        <span className="text-xs text-gray-300">{item.date}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

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
            <main className="flex-1 bg-gray-900/60 p-6 overflow-y-auto space-y-6 bg-[#000000]/40 rounded-tl-2xl rounded-bl-2xl custom-scrollbar">
                {/* Sección de Gráficos de Red */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <NetworkChart
                        title="Estabilidad de la Red"
                        data={networkData.stability}
                        labels={networkData.labels}
                        metric="%"
                        context="Estabilidad promedio de la red: 87.6%"
                    />
                    <NetworkChart
                        title="Latencia de Nodos"
                        data={networkData.latency}
                        labels={networkData.labels}
                        metric="ms"
                        context="Latencia promedio: 40ms (Objetivo: <50ms)"
                    />
                    <NetworkChart
                        title="Rendimiento de Tráfico"
                        data={networkData.throughput}
                        labels={networkData.labels}
                        metric="Mbps"
                        context="Capacidad máxima: 200Mbps por nodo"
                    />
                </div>

                {/* Sección de Notificaciones y Mensajes */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <ListSection
                        title="Notificaciones"
                        items={notificationsData}
                    />
                    <ListSection
                        title="Mensajes"
                        items={messagesData}
                    />
                </div>
            </main>
        </div>
    );
};

export default Contenido;