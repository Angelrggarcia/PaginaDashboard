import React from 'react';
import mayo from '../../assets/mayonesa.jpeg';
import './contenido.css';
import CustomSlider from "./CustomSlider/customSlider.jsx";
import {formatChartData, useNetworkData} from "../../Servicios/networkDataService.jsx";
import {TIME_PERIODS} from "../../Variables/periodos.jsx";
import {CORE_BORDER_DEVICES} from "../../Variables/coreDevices.jsx";
import LoadingSpinner from "../LoadingSpinner/loadingSpinner.jsx";
import TrafficChart from "../Graphics/trafficChart.jsx";

const Contenido = () => {
    const { networkData, loading, refreshing, error } = useNetworkData({
        id: CORE_BORDER_DEVICES.PUEBLA,
        period: TIME_PERIODS.YEAR
    });

    const handleSliderChange = (value) => {
        console.log("Nuevo valor:", value);
    };

    if ((loading || refreshing || !networkData) && !error) {
        return (
            <div className="align-center flex items-center content-center justify-center">
                <LoadingSpinner />
            </div>
        );
    }
    if (error) return (
        <div className="align-center flex items-center content-center justify-center">
            <LoadingSpinner />
        </div>
    );
    if (!networkData) return <div className="text-white">No hay datos disponibles</div>;

    const formattedData = formatChartData(networkData);

    return (
        <div className="flex h-130 text-white font-sans">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800/70 py-10 flex flex-col items-center justify-center rounded-2xl">
                <img src={mayo} alt="Perfil" className="w-24 h-24 rounded-full mb-4 border-4 border-white"/>

                <div className="text-center">
                    <h2 className="text-lg font-semibold">Angel García</h2>
                    <p className="text-sm">XCIEN0134566</p>
                    <p className="mt-2 text-xs font-bold">REY DEL MUNDO</p>
                    <p className="text-sm">JEFE</p>
                    <p className="text-sm italic mt-2">CEO</p>
                </div>

                <div className="max-w-flex mx-auto">
                    <div>
                        <h2 className="text-lg font-semibold mb-4">Filtro de tiempo</h2>
                        <CustomSlider
                            min={1}
                            max={11}
                            initialValue={1}
                            steps={[1,2,3,4,5,6,7,8,9,10,11]}
                            labels={{
                                1: 'Hoy',
                                2: 'Ayer',
                                3: '2 Dias'
                            }}
                            onChange={handleSliderChange}
                        />
                    </div>
                </div>

                <button className="mt-6 px-4 py-2 bg-green-600 rounded hover:bg-[#0B744F] cursor-pointer">Logout</button>
                <p className="mt-auto text-xs text-gray-300 pt-6">Último inicio de sesión 25 Abril 2025</p>
            </aside>

            {/* Main Content */}

            <main className="flex-1 bg-gray-900/60 p-6 overflow-y-auto space-y-6 bg-[#000000]/40 rounded-tl-2xl
            rounded-bl-2xl custom-scrollbar">

                {/* Mostrar spinner de carga inicial */}
                {loading && (
                    <div className="flex justify-center items-center h-full">
                        <LoadingSpinner/>
                    </div>
                )}

                {/* Sección de Gráficos de Red */}
                <a
                    href="/reportes"
                >
                    <TrafficChart data={formattedData} title="Tráfico de red - Puebla"/>
                </a>
            </main>
        </div>
);
};

export default Contenido;