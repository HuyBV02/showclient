import React, { useState } from 'react';
function Strom() {
    return (
        <div>
            <div className="h-[620px] w-[100%] shadow-lg shadow-stone-800 p-2">
                <iframe
                    width="100%"
                    height="620"
                    src="https://embed.windy.com/embed2.html?lat=16.678&lon=106.040&detailLat=18.573&detailLon=106.035&width=650&height=450&zoom=5&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=&metricWind=m%2Fs&metricTemp=default&radarRange=-1"
                    frameborder="0"
                ></iframe>
            </div>
        </div>
    );
}

export default Strom;
