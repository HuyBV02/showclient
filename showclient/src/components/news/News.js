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
        <div className="h-[50vh] border text-black bg-slate-100 mb-[50px]">
            <div className="flex justify-around ml-[4%] mr-[4%] h-[100%]">
                <div className="border w-[30%] mt-[3%] mb-[3%] flex">


                    <div className="w-[40%] relative max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
                        <a href="#">
                            <img
                                className="p-8 rounded-t-lg"
                                src="/docs/images/products/apple-watch.png"
                                alt="product image"
                            />
                        </a>
                        <div className="px-5 pb-5">
                            <a href="#">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">
                                    Apple Watch Series 7 GPS, Aluminium Case,
                                    Starlight Sport
                                </h5>
                            </a>
                            <div className="flex items-center mt-2.5 mb-5">
                                <svg
                                    className="w-4 h-4 text-yellow-300 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 
                                    1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 
                                    3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 
                                    0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                    />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path
                                        d="M20.924 7.625a1.523 1.523 0 0 
                                    0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 
                                    0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 
                                    0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 
                                    2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 
                                    2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"
                                    />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-yellow-300 mr-1"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <svg
                                    className="w-4 h-4 text-gray-200 dark:text-gray-600"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 20"
                                >
                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                </svg>
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                                    5.0
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                                    $599
                                </span>
                                <a
                                    href="#"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    Add to cart
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* <div className="w-[60%] h-[100%] fixed">
                        <a
                            href="#"
                            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src="/docs/images/blog/image-4.jpg"
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src="/docs/images/blog/image-4.jpg"
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </div>
                        </a>

                        <a
                            href="#"
                            class="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
                        >
                            <img
                                class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                                src="/docs/images/blog/image-4.jpg"
                                alt=""
                            />
                            <div class="flex flex-col justify-between p-4 leading-normal">
                                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    Noteworthy technology acquisitions 2021
                                </h5>
                                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    Here are the biggest enterprise technology
                                    acquisitions of 2021 so far, in reverse
                                    chronological order.
                                </p>
                            </div>
                        </a>
                    </div> */}
                </div>

                <div className="mt-[3%] mb-[3%] w-[30%] flex-row justify-around">
                    <div className="text-orange-500 text-[24px] text-start mb-5 underline underline-offset-8 cursor-pointer">
                        VIDEO
                    </div>

                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/OTVqFe3wUqM?si=7mTTCJDgq_zq4-qK&loop=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen
                    ></iframe>
                </div>

                <div className="border w-[30%]"></div>
            </div>
        </div>
    );
};

export default News;
