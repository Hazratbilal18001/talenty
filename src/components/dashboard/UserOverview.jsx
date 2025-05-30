import React from 'react';
import Chart1 from '../charts/Chart';
import Chart2 from '../charts/Chart2';
import Chart3 from '../charts/Chart3';
import DispositivoChart from '../charts/DispositivoChart';
import EstadoChart from '../charts/EstadoChart';
import NuevosUsuariosChart from '../charts/NuevosUsuariosChart';
import PublicidadChart from '../charts/PublicidadChart';
import { BsThreeDotsVertical } from "react-icons/bs";



// const chartData1 = [
//     { name: 'Jan', like: 100 },
//     { name: 'Feb', like: 150 },
//     { name: 'Mar', like: 200 },
//     { name: 'Apr', like: 250 },
//     { name: 'May', like: 300 },
//     { name: 'Jun', like: 350 },
// ];

// const chartData2 = [
//     { name: 'Jan', like: 10 },
//     { name: 'Feb', like: 50 },
//     { name: 'Mar', like: 70 },
//     { name: 'Apr', like: 80 },
//     { name: 'May', like: 90 },
//     { name: 'Jun', like: 100 },
// ];

// const chartData3 = [
//     { name: 'Jan', like: 300 },
//     { name: 'Feb', like: 250 },
//     { name: 'Mar', like: 200 },
//     { name: 'Apr', like: 150 },
//     { name: 'May', like: 100 },
//     { name: 'Jun', like: 50 },
// ];

const UserOverview = () => (
    <>
        <div>
            <div className="flex flex-wrap justify-start gap-4 pt-6 rounded-lg font-source text-sm">
                {/* Main Chart */}
                <div className="md:w-[630px] h-[488px] bg-white rounded-xl p-4 shadow">
                    <div className='flex justify-between'>
                        <h2 className="font-semibold text-sm mb-2">Datos: Like vs. Dislike</h2>
                        <h2 className='text-[#ADADAD] text-sm font-light'>Dato Mensual</h2>
                    </div>
                    {/* <LineChartComponent chartData={chartData1} lineColor="#16B1FF" /> */}
                    <Chart1 />
                    <div className='flex gap-2 font-thin ml-[12%] '>
                        <div className='flex justify-start items-center gap-1'>
                            <div className=' bg-[#28A745] rounded-full w-3 h-3'></div>
                            <h2>Like</h2>
                        </div>
                        <div className='flex justify-start items-center gap-1'>
                            <div className=' bg-[#16B1FF] rounded-full w-3 h-3'></div>
                            <h2>Dislike</h2>
                        </div>
                    </div>
                </div>

                <div className='space-y-8'>
                    {/*1st  Donut Chart */}
                    <div className="w-[200px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-sm font-semibold ">Publicidad consumida</h2>
                            <BsThreeDotsVertical />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                            <PublicidadChart />
                        </div>
                        <div className="grid grid-cols-2 text-xs">
                            <div className='flex justify-center items-center gap-1 '>
                                <span className="w-2 h-2 rounded-full bg-[#6D3CC7]"></span>
                                <h2>Cocacola</h2>
                            </div>
                            <div className='flex justify-center items-center gap-1 '>
                                <span className="w-2 h-2 rounded-full bg-[#00A9E0]"></span>
                                <h2>UNAM</h2>
                            </div>
                            <div className='flex justify-center items-center gap-1 '>
                                <span className="w-2 h-2 rounded-full bg-[#2EC84D]"></span>
                                <h2> PREMIUM</h2>
                            </div>
                        </div>
                    </div>

                    {/* 2nd  Bar Chart */}
                    <div className="md:w-[200px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-sm font-semibold ">Usuarios nuevos</h2>
                            <BsThreeDotsVertical />
                        </div>
                        <div>
                            <h2 className='font-bold text-xl'>+34% </h2>
                            <h2 className='text-[#ADADAD]'>Nuevos usuarios</h2>
                        </div>
                        <EstadoChart />

                    </div>
                </div>

                <div className='space-y-8'>
                    {/*3rd  New Users Chart */}
                    <div className="w-[200px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-sm font-semibold ">Usuarios por estado</h2>
                            <BsThreeDotsVertical />
                        </div>
                        <div className="flex justify-start ">
                            <NuevosUsuariosChart />
                        </div>
                    </div>


                    {/* 4th Device Donut Chart */}
                    <div className="md:w-[210px] h-[228px] bg-white rounded-xl p-4 shadow flex flex-col justify-between">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-sm font-semibold ">Usuarios dispositivo </h2>
                            <BsThreeDotsVertical />
                        </div>
                        <DispositivoChart />
                    </div>
                </div>

            </div>

            <div className='flex flex-wrap pt-5 gap-8'>
                {/* 1st */}
                <div className="w-full md:w-[48%] bg-white rounded-xl p-4 shadow">
                    <div className='flex justify-between'>
                        <h2 className="font-semibold text-sm mb-2">Promedio de tiempo de uso de la app</h2>
                        <h2 className='text-[#ADADAD] text-sm font-light'>Dato Mensual</h2>
                    </div>
                    {/* <LineChartComponent chartData={chartData2} lineColor="#FF8042" /> */}
                    <Chart2 />
                </div>

                {/* 2nd */}
                <div className="w-full md:w-[48%] bg-white rounded-xl p-4 shadow">
                    <div className='flex justify-between'>
                        <h2 className="font-semibold text-sm mb-2">Videollamadas realizadas por los usuarios </h2>
                        <h2 className='text-[#ADADAD] text-sm font-light'>Dato Mensual</h2>
                    </div>
                    {/* <LineChartComponent chartData={chartData3} lineColor="#00C49F" /> */}
                    <Chart3 />
                </div>
            </div>
        </div>
    </>
);

export default UserOverview;
