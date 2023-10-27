import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function PiezoChartColumn() {
    const seriesData = [
        {
            name: 'Pieza 1',
            data: [
                3.934073, 3.933995, 3.93417, 3.934345, 3.934559, 3.934676,
                3.934725, 3.935133, 3.935609, 3.935638,
            ],
        },
        {
            name: 'Piezo 2',
            data: [
                2.420787, 2.420768, 2.42073, 2.420958, 2.420892, 2.421215,
                2.421224, 2.421509, 2.421965, 2.421851,
            ],
        },
    ];

    const options = {
        chart: {
            type: 'bar',
            height: 500,
        },
        plotOptions: {
            bar: {
                horizontal: false,
                columnWidth: '55%',
                endingShape: 'rounded',
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            show: true,
            width: 2,
            colors: ['transparent'],
        },
        xaxis: {
            categories: [
                '10/23/2023 19:30',
                '10/24/2023 19:30',
                '10/25/2023 19:30',
                '10/26/2023 19:30',
                '10/27/2023 19:30',
                '10/28/2023 19:30',
                '10/29/2023 19:30',
                '10/30/2023 19:30',
                '10/31/2023 19:30',
                '11/1/2023 19:30',
            ],
        },
        title: {
            text: 'Piezo',
            align: 'left',
        },
        yaxis: {
            title: {
                text: 'mH2O',
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(0);
                },
            },
            forceNiceScale: true,
        },
        fill: {
            opacity: 1,
        },
        tooltip: {
            y: {
                formatter: function (val) {
                    return val + ' mH2O';
                },
            },
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={seriesData}
                type="bar"
                height={500}
            />
        </div>
    );
}
