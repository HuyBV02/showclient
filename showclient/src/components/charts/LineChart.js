import ReactApexChart from 'react-apexcharts';

function LineChart({ dataCr }) {

    console.log(dataCr);

    const dataCr1 = [];
    const dataCr2 = [];
    const dataCr3 = [];
    const dataTempCr1 = [];
    const dataTempCr2 = [];
    const dataTempCr3 = [];
    const timeday = [];

    if (dataCr !== undefined)
        for (let i = 0; i < dataCr.length; i++) {
            dataCr1.push(dataCr[i].CR1_Digit);
            dataCr2.push(dataCr[i].CR1_Digit);
            dataCr3.push(dataCr[i].CR1_Digit);
            dataTempCr1.push(dataCr[i].CR1_Temp);
            dataTempCr2.push(dataCr[i].CR1_Temp);
            dataTempCr3.push(dataCr[i].CR1_Temp);
            timeday.push(dataCr[i].TIMESTAMP);
        }
    const options = {
        chart: {
            height: 450,
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
            text: 'Biểu đồ nhiệt độ CR',
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
            categories: timeday,
        },
        tooltip: {
            y: [
                {
                    title: {
                        formatter: function (val) {
                            return val + ' (mins)';
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val + ' per session';
                        },
                    },
                },
                {
                    title: {
                        formatter: function (val) {
                            return val;
                        },
                    },
                },
            ],
        },
        grid: {
            borderColor: '#f1f1f1',
        },
        yaxis: {
            labels: {
                formatter: function (value) {
                    return Math.round(value); // Làm tròn giá trị để hiển thị số nguyên
                },
            },
        },
    };

    const series = [
        {
            name: 'CR1',
            data: dataTempCr1,
        },
        {
            name: 'CR2',
            data: dataTempCr2,
        },
        {
            name: 'CR3',
            data: dataTempCr3,
        },
    ];

    return (
        <div id="chart">
            <ReactApexChart
                options={options}
                series={series}
                type="line"
                height={450}
            />
        </div>
    );
}

export default LineChart;
