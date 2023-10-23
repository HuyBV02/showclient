import React, { useState } from 'react';
import MapComponent from './MapComponent';

function Map({ dataLast }) {
    
    const [selectedLocation, setSelectedLocation] = useState([
        {
            lat: 13.78095,
            lng: 109.215613888889,
            title: 'IPI',
            description: dataLast.TiltB_B,
            time: dataLast.TIMESTAMP,
        },
        {
            lat: 13.78079,
            lng: 109.215591666667,
            description: dataLast.PZ1_Temp,
            title: 'PIEZO',
            time: dataLast.TIMESTAMP,
        },
        {
            lat: 13.7808,
            lng: 109.215669444444,
            title: 'CRACKMETER1',
            description: dataLast.CR1_Temp,
            time: dataLast.TIMESTAMP,
        },
        {
            lat: 13.78089,
            lng: 109.215544444444,
            title: 'CRACKMETER2',
            description: dataLast.CR2_Temp,
            time: dataLast.TIMESTAMP,
        },
        {
            lat: 13.78084,
            lng: 109.21555,
            title: 'CRACKMETER3',
            description: dataLast.CR3_Temp,
            time: dataLast.TIMESTAMP,
        },
    ]);
    return (
        <div>
            <div className="h-[620px] w-[100%] shadow-lg shadow-stone-800 p-2">
                <MapComponent selectedLocation={selectedLocation} />
            </div>
        </div>
    );
}

export default Map;
