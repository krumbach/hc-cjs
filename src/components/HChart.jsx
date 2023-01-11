import React, { useMemo } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HChart = ({ data }) => {
    const chartData = useMemo(() => ({
        chart: {
            type: 'line'
        },
        title: {
            text: 'Highcharts Line Chart'
        },
        xAxis: {
            categories: data.x
        },
        series: [{
            data: data.y
        }]
    }), [data]);

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={chartData}
        />
    )
}

export default HChart;
