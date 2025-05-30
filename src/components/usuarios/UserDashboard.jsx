import React, { useState } from 'react';
import TabFilter from './TabFilter';
import Pagination from './Pagination';

const users = [
    {
        name: 'Mario Rivera',
        email: 'mario@email.com',
        phone: '93427840293',
        date: '14/05/2025',
        connection: 'Activo',
        id: '8729134',
        plan: 'Premium',
        status: 'Activo',
    },
    {
        name: 'Nadia Romero',
        email: 'nadia@email.com',
        phone: '9123456789',
        date: '10/04/2025',
        connection: 'Inactivo',
        id: '9821734',
        plan: 'Gratis',
        status: 'Eliminado',
    },
    {
        name: 'Carlos Viera',
        email: 'carlos@email.com',
        phone: '9234567890',
        date: '01/03/2025',
        connection: 'Activo',
        id: '6729134',
        plan: 'Gratis',
        status: 'Activo',
    },
    {
        name: 'Laura Torres',
        email: 'laura@email.com',
        phone: '9345612345',
        date: '25/02/2025',
        connection: 'Inactivo',
        id: '8720144',
        plan: 'Premium',
        status: 'Eliminado',
    },
    {
        name: 'Diego Ramos',
        email: 'diego@email.com',
        phone: '9345678901',
        date: '11/01/2025',
        connection: 'Activo',
        id: '7729134',
        plan: 'Gratis',
        status: 'Activo',
    },
    {
        name: 'Elena Pérez',
        email: 'elena@email.com',
        phone: '9345009876',
        date: '20/01/2025',
        connection: 'Inactivo',
        id: '8729111',
        plan: 'Premium',
        status: 'Eliminado',
    },
    {
        name: 'Hugo Molina',
        email: 'hugo@email.com',
        phone: '9342223344',
        date: '30/12/2024',
        connection: 'Activo',
        id: '8929134',
        plan: 'Gratis',
        status: 'Activo',
    },
];


export default function UserDashboard() {
    const [activeTab, setActiveTab] = useState('Todos');
    const [currentPage, setPage] = useState(1);

    return (
        <div className=" h-[43rem] px-3 ml-4 mr-4 rounded-xl ">
            <TabFilter activeTab={activeTab} setActiveTab={setActiveTab} />
            <table className="w-full mt-4  text-sm">
                <thead className="border-b">
                    <tr className="text-left ">
                        <th></th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Celular</th>
                        <th>Registro</th>
                        <th>Conexión</th>
                        <th>ID</th>
                        <th>Plan</th>
                        <th>Estado</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index} className="h-[70px] text-center border-b hover:bg-gray-200">
                            <td><input type="checkbox" /></td>
                            <td className="flex justify-center items-center gap-2 pt-5">
                                <img src="https://i.pravatar.cc/30" className="rounded-full" alt="avatar" />
                                {user.name}
                            </td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.date}</td>
                            <td>
                                <span className={`text-xs font-medium flex items-center gap-1 ${user.connection === 'Activo' ? 'text-green-600' : 'text-red-600'}`}>
                                    <span className="w-2 h-2 rounded-full bg-current inline-block"></span>
                                    {user.connection}
                                </span>
                            </td>
                            <td>{user.id}</td>
                            <td>
                                <div className='w-[124px] bg-slate-2'>
                                    <span className={`py-2 rounded-lg text-xs bg-blue-100 text-blue-700`}>{user.plan}</span>
                                </div>
                            </td>
                            <td>
                                <span className={`px-6 py-2 rounded-lg text-xs ${user.status === 'Activo' ? 'bg-green-100 text-green-700' : user.status === 'Bloqueado' ? 'bg-red-100 text-red-700' : 'bg-gray-300 text-gray-800'}`}>{user.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Pagination currentPage={currentPage} setPage={setPage} />
        </div>
    );
}
