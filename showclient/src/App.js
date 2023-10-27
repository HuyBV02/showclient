import './App.css';
import AppContain from './layouts/AppContain';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [dataCr, setDataCr] = useState();
    const [dataLast, setDataLast] = useState();

    // const config = {
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    //         'Access-Control-Allow-Headers': '*',
    //     },
    // };

    const instance = axios.create({
        baseURL: 'http://localhost:8888/api/',
        timeout: 1000,
    });

    useEffect(() => {
        instance
            .get('datatest/cr')
            .then((data) => setDataCr(data.data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        instance
            .get('datatest/last')
            .then((data) => setDataLast(data.data.data))
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className="App">
            <AppContain dataCr={dataCr} dataLast={dataLast} />
        </div>
    );
}

export default App;
