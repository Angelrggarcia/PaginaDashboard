export const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{
                backgroundColor: '#1f2937', // gris oscuro
                color: '#ffffff',
                padding: '10px',
                borderRadius: '8px',
                border: '1px solid #ffffffcc'
            }}>
                <p style={{ fontWeight: 'bold' }}>{label}</p>
                {payload.map((item, index) => (
                    <p key={index} style={{ color: item.color }}>
                        {item.name}: {item.value.toFixed(2)}
                    </p>
                ))}
            </div>
        );
    }

    return null;
};
