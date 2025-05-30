import React from 'react';

const stats = [
    {
        label: 'Reportes',
        value: 15,
        img: './images/1.png',
    },
    {
        label: 'Usuarios Activos',
        value: 534,
        img: '/images/2.png',
    },
    {
        label: 'Vacantes Activas',
        value: 235,
        img: '/images/3.png',
    },
    {
        label: 'Talenty Pay',
        value: 53,
        img: '/images/4.png',
    },
    {
        label: 'Empresas',
        value: 267,
        img: '/images/5.png',
    },
    {
        label: 'Matches',
        value: 687,
        img: '/images/6.png',
    },
];

const TopStats = () => (
    <div className="flex flex-wrap gap-10 mt-4">
        {stats.map((stat, index) => (
            <div key={index} className="flex flex-col justify-center items-center text-center gap-1 bg-white rounded-xl shadow w-[30%] h-[150px]
">
                <div>
                    <img
                        src={stat.img}
                        alt={stat.label}
                        className={"w-12 h-12 rounded-full "}
                    />
                </div>
                <div>
                    <h2 className="text-gray-500">{stat.label}</h2>
                    <p className="text-2xl font-bold">{stat.value}</p>
                </div>
            </div>
        ))}
    </div>
);

export default TopStats;
