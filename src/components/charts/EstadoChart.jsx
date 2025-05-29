import { AreaChart, Area, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { day: 'Mon', value: 10 },
    { day: 'Tue', value: 18 },
    { day: 'Wed', value: 24 },
    { day: 'Thu', value: 20 },
    { day: 'Fri', value: 28 },
    { day: 'Sat', value: 30 },
    { day: 'Sun', value: 34 },
];

function EstadoChart() {
    return (
        <ResponsiveContainer width="100%" height={100}>
            <AreaChart data={data}>
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#2EC84D" fill="#E6F7EC" strokeWidth={2} />
            </AreaChart>
        </ResponsiveContainer>
    );
}

export default EstadoChart;
