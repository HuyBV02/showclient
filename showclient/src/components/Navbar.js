import React from 'react';
import logo from '../assets/img/logo.png';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div className="h-[12vh] flex items-center justify-between">
                <div className="ml-[10%] ">
                    <img src={logo} />
                </div>

                <div className="mr-[10%] flex items-center">
                    {/* <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive
                            ? 'border px-2 py-2 bg-[#f58620] rounded-full'
                            : 'text-black'
                    }
                >
                    <span>TRANG CHỦ</span>
                </NavLink>
                <div className="border border-slate-900 h-[3vh] mr-2 ml-2"></div> */}
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? ' text-[#f58620] rounded-full'
                                : 'text-black hover:text-[#f58620]'
                        }
                    >
                        <span>GIỚI THIỆU</span>
                    </NavLink>
                    <div className="border border-slate-900 h-[3vh] mr-2 ml-2"></div>

                    <NavLink
                        to="/area"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-[#f58620] rounded-full'
                                : 'text-black'
                        }
                    >
                        <span>PHÂN VÙNG RỦI RO</span>
                    </NavLink>
                    <div className="border border-slate-900 h-[3vh] mr-2 ml-2"></div>
                    <NavLink
                        to="/documents"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-[#f58620] rounded-full'
                                : 'text-black'
                        }
                    >
                        <span>TÀI LIỆU</span>
                    </NavLink>
                    <div className="border border-slate-900 h-[3vh] mr-2 ml-2"></div>
                    <Link
                        to="https://hhtech.vercel.app/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-blue-500 hover:text-white'
                                : 'text-black '
                        }
                    >
                        <span>QUAN TRẮC</span>
                    </Link>
                    <div className="border border-slate-900 h-[3vh] mr-2 ml-2"></div>
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-[#f58620] rounded-full'
                                : 'text-black '
                        }
                    >
                        <span>LIÊN HỆ</span>
                    </NavLink>
                </div>
            </div>

            <hr />
            <hr />
        </>
    );
};

export default Navbar;
