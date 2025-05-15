import {Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import {CustomTooltip} from "../Inicio/CustomToolTip/customTooltip.jsx";

const TrafficChart = ({ data, title }) => {
    return (
        <div className="col-span-1 bg-gray-800 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2 text-center">{title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="time" hide />
                    <YAxis hide />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <Line type="monotone" dataKey="in" stroke="#00ff00" name="Entrada bytes" dot={false} />
                    <Line type="monotone" dataKey="inAvg" stroke="#82ca9d" name="Entrada b/s Promedio" dot={false} />
                    <Line type="monotone" dataKey="out" stroke="#ff0000" name="Salida bytes" dot={false} />
                    <Line type="monotone" dataKey="outAvg" stroke="#ff7300" name="Salida b/s Promedio" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};


export default TrafficChart;