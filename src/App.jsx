import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/dashboard/Sidebar"
import Dashboard from "./pages/dashboard/Dashboard"
import Usuarios from "./pages/usuarios/Usuarios";


export default function App() {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            {/* <Route path="/notificaciones" element={<Dummy />} /> */}
            {/* <Route path="/vacantes" element={<Dummy />} /> */}
            {/* <Route path="/empresas" element={<Dummy />} /> */}
            <Route path="/usuarios" element={<Usuarios />} />
            {/* <Route path="/publicidad" element={<Dummy />} /> */}
            {/* <Route path="/talenty-pay" element={<Dummy />} /> */}
            {/* <Route path="/reportes" element={<Dummy />} /> */}
            {/* <Route path="/administradores" element={<Dummy />} /> */}
            {/* <Route path="/ayuda" element={<Dummy />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}
