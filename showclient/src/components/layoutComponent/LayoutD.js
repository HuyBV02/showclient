import React from 'react';
import { Tooltip } from 'react-tooltip';
import Layout from '../../assets/img/layoutDoc.jpg';

const LayoutD = () => {
    return (
        <div>
            <img src={Layout} alt="" />
            <Tooltip id="image-tooltip" place="bottom" effect="solid" />
        </div>
    );
};

export default LayoutD;
