import React from 'react';
import image1 from '../assets/img/geoscience.png';
import image2 from '../assets/img/cs.png';
import image3 from '../assets/img/geosense.png';
import image4 from '../assets/img/igsvast.png';

const Parter = () => {
    return (
        <div className="flex items-center justify-center mb-20">
            <div className="">
                <div className="text-orange-500 text-[24px] text-start mb-10 underline underline-offset-8 flex justify-center">
                    ĐỐI TÁC CỦA CHÚNG TÔI
                </div>
                <div className="flex justify-around">
                    <a className="mr-10" href="https://www.geosense.co.uk/">
                        <img src={image1} className="object-contain h-[50px]" alt=''/>
                    </a>
                    <a className="mr-10" href="https://www.campbellsci.com/">
                        <img src={image2} className="object-contain h-[50px]" alt=''/>
                    </a>
                    <a className="mr-10" href="https://geo-science.com.vn/">
                        <img src={image3} className="object-contain h-[50px]" alt=''/>
                    </a>
                    <a className="mr-10" href="http://igsvn.vn/">
                        <img src={image4} className="object-contain h-[55px]" alt=''/>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Parter;
