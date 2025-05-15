import React from 'react';
const LoadingSpinner = () => {
    return (
        <div className="flex flex-col items-center content-center w-full h-full p-4">
            <div className="w-1/3 aspect-square">
                <svg className="w-full h-full animate-spin text-[#12F59B]" viewBox="0 0 24 24" fill="none">
                    <circle
                        className="opacity-25"
                        cx="12" cy="12" r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                    />
                    <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                </svg>
            </div>
            <p className="text-[#12F59B] text-2xl font-bold mt-3 text-center">Actualizando datos...</p>
        </div>
    );
};

export default LoadingSpinner;