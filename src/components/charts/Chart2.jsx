import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', like: 0, },
    { name: 'Feb', like: 26, },
    { name: 'Mar', like: 32, },
    { name: 'Apr', like: 72, },
    { name: 'May', like: 52, },
    { name: 'Jun', like: 143, },
    { name: 'Jul', like: 90, },
    { name: 'Aug', like: 120, },
    { name: 'Sep', like: 17, },
    { name: 'Oct', like: 45, },
    { name: 'Nov', like: 48, },
    { name: 'Dec', like: 27, },
];

function Chart2() {
    return (
        <div className='font-source text-sm font-normal md:w-[450px] h-[230px]'>
            <ResponsiveContainer >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    <YAxis
                        ticks={[1, 24, 48, 72, 144]}
                        tickFormatter={(value) => `${value}h`}
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="like" stroke="#16B1FF" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart2;
