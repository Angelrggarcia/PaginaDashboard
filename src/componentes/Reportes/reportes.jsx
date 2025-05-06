import TopBar from '../../assets/Topbar/topBar.jsx'
import Fondo from "../../assets/pagInicio.png";
import { reportes } from "../../variablesTemp/reportes.jsx"
import Campanita from "../../assets/Campanita/notificationPopup.jsx";
function Reportes() {
    const prioridadColor = {
        Alta: "bg-red-400 text-red-800 border border-red-800",
        Media: "bg-yellow-300 text-yellow-800 border border-yellow-800",
        Baja: "bg-green-400 text-green-800 border border-green-800",
    };
    return (
        <div className="min-h-screen relative">
            <img
                src={Fondo}
                alt="background"
                className="absolute w-full h-full object-cover z-0"
            />
            <div className="absolute w-full h-full object-cover relative z-10">
                <TopBar/>
                <h2 className="text-2xl font-semibold mb-1 text-white px-10 pt-2">Reportes</h2>
                <p className="text-gray-400 mb-4 px-10 pt-2">Se muestran los reportes más recientes</p>
                <div className="px-10">
                    <div
                        className="grid grid-cols-[25%_6%_28%_14%_10%_10%_7%] justify-center items-center px-2 text-sm font-semibold text-white bg-slate-800 px-6 rounded-t-lg">
                        <div>Reportado por</div>
                        <div>ID</div>
                        <div>Asunto</div>
                        <div>Encargado</div>
                        <div>Prioridad</div>
                        <div>Estatus</div>
                        <div>Fecha</div>
                    </div>

                    <div className="bg-gray-900 rounded-lg p-4 space-y-3 px-4 pt-2">
                        {reportes.map((reporte, index) => (
                            <div key={index}
                                 className="grid grid-cols-[25%_6%_28%_14%_10%_10%_7%] bg-gray-200 text-black rounded-lg p-4 flex justify-center items-center">
                                <div className="flex items-center space-x-4">
                                    <div className="w-10 h-10 bg-gray-400 rounded-full"/>
                                    <div>
                                        <p className="font-semibold">{reporte.reportadoPor}</p>
                                        <p className="text-xs text-gray-600">{reporte.email}</p>
                                    </div>
                                </div>
                                <p className="w-24 text-center">{reporte.reporteID}</p>
                                <p className="w-64">{reporte.asunto}</p>
                                <p className="w-40 text-center">{reporte.encargado}</p>
                                <span
                                    className={`px-3 py-1 rounded-full text-sm font-medium text-center ${prioridadColor[reporte.prioridad]}`}
                                >
                                {reporte.prioridad}
                            </span>
                                <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {reporte.estatus}
                    </span>
                                <p className="w-28 text-right text-gray-600">{reporte.fecha}</p>
                            </div>
                        ))}
                    </div>

                    {/* Paginación */}
                    <div className="flex justify-center items-center mt-6 space-x-2">
                        <button
                            className="text-white"
                        >←
                        </button>
                        {[1, 2, 3, "...", 10].map((num, idx) => (
                            <button
                                key={idx}
                                className={`w-8 h-8 rounded-full text-sm ${
                                    num === 1 ? "bg-white text-black font-bold" : "bg-gray-700 text-white"
                                }`}
                            >
                                {num}
                            </button>
                        ))}
                        <button
                            className="text-white"
                        >→
                        </button>
                    </div>
                </div>
            </div>
            <Campanita/>
        </div>
    );
}

export default Reportes;