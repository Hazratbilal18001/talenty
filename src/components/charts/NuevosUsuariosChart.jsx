import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
    { name: 'QUE.', antiguos: 10000, },
    { name: 'GUA.', antiguos: 9000, },
    { name: 'CDMX', antiguos: 12000, },
    { name: 'CHI.', antiguos: 8000, },
];

function NuevosUsuariosChart() {
    return (
        <BarChart width={300} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="antiguos" fill="#00A9E0" />
        </BarChart>
    );
}

export default NuevosUsuariosChart;
