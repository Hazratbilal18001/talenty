import { NavLink } from "react-router-dom";
import { Home, Bell, Briefcase, Building, Users, Megaphone, CreditCard, AlertTriangle, Settings, HelpCircle } from "lucide-react";

const navItems = [
    { name: "Inicio", icon: <Home />, path: "/" },
    { name: "Notificaciones", icon: <Bell />, path: "/notificaciones" },
    { name: "Vacantes", icon: <Briefcase />, path: "/vacantes" },
    { name: "Empresas", icon: <Building />, path: "/empresas" },
    { name: "Usuarios", icon: <Users />, path: "/usuarios" },
    { name: "Publicidad", icon: <Megaphone />, path: "/publicidad" },
    { name: "Talenty Pay", icon: <CreditCard />, path: "/talenty-pay" },
    { name: "Reportes", icon: <AlertTriangle />, path: "/reportes" },
    { name: "Administradores", icon: <Settings />, path: "/administradores" },
    { name: "Ayuda y Soporte", icon: <HelpCircle />, path: "/ayuda" },
];

function Sidebar() {
    return (
        <div className="w-64 min-h-screen bg-white border-r flex flex-col justify-between p-4">
            <div>
                <div className="flex gap-2 font-museo py-5 text-[#B61A1F] font-extrabold ">
                    <img className="w-12 h-12" src="./images/logo.png" alt="" />
                    <h1 className='text-3xl'>Talenty</h1>
                </div>
                <nav className="space-y-6 font-source">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-2 rounded-lg ${isActive ? "bg-red-100 text-[#D71E30]" : "text-[Talenty Pay]"
                                } hover:bg-red-50`
                            }
                        >
                            <span className="text-base">{item.icon}</span>
                            <span className="font-semibold text-base">{item.name}</span>
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Last section */}
            <div className="border-t pt-4">
                <div className="flex items-center gap-2 py-1">
                    <img
                        src="/images/me.png"
                        alt="User"
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <h1 className='text-2xl font-museo text-[#B61A1F] font-extrabold '>Talenty</h1>
                </div>
                <div>
                    <p className="text-sm font-semibold text-[#1A1C29] ">
                        Omar Alberto Martinez Castro
                    </p>
                    <p className="text-xs text-[#ADADAD] ">apps1@viajespremium.com.mx</p>
                </div>

            </div>
        </div>
    );
}

export default Sidebar