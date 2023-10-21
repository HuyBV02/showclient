import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Map from '../components/map/Map';
import LineChart from '../components/charts/LineChart';
import Strom from '../components/storm/Storm';
import SatLo from '../components/SatLo';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Infomation({ dataCr }) {
    // console.log(dataCr);
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', height: '100vh' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >
                    <Tab label="Map" {...a11yProps(0)} />
                    <Tab label="Biểu đồ" {...a11yProps(1)} />
                    <Tab label="Mặt cắt" {...a11yProps(2)} />
                    <Tab label="Giám sát bão - ATNĐ" {...a11yProps(3)} />
                    <Tab label="Cảnh báo sạt lở" {...a11yProps(4)} />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Map />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <LineChart dataCr={dataCr} />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                jhjk
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                <Strom />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                <SatLo />
            </CustomTabPanel>
        </Box>
    );
}
