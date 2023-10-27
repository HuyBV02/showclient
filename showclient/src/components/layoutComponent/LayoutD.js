import React from 'react';
import Layout from '../../assets/img/layoutDoc.jpg';

const LayoutD = () => {
    return (
        <div>
            <img src={Layout} alt="" />
        </div>
    );
};

export default LayoutD;

// import React, { useState } from 'react';
// import { Tooltip } from 'react-tooltip';
// import Layout from '../../assets/img/layoutDoc.jpg';
// import './LayoutD.css';

// const LayoutD = () => {
//     const [markers, setMarkers] = useState([
//         { id: 1, left: 100, top: 150, content: 'Marker 1 content' },
//         { id: 2, left: 200, top: 250, content: 'Marker 2 content' },
//         // Thêm thông tin cho các marker khác
//     ]);
//     const [selectedMarker, setSelectedMarker] = useState(null);

//     const handleMarkerClick = (marker) => {
//         setSelectedMarker(marker);
//     };

//     return (
//         <div className="image-container">
//             <img
//                 src={Layout}
//                 alt=""
//                 data-tip="Tooltip content for the image"
//                 data-for="image-tooltip"
//             />
//             {markers.map((marker) => (
//                 <div
//                     key={marker.id}
//                     className="mark"
//                     style={{ left: marker.left, top: marker.top }}
//                     data-tip={marker.content}
//                     data-for={`marker-tooltip-${marker.id}`}
//                     onClick={() => handleMarkerClick(marker)}
//                 />
//             ))}
//             <Tooltip id="image-tooltip" place="bottom" effect="solid" />
//             {markers.map((marker) => (
//                 <Tooltip
//                     key={marker.id}
//                     id={`marker-tooltip-${marker.id}`}
//                     place="bottom"
//                     effect="solid"
//                 />
//             ))}
//             {selectedMarker && (
//                 <div className="marker-info">
//                     <h2>Marker Information</h2>
//                     <p>{selectedMarker.content}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default LayoutD;
