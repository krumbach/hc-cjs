import React, { useMemo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);


const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top',
        },
        title: {
            display: true,
            text: 'Chart.js Line Chart',
        },
    },
};

const ChartJs = ({ data }) => {
    const chartjsData = useMemo(() => (
        {
            labels: data.x,
            datasets: [{
                label: 'Trend',
                data: data.y,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        }), [data]);

    return (
        <div style={{ height: 750, width: 750 }}>
            <Line options={options} data={chartjsData} />;
        </div>
    )
}

export default ChartJs;  