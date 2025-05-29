import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'QUE.', antiguos: 10000, nuevos: 18000 },
    { name: 'GUA.', antiguos: 9000, nuevos: 15000 },
    { name: 'CDMX', antiguos: 12000, nuevos: 28000 },
    { name: 'CHI.', antiguos: 8000, nuevos: 9000 },
];

function NuevosUsuariosChart() {
    return (
        <BarChart width={150} height={150} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="antiguos" fill="#00A9E0" />
            <Bar dataKey="nuevos" fill="#2EC84D" />
        </BarChart>
    );
}

export default NuevosUsuariosChart;
