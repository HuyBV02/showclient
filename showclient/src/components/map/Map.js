import React, { useState } from 'react';
import MapComponent from './MapComponent';
import { Card, CardBody, CardFooter, Button } from '@material-tailwind/react';

function Map() {
    const [selectedLocation, setSelectedLocation] = useState([
        {
            lat: 13.78095,
            lng: 109.215613888889,
        },
        {
            lat: 13.78079,
            lng: 109.215591666667,
        },
        {
            lat: 13.7808,
            lng: 109.215669444444,
        },
        {
            lat: 13.78089,
            lng: 109.215544444444,
        },
        {
            lat: 13.78084,
            lng: 109.21555,
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
