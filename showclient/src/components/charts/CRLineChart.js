import React from 'react';
import ReactApexChart from 'react-apexcharts';

export default function CRLineChart() {
    const seriesData = [
        {
            name: 'CR1',
            data: [
                4.436233, 7.436233, 3.436233, 7.936233, 4.936233, 7.936233,
                7.936233, 3.436233, 4.936233, 7.936233, 5.936233, 3.936233,
                5.936233, 3.436233, 4.436233, 3.936233, 7.436233,
            ],
        },
        {
            name: 'CR2',
            data: [
                3.728369, 2.728369, 4.728369, 2.728369, 5.728369, 4.728369,
                2.228369, 2.728369, 4.728369, 5.228369, 4.228369, 6.728369,
                3.228369, 5.728369, 7.228369, 3.728369, 2.728369,
            ],
        },
        {
            name: 'CR3',
            data: [
                4.452397, 6.952397, 6.452397, 3.452397, 5.452397, 3.452397,
                5.452397, 8.452397, 7.452397, 4.952397, 4.452397, 1.952397,
                4.452397, 2.452397, 1.952397, 7.452397, 2.452397,
            ],
        },
    ];

    const options = {
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false,
            },
        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            width: [5, 7, 5],
            curve: 'straight',
            dashArray: [0, 8, 5],
        },
        title: {
            text: 'Crackmeter',
            align: 'left',
        },
        legend: {
            tooltipHoverFormatter: function (val, opts) {
                return (
                    val +
                    ' - ' +
                    opts.w.globals.series[opts.seriesIndex][
                        opts.dataPointIndex
                    ] +
                    ''
                );
            },
        },
        markers: {
            size: 0,
            hover: {
                sizeOffset: 6,
            },
        },
        xaxis: {
            categories: [
                '10/10/2023 19:30',
                '10/11/2023 19:30',
                '10/12/2023 19:30',
                '10/13/2023 19:30',
                '10/14/2023 19:30',
                '10/15/2023 19:30',
                '10/16/2023 19:30',
                '10/17/2023 19:30',
                '10/18/2023 19:30',
                '10/19/2023 19:30',
                '10/20/2023 19:30',
                '10/21/2023 19:30',
                '10/22/2023 19:30',
                '10/23/2023 19:30',
                '10/24/2023 19:30',
                '10/25/2023 19:30',
                '10/26/2023 19:30',
            ],
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + ' mm';
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + ' mm';
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + ' mm';
                        },
                    },
                },
            ],
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        yaxis: {
            title: {
                text: 'mm',
            },
            labels: {
                formatter: function (value) {
                    return value.toFixed(0);
                },
            },
            forceNiceScale: true,
        },
    };

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={seriesData}
                type="line"
                height={500}
            />
        </div>
    );
}
