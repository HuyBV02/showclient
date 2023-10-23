import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

const REACT_APP_GOOGLE_MAPS_KEY = 'AIzaSyDwY2qTxbLfDT7DuP7p0FZ0_54JWvmtBjw';

const MapComponent = ({ selectedLocation }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const [showInfo, setShowInfo] = React.useState(false);
    const [infoPosition, setInfoPosition] = React.useState(null);

    // const handleMarkerClick = (position) => {
    //     setShowInfo(true);
    //     setInfoPosition(position);
    // };
    const handleMarkerClick = (index) => {
        setShowInfo(true);
        setInfoPosition(selectedLocation[index]);
    };

    if (loadError) return 'Error';
    if (!isLoaded) return 'Maps';

    return (
        <div style={{ marginTop: '10px', marginBottom: '10px' }}>
            <GoogleMap
                mapContainerStyle={{
                    height: '600px',
                }}
                center={selectedLocation[0]}
                zoom={17}
                onLoad={onMapLoad}
                options={{
                    mapTypeId: 'satellite', //
                    
                }}
            >
                {selectedLocation.map((location, index) => (
                    <Marker
                        key={index}
                        position={location}
                        icon={
                            'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                        }
                        onClick={() => handleMarkerClick(index)} // Pass the index to the function
                    />
                ))}

                {showInfo && infoPosition && (
                    <InfoWindow
                        position={infoPosition}
                        onCloseClick={() => setShowInfo(false)}
                    >
                        <div>
                            <strong className='text-red-500'>Cảm biến: {infoPosition.title}</strong>
                            <p className='mt-2'>Dữ liệu: {infoPosition.description}</p>
                            <p className='mt-2'>Thời gian: {infoPosition.time}</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
