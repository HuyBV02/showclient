import React from 'react';
import {
    GoogleMap,
    useLoadScript,
    Marker,
    InfoWindow,
} from '@react-google-maps/api';

const REACT_APP_GOOGLE_MAPS_KEY = 'AIzaSyBy3saqMDMi1oZsImziMLDiqKhm4Q_fCjg';

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

    const handleMarkerClick = (position) => {
        setShowInfo(true);
        setInfoPosition(position);
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
                zoom={20}
                // onLoad={onMapLoad}
                mapOptions={{
                    mapTypeId: 'satellite', // Đặt kiểu bản đồ mặc định thành vệ tinh
                }}
            >
                <Marker
                    position={selectedLocation[0]}
                    icon={
                        'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                    onClick={() => handleMarkerClick(selectedLocation[0])}
                />

                <Marker
                    position={selectedLocation[1]}
                    icon={
                        'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                    onClick={() => handleMarkerClick(selectedLocation[1])}
                />
                <Marker
                    position={selectedLocation[2]}
                    icon={
                        'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                    onClick={() => handleMarkerClick(selectedLocation[2])}
                />

                <Marker
                    position={selectedLocation[3]}
                    icon={
                        'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                    onClick={() => handleMarkerClick(selectedLocation[3])}
                />
                <Marker
                    position={selectedLocation[4]}
                    icon={
                        'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }
                    onClick={() => handleMarkerClick(selectedLocation[4])}
                />
                {showInfo && infoPosition && (
                    <InfoWindow
                        position={infoPosition}
                        onCloseClick={() => setShowInfo(false)}
                    >
                        <div>
                            {/* Hiển thị dữ liệu của bạn ở đây */}
                            <h5>Your Data</h5>
                            <p>More information goes here</p>
                        </div>
                    </InfoWindow>
                )}
            </GoogleMap>
        </div>
    );
};

export default MapComponent;
