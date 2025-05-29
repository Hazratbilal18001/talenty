import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Cocacola', value: 10000 },
    { name: 'UNAM', value: 12000 },
    { name: 'VIAJES PREMIUM', value: 10455 },
];

const COLORS = ['#6D3CC7', '#00A9E0', '#2EC84D'];

function PublicidadChart() {
    return (

        <div className="flex flex-col items-center relative w-[160px] h-[160px]">
            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className='text-sm text-[#ADADAD]'>Usuarios</h2>
                <h2 className='text-xl'>32,455</h2>
            </div>
            <PieChart width={160} height={160}>
                <Pie
                    data={data}
                    cx="50%" cy="50%" innerRadius={50} outerRadius={70}
                    fill="#8884d8" paddingAngle={5} dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>
        </div>

    );
}

export default PublicidadChart;
