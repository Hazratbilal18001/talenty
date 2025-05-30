// // src/components/charts/Chart.jsx
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    { name: 'Jan', like: 0, dislike: 0 },
    { name: 'Feb', like: 15000, dislike: 12000 },
    { name: 'Mar', like: 18000, dislike: 13000 },
    { name: 'Apr', like: 31000, dislike: 24000 },
    { name: 'May', like: 27000, dislike: 19000 },
    { name: 'Jun', like: 39000, dislike: 29000 },
    { name: 'Jul', like: 36000, dislike: 27000 },
    { name: 'Aug', like: 22000, dislike: 5000 },
    { name: 'Sep', like: 33000, dislike: 15000 },
    { name: 'Oct', like: 11000, dislike: 2000 },
    { name: 'Nov', like: 30000, dislike: 21000 },
    { name: 'Dec', like: 17000, dislike: 2000 },
];

function Chart1() {
    return (
        <div className='font-source text-sm font-normal md:w-[600px] h-[410px]'>
            <ResponsiveContainer >
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="" />
                    <XAxis dataKey="name" />
                    {/* <YAxis
                        // ticks={[0, 10, 20, 30, 40]}
                        tickFormatter={(value) => `${value}k`}
                    /> */}
                    <YAxis
                        ticks={[0, 10000, 20000, 30000, 40000]}
                        tickFormatter={(value) => `${value / 1000}k`}
                    />
                    <Tooltip />
                    <Line type="linear" dataKey="like" stroke="#28A745" strokeWidth={3} dot={false} />
                    <Line type="linear" dataKey="dislike" stroke="#16B1FF" strokeWidth={3} dot={false} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Chart1;




// src/components/charts/Chart.jsx
// import LineChartComponent from '../charts/Chart';

// const chartDataArray = Array.from({ length: 60 }, (_, i) => ({
//     chartData: [
//         { name: 'Jan', like: i * 10 + 10 },
//         { name: 'Feb', like: i * 10 + 20 },
//         { name: 'Mar', like: i * 10 + 30 },
//     ],
//     lineColor: `hsl(${(i * 20) % 360}, 70%, 50%)`,
// }));

// const ChartGrid = () => {
//     return (
//         <div className="grid grid-rows-5 grid-cols-12 gap-4 p-4">
//             {chartDataArray.map((data, i) => (
//                 <div key={i} className="bg-white rounded-lg shadow p-2 h-[180px]">
//                     <LineChartComponent chartData={data.chartData} lineColor={data.lineColor} />
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default ChartGrid;
