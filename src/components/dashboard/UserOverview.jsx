import React from 'react';

const UserOverview = () => (
    <div className="flex flex-wrap justify-start gap-4 pt-6 rounded-lg">
        {/* Main Chart */}
        <div className="md:w-[583px] h-[534px] bg-white rounded-xl p-4 shadow">
            <h2 className="font-semibold text-sm mb-2">Datos: Like vs. Dislike</h2>
            <div className="h-64 flex items-center justify-center text-gray-400 text-sm">[Line Chart]</div>
        </div>

        <div>
            {/* Donut Chart */}
            <div className="md:w-[210px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                <h2 className="text-sm font-semibold mb-2">Publicidad consumida</h2>
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">[Donut Chart]</div>
            </div>

            {/* Bar Chart */}
            <div className="md:w-[210px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                <h2 className="text-sm font-semibold mb-2">Usuarios por estado</h2>
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">[Bar Chart]</div>
            </div>
        </div>


        <div>
            {/* New Users Chart */}
            <div className="bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                <h2 className="text-sm font-semibold mb-2">Usuarios nuevos</h2>
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">[+34% Graph]</div>
            </div>

            {/* Device Donut Chart */}
            <div className="bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                <h2 className="text-sm font-semibold mb-2">Usuarios por dispositivo</h2>
                <div className="flex-1 flex items-center justify-center text-gray-400 text-sm">[Donut Chart]</div>
            </div>
        </div>

    </div>
);

export default UserOverview;
