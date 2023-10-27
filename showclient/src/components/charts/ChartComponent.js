import React from 'react';
import LineChart from './LineChart';
import PiezoLineChart from './PiezoLineChart';
import PiezoChartColumn from './PiezoChartColumn';
import CRLineChart from './CRLineChart';

const ChartComponent = ({ dataCr }) => {
    return (
        <div>
            <div className="flex justify-between">
                <div className="border w-[30%]">
                    {/* <PiezoLineChart/> */}
                    <PiezoChartColumn />
                </div>
                <div className="border w-[65%]">
                    {/* <LineChart dataCr={dataCr} /> */}

                    <CRLineChart />
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
