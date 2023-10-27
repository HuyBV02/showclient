import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import piezo from '../../assets/img/piezoImg.jpg';
import crm from '../../assets/img/crmImg.png';
import ipi from '../../assets/img/ipiImg.png';

mapboxgl.accessToken =
    'pk.eyJ1IjoiaHV5YnYxMjAyMDIiLCJhIjoiY2xvOGF5bzYzMGlocjJpdGcxdjI0NW56aSJ9.LnVt_I6OQLJnbdDP8JF-7A';

export default function MapBoxComponent() {
    const locations = [
        {
            lng: 109.215591666667,
            lat: 13.78079,
            icons: 'piezo',
            popupContent: `
                 <h2>Piezo Location</h2>
                <p>Latitude: 13.78079</p>
                <p>Longitude: 109.215591666667</p>
            `,
        },
        {
            lng: 109.215669444444,
            lat: 13.7808,
            icons: 'crm',
            popupContent: `
                 <h2>Crackmeter 3 Location</h2>
                <p>Latitude: 13.78079</p>
                <p>Longitude: 109.215591666667</p>
            `,
        },
        {
            lng: 109.215544444444,
            lat: 13.78089,
            icons: 'crm',
            popupContent: `
                 <h2>Crackmeter 2 Location</h2>
                <p>Latitude: 13.78079</p>
                <p>Longitude: 109.215591666667</p>
            `,
        },
        {
            lng: 109.21555,
            lat: 13.78084,
            icons: 'crm',
            popupContent: `
                 <h2>Crackmeter 1 Location</h2>
                <p>Latitude: 13.78079</p>
                <p>Longitude: 109.215591666667</p>
            `,
        },
        {
            lng: 109.215613888889,
            lat: 13.78095,
            icons: 'ipi',
            popupContent: `
                 <h2>IPI Location</h2>
                <p>Latitude: 13.78079</p>
                <p>Longitude: 109.215591666667</p>
            `,
        },
    ];
    const mapContainer = useRef(null);
    const map = useRef(null);

    useEffect(() => {
        if (map.current) return; // initialize map only once

        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/satellite-v9',
            center: [109.215591666667, 13.78079],
            zoom: 18,
        });

        locations.forEach((location) => {
            let iconUrl;

            if (location.icons === 'piezo') {
                iconUrl = piezo;
            } else if (location.icons === 'crm') {
                iconUrl = crm;
            } else if (location.icons === 'ipi') {
                iconUrl = ipi;
            }
            // Create and add markers for other locations
            new mapboxgl.Marker({ element: createCustomMarkerElement(iconUrl) })
                .setLngLat([location.lng, location.lat])
                .setPopup(new mapboxgl.Popup().setHTML(location.popupContent))
                .addTo(map.current);
        });

        // map.current.on('move', () => {
        //     setLng(map.current.getCenter().lng.toFixed(4));
        //     setLat(map.current.getCenter().lat.toFixed(4));
        //     setZoom(map.current.getZoom().toFixed(2));
        // });

        function createCustomMarkerElement(iconUrl) {
            const element = document.createElement('div');
            element.className = 'custom-marker';
            element.style.backgroundImage = `url(${iconUrl})`;
            return element;
        }
    }, []);

    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    );
}
