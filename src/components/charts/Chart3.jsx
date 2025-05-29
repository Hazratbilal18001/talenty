import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', like: 0, },
    { name: 'Feb', like: 200, },
    { name: 'Mar', like: 185, },
    { name: 'Apr', like: 410, },
    { name: 'May', like: 210, },
    { name: 'Jun', like: 790, },
    { name: 'Jul', like: 30, },
    { name: 'Aug', like: 400, },
    { name: 'Sep', like: 80, },
    { name: 'Oct', like: 620, },
    { name: 'Nov', like: 200, },
    { name: 'Dec', like: 270, },
];

function Chart3() {
    return (
        <div className='font-source text-sm font-normal md:w-[450px] h-[230px]'>
            <ResponsiveContainer >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis
                        ticks={[0, 200, 400, 600, 800]}
                        tickFormatter={(value) => `${value}h`}
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="like" stroke="#28A745" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart3;
