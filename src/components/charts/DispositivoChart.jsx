import { PieChart, Pie, Cell } from 'recharts';

const data = [
    { name: 'Android', value: 22000 },
    { name: 'iPhone', value: 10455 },
];

const COLORS = ['#2EC84D', '#00A9E0'];

function DispositivoChart() {
    return (
        <div className="flex flex-col items-center relative w-[160px] h-[160px]">
            {/* Center text */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h2 className='text-sm text-[#ADADAD]'>Usuarios</h2>
                <h2 className='text-xl'>32,455</h2>
            </div>

            {/* Pie Chart */}
            <PieChart width={160} height={160}>
                <Pie
                    data={data}
                    cx="50%" cy="50%"
                    innerRadius={50} outerRadius={70}
                    paddingAngle={5} dataKey="value"
                >
                    {data.map((_, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                </Pie>
            </PieChart>

            {/* Legend */}
            <div className="flex gap-4 text-xs">
                {data.map((entry, index) => (
                    <div key={index} className="flex items-center gap-1">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: COLORS[index] }}
                        ></span>
                        {entry.name}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DispositivoChart;
