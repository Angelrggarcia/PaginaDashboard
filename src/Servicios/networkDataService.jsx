import {useCallback, useEffect, useState} from "react";

const buildApiUrl = (params = {}) => {
    const defaultParams = {
        //valores por defecto para todos los parametros de la API
        type: 'port_bits',
        id: '233239',
        legend: 'no',
        height: '300',
        width: '750',
        period: '31536000',
        loading: 'lazy',
        format: 'json'
    };

    const finalParams = { ...defaultParams, ...params };

    // Aqui se hace la llamada con un mapa
    const queryString = Object.entries(finalParams)
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

    return `/api/graph.php?${queryString}`;
};

export const fetchNetworkData = async (params = {}) => {
    const url = buildApiUrl(params);

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('api_token')}`
            }
        });

        if (response.status === 401) {
            // Token expirado, renovar
            return fetchNetworkData(params); // Reintento de conexion para renovar token
        }

        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};

export const formatChartData = (networkData) => {
    if (!networkData || !networkData.data || !networkData.meta) return [];

    // formato de mapa para graficar
    return networkData.data.map((point, index) => {

        // si la estructura tiene medida de 6, entonces se clasificara como formato corto
        const isShortFormat = point.length === 6;

        /* Si el formato es corto, se toma el valor del segundo y cuarto valor, ya que no existen los
        valores del trafico de bits/s.
        La manera en que funciona es la siguiente:

         inValue = isShortFormat ? point[1] : point[0];

         Esto significa que si es shortFormat se su igualdad es a point[1], sino, su valor es igual a point[0]*/

        const inValue = isShortFormat ? point[1] : point[0];
        const outValue = point[3];

        const inAvgValue = isShortFormat ? 0 : point[2];
        const outAvgValue = isShortFormat ? 0 : point[5];

        return {
            time: new Date(networkData.meta.start * 1000 + index * networkData.meta.step * 1000).toLocaleDateString(),
            in: inValue || 0,
            inAvg: inAvgValue || 0,
            out: outValue || 0,
            outAvg: outAvgValue || 0
        };
    });
};

// Hook personalizado para manejar los datos de red
export const useNetworkData = (params = {}) => {
    const [networkData, setNetworkData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (isRefresh = false) => {
        if (isRefresh) setRefreshing(true);

        try {
            const data = await fetchNetworkData(params);
            setNetworkData(data);
            setError(null);
        } catch (err) {
            if (!isRefresh) setError(err.message);
            setTimeout(fetchData, 4000);
        } finally {
            if (isRefresh) {
                setRefreshing(false);
            } else {
                setLoading(false);
            }
        }
    }, [params]);

    useEffect(() => {
        fetchData();

        return () => {

        };
    }, [fetchData]);

    return { networkData, loading, refreshing, error };
};