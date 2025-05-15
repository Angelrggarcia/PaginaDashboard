import {formatChartData} from "../../Servicios/networkDataService.jsx";
import {TIME_PERIODS} from "../../Variables/periodos.jsx";
import {CORE_BORDER_DEVICES} from "../../Variables/coreDevices.jsx";
import {useMultipleNetworkData} from "../../Servicios/multipleNetworkData.jsx";
import TrafficChart from "../Graphics/trafficChart.jsx";
import '../Inicio/contenido.css';

const TrafficDashboard = () => {
    const {
        devicesData,
        loading,
        error
    } = useMultipleNetworkData([
        { id: CORE_BORDER_DEVICES.PUEBLA, period: TIME_PERIODS.YEAR },
        { id: CORE_BORDER_DEVICES.LEON_STADIUM, period: TIME_PERIODS.YEAR }
    ]);

    if (loading) return <div>Cargando datos...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!devicesData || devicesData.length < 2) return <div>No hay datos suficientes</div>;

    const [pueblaData, leonData] = devicesData;
    const formattedPuebla = formatChartData(pueblaData);
    const formattedLeon = formatChartData(leonData);

    return (
        <div className="flex h-130 text-white font-sans">
            <main className="flex-1 bg-gray-900/60 p-6 overflow-y-auto space-y-6 rounded-tl-2xl rounded-bl-2xl custom-scrollbar">
                <TrafficChart data={formattedPuebla} title="Tráfico de red - Puebla" />
                <TrafficChart data={formattedLeon} title="Tráfico de red - León Stadium" />
            </main>
        </div>
    );
};

export default TrafficDashboard;