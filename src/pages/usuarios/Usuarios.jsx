// import React from 'react'
// import Navbar from '../../components/navbar/Navbar'

// const Usuarios = () => {
//     return (
//         <div>
//             <Navbar />
//         </div>
//     )
// }

// export default Usuarios



import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import Pagination from '../../components/usuarios/Pagination';
import UserDashboard from '../../components/usuarios/UserDashboard';

function Usuarios() {
    return (
        <div className="h-full bg-gray-100">
            <Navbar />
            <UserDashboard />
            {/* <Pagination /> */}
        </div>
    );
}

export default Usuarios;
