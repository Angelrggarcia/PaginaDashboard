import React, { useEffect, useState } from 'react';
import {networkData as initialNetworkData} from '../../Variables/networkData.jsx';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    Legend
} from 'recharts';
import Mayo from '../../assets/mayonesa.jpeg';
import { notificationsData } from "../../Variables/notificaciones.jsx";
import { messagesData } from "../../Variables/mensajes.jsx";
import './contenido.css';
import { ListSection } from "../Listas/listas.jsx";
import {CustomTooltip} from "./CustomToolTip/customTooltip.jsx";


const Contenido = () => {
    const [networkData, setNetworkData] = useState(initialNetworkData);

    useEffect(() => {
        fetch('/api/graph.php?type=port_bits&id=233239&legend=no&height=300&width=750&period=31536000&loading=lazy&format=json')
            .then(response => response.json())
            .then(data => {
                const updatedData = {
                    meta: {
                        start: data.meta.start,
                        end: data.meta.end,
                        step: data.meta.step,
                        legend: data.meta.legend
                    },
                    data: data.data
                };

                setNetworkData(updatedData);
            })
            .catch(error => {
                console.error('Error al obtener los datos:', error);
            });
    }, []);
    const formattedData = networkData.data.map((point, index) => ({
        time: new Date(networkData.meta.start * 1000 + index * networkData.meta.step * 1000).toLocaleDateString(),
        in: point[0] || 0,
        inAvg: point[2] || 0,
        out: point[3] || 0,
        outAvg: point[5] || 0
    }));

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
                <div className=" gap-4">
                    <div className="col-span-1 bg-gray-800 rounded-lg p-4">
                        <h3 className="text-lg font-semibold mb-2">Tráfico de red</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={formattedData}>
                                <XAxis dataKey="time" hide />
                                <YAxis />
                                <Tooltip content={<CustomTooltip />}/>
                                <Legend />
                                <Line type="monotone" dataKey="in" stroke="#00ff00" name="Entrada" dot={false} />
                                <Line type="monotone" dataKey="inAvg" stroke="#82ca9d" name="Entrada Promedio" dot={false} />
                                <Line type="monotone" dataKey="out" stroke="#ff0000" name="Salida" dot={false} />
                                <Line type="monotone" dataKey="outAvg" stroke="#ff7300" name="Salida Promedio" dot={false} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
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