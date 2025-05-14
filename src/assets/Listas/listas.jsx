import React from "react";

export const ListSection = ({ title, items }) => {
    return ( <div className="bg-white/10 p-4 rounded-2xl shadow-md h-full"> <h3 className="text-lg font-bold mb-4">{title}</h3> <div className="space-y-3">
            {items.map((item) => ( <div key={item.id} className="bg-gray-900 p-3 rounded-xl cursor-pointer hover:bg-gray-800 transition"> <h4 className="font-bold text-[#12F59B]">{item.title}</h4> <p className="text-sm">{item.content}</p> <span className="text-xs text-gray-300">{item.date}</span> </div>
            ))} </div> </div>
    );
};