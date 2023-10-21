import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Infomation from '../page/Infomation';
import News from '../components/news/News';
import Footer from '../components/Footer';

const AppContain = ({dataCr}) => {
    return (
        <div className=''>
            <Header />
            <Navbar />
            <div className="mt-[0.5%] ml-[10%] mr-[10%] ">
                <Routes>
                    <Route path="/" element={<Infomation dataCr={dataCr} />} />
                    
                </Routes>
            </div>
            <div>
                <News/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default AppContain;
