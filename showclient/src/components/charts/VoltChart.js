import React from 'react';
import GaugeChart from 'react-gauge-chart';

const VoltChart = () => {
    const chartData = {
        value: 18 / 50,
    };

    return (
        <div className="gauge-meter">
            <div className="gauge-value">
                {/* {Math.round(chartData.value * 100)}% */}
                18
            </div>
            <GaugeChart
                id="gauge-chart1"
                nrOfLevels={5}
                arcsLength={[
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                    0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2,
                ]}
                colors={['#5AFA10', '#4AC029', '#FFD700', '#FFC371', '#FF5F6D']}
                percent={chartData.value}
                arcPadding={0.01}
            />
        </div>
    );
};

export default VoltChart;
