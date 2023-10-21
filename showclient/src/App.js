import './App.css';
import AppContain from './layouts/AppContain';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [dataCr, setDataCr] = useState();

    const config = {
        headers: {
            'Access-Control-Allow-Origin':
                'http://localhost:8888/api/datatest/cr',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    };

    const instance = axios.create({
        baseURL: 'http://localhost:8888/api/',
        timeout: 10000,
    });

    useEffect(() => {
        instance
            .get('/datatest/cr', config)
            .then((data) => setDataCr(data.data.data));
    }, []);
    // console.log(dataCr)
    return (
        <div className="App">
            <AppContain dataCr={dataCr} />
        </div>
    );
}

export default App;
