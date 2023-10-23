import React from 'react';
import LineChart from './LineChart';
import PiezoLineChart from './PiezoLineChart';

const ChartComponent = ({ dataCr }) => {
    return (
        <div>
            <div className='flex justify-between'>
                <div className='border w-[45%]'>
                    <PiezoLineChart/>
                </div>
                <div className='border w-[65%]'>
                    <LineChart dataCr={dataCr} />
                </div>
            </div>
        </div>
    );
};

export default ChartComponent;
