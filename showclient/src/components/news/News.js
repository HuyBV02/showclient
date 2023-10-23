import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from '@material-tailwind/react';

const News = () => {
    return (
        <div className="h-[50vh] text-black bg-slate-50 mb-[50px]">
            <div className="flex justify-around ml-[4%] mr-[4%] h-[100%]">
                <div className="mt-[3%] mb-[3%] w-[45%] flex-row justify-around h-[100%]">
                    <div className="text-orange-500 text-[24px] text-start mb-5 underline underline-offset-8 cursor-pointer">
                        TIN TỨC
                    </div>

                    <a
                        href="https://vnexpress.net/sat-lo-duong-ho-chi-minh-4666095.html"
                        className="flex justify-start"
                    >
                        <img
                            src={
                                'https://i1-vnexpress.vnecdn.net/2023/10/18/01-7904-1697597109.jpg?w=1020&h=0&q=100&dpr=1&fit=crop&s=HZiYooV8bcPm-UWeSUWMIQ'
                            }
                            className="object-cover w-[100px] mr-[5%]"
                        />
                        <div className="text-start">
                            <div className="text-[20px]">
                                Sạt lở đường Hồ Chí Minh
                            </div>
                            <p className="text-[12px]">
                                THỪA THIÊN - HUẾ: Hàng nghìn khối đất đá, cây
                                cối tràn xuống đường Hồ Chí Minh nhánh Tây qua
                                huyện A Lưới khiến giao thông ách tắc, sáng
                                18/10.{' '}
                            </p>
                        </div>
                    </a>

                    <hr className="mt-3 mb-3" />

                    <a
                        href="https://vnexpress.net/sat-lo-deo-hai-van-4664518.html"
                        className="flex justify-start"
                    >
                        <img
                            src={
                                'https://i1-vnexpress.vnecdn.net/2023/10/13/sat-lo2-1697192061-2777-1697192064.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=r90548Xf9_YL3t6KnHfGXQ'
                            }
                            className="object-cover w-[100px] mr-[5%]"
                        />
                        <div className="text-start">
                            <div className="text-[20px]">
                                Sạt lở đèo Hải Vân
                            </div>
                            <p className="text-[12px]">
                                ĐÀ NẴNG: Hàng trăm khối đất đá tràn xuống đường
                                đèo Hải Vân khiến giao thông ách tắc, chính
                                quyền phải chặn hai đầu đường, ngày 13/10.
                            </p>
                        </div>
                    </a>

                    <hr className="mt-3 mb-3" />

                    <a
                        href="https://vnexpress.net/sat-lo-deo-hai-van-4664518.html"
                        className="flex justify-start"
                    >
                        <img
                            src={
                                'https://i1-vnexpress.vnecdn.net/2023/10/11/a1-1697029245-8724-1697029591.jpg?w=500&h=300&q=100&dpr=1&fit=crop&s=lCGosP3dMQ5jz4FswOhncQ'
                            }
                            className="object-cover w-[100px] mr-[5%]"
                        />
                        <div className="text-start">
                            <div className="text-[20px]">
                                Doanh nghiệp lo sạt lở ở khu công nghệ cao
                                Đà Nẵng
                            </div>
                            <p className="text-[12px]">
                                Doanh nghiệp FDI ở Đà Nẵng phản ánh tình trạng
                                sạt lở đất sau mưa lớn làm hư hại nhà máy, gửi
                                đơn kiến nghị nhưng chưa được phản hồi.
                            </p>
                        </div>
                    </a>

                    <hr className="mt-3 mb-3" />
                </div>

                <div className="mt-[3%] mb-[3%] w-[45%] flex-row justify-around h-[100%]">
                    <div className="text-orange-500 text-[24px] text-start mb-5 underline underline-offset-8 cursor-pointer">
                        VIDEO
                    </div>

                    <iframe
                        width="100%"
                        height="65%"
                        src="https://www.youtube.com/embed/OTVqFe3wUqM?si=7mTTCJDgq_zq4-qK&loop=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default News;
