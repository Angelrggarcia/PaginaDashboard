
import {useCallback, useEffect, useRef, useState} from "react";
import {fetchNetworkData} from "./networkDataService.jsx";


export const useMultipleNetworkData = (devices) => {
    const [devicesData, setDevicesData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshing, setRefreshing] = useState(false);
    const [error, setError] = useState(null);
    const [retryCount, setRetryCount] = useState(0);
    const retryLimit = 3;

    // Usamos useRef para mantener una referencia estable de devices
    const devicesRef = useRef(devices);
    useEffect(() => {
        devicesRef.current = devices;
    }, [devices]);

    const fetchAllDevicesData = useCallback(async (isRefresh = false) => {
        if (isRefresh) {
            setRefreshing(true);
        } else if (retryCount === 0) {
            setLoading(true);
        }

        try {
            const promises = devicesRef.current.map(device =>
                fetchNetworkData({
                    id: device.id,
                    period: device.period
                })
            );

            const results = await Promise.all(promises);
            setDevicesData(results);
            setError(null);
            setRetryCount(0);
        } catch (err) {
            setError(err.message);
            const currentRetry = retryCount + 1;
            setRetryCount(currentRetry);

            if (currentRetry < retryLimit) {
                setTimeout(() => fetchAllDevicesData(isRefresh), 4000);
            }
        } finally {
            if (isRefresh) {
                setRefreshing(false);
            } else {
                setLoading(false);
            }
        }
    }, [retryCount]); // Ahora solo depende de retryCount

    useEffect(() => {
        // Carga inicial
        fetchAllDevicesData();

        // Configurar intervalo de actualización
        const intervalId = setInterval(() => {
            fetchAllDevicesData(true);
        }, 300000);

        return () => clearInterval(intervalId);
    }, [fetchAllDevicesData]); // Dependencia estable

    const refresh = useCallback(() => {
        setRetryCount(0);
        fetchAllDevicesData(true);
    }, [fetchAllDevicesData]);

    return {
        devicesData,
        loading,
        refreshing,
        error,
        refresh,
        lastUpdated: new Date()
    };
};