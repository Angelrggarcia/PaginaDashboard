// src/components/CustomSlider.jsx
import {useRef, useState} from 'react';

const CustomSlider = ({
                          min = 0,
                          max = 11,
                          initialValue = 11,
                          steps = [],
                          labels = {},
                          onChange = () => {}
                      }) => {
    const [value, setValue] = useState(initialValue);
    const [isDragging, setIsDragging] = useState(false);
    const sliderRef = useRef(null);
    const thumbRef = useRef(null);

    // Calcular posición porcentual
    const getPercentage = (val) => ((val - min) / (max - min)) * 100;

    // Manejar el inicio del arrastre
    const startDrag = (e) => {
        setIsDragging(true);
        document.addEventListener('mousemove', handleDrag);
        document.addEventListener('mouseup', stopDrag);
        handleDrag(e);
    };

    // Manejar el arrastre
    const handleDrag = (e) => {
        if (!isDragging || !sliderRef.current) return;

        const sliderRect = sliderRef.current.getBoundingClientRect();
        let newValue = ((e.clientX - sliderRect.left) / sliderRect.width) * (max - min) + min;

        // Ajustar a los steps si existen
        if (steps.length > 0) {
            newValue = steps.reduce((prev, curr) =>
                Math.abs(curr - newValue) < Math.abs(prev - newValue) ? curr : prev
            );
        }

        // Limitar entre min y max
        newValue = Math.max(min, Math.min(max, newValue));
        setValue(newValue);
        onChange(newValue);
    };

    // Detener el arrastre
    const stopDrag = () => {
        setIsDragging(false);
        document.removeEventListener('mousemove', handleDrag);
        document.removeEventListener('mouseup', stopDrag);
    };

    // Manejar clicks en la barra
    const handleSliderClick = (e) => {
        if (e.target === thumbRef.current) return;
        handleDrag(e);
    };

    return (
        <div className="w-full py-6 px-2">
            <div
                ref={sliderRef}
                className="relative h-4 bg-gray-200 rounded-full cursor-pointer"
                onClick={handleSliderClick}
            >
                {/* Barra de fondo */}
                <div
                    className="absolute h-full bg-blue-500 rounded-full"
                    style={{ width: `${getPercentage(value)}%` }}
                ></div>

                {/* Thumb (control deslizable) */}
                <div
                    ref={thumbRef}
                    className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full shadow-md border-2 border-blue-500 cursor-grab active:cursor-grabbing"
                    style={{ left: `${getPercentage(value)}%` }}
                    onMouseDown={startDrag}
                ></div>
            </div>

            {/* Marcas y etiquetas */}
            <div className="relative mt-4">
                {steps.length > 0 ? (
                    steps.map((step) => (
                        <div
                            key={step}
                            className="absolute -translate-x-1/2 text-xs text-gray-600"
                            style={{ left: `${getPercentage(step)}%` }}
                        >
                            <div className="w-px h-2 bg-gray-400 mx-auto mb-1"></div>
                            {labels[step] || step}
                        </div>
                    ))
                ) : (
                    <>
                        <div className="absolute left-0 text-xs text-gray-600">{min}</div>
                        <div className="absolute left-1/2 -translate-x-1/2 text-xs text-gray-600">
                            {(min + max) / 2}
                        </div>
                        <div className="absolute right-0 text-xs text-gray-600">{max}</div>
                    </>
                )}
            </div>

            {/* Valor actual (opcional) */}
            <div className="mt-6 text-center">
        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
          Valor actual: {value}
        </span>
            </div>
        </div>
    );
};

export default CustomSlider;