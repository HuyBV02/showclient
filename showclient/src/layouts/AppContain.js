import React from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import { Route, Routes } from 'react-router-dom';
// import Infomation from '../page/Home';
import News from '../components/news/News';
import Footer from '../components/Footer';
import Home from '../page/Home';
import Infomation from '../page/Infomation';
import Documents from '../page/Documents';
import Contact from '../page/Contact';

const AppContain = ({ dataCr, dataLast }) => {
    return (
        <div className="relative h-[100%]">
            <Header />
            <Navbar />
            <div className="mt-[0.5%] ml-[10%] mr-[10%] ">
                <Routes>
                    <Route
                        path="/"
                        element={<Home dataCr={dataCr} dataLast={dataLast} />}
                    />
                    <Route path="/infomation" element={<Infomation />} />
                    <Route path="/documents" element={<Documents />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
           
            <div className=''>
                <Footer />
            </div>
        </div>
    );
};

export default AppContain;
