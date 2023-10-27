import React from 'react';
import document1 from '../assets/img/document1.png';
import document2 from '../assets/img/document2.png';
import document3 from '../assets/img/document3.png';

const Documents = () => {
    return (
        <div className="mt-5 mb-10">
            <div className="text-[26px] text-[#f58620] ">
                TÀI LIỆU THAM KHẢO
            </div>

            <a
                href="https://vawr.org.vn/Upload/HT%20KHCN&%C4%90MST/BAITHAMLUAN/XAYDUNGVABAOVECONGTRINH/7-lu-quet-lu-bun-da-truot-lo-sat-lo-dat.pdf"
                className="hover:text-[#f58620] hover:shadow-lg px-4 py-4 flex justify-start items-center"
            >
                <div className="mt-5 ml-10 flex justify-center">
                    <img
                        src={document1}
                        alt=""
                        className="object-contain w-[100px]"
                    />
                    <div className="text-start">
                        <div className="text-[18px] ml-10">
                            Lũ quét, lũ bùn đá, trượt lở, sạt lở: Thực trạng và
                            định hướng giải pháp
                        </div>
                        <div className="italic ml-10 text-slate-600">
                            Vũ Bá Thao và nhóm nghiên cứu.
                        </div>
                    </div>
                </div>
            </a>
            <a
                href="https://openjicareport.jica.go.jp/pdf/12357885_01.pdf"
                className="hover:text-[#f58620] flex justify-start hover:shadow-lg px-4 py-4"
            >
                <div className="mt-5 ml-10 flex justify-center">
                    <img
                        src={document2}
                        alt=""
                        className="object-contain w-[100px]"
                    />
                    <div className="text-start">
                        <div className="text-[18px] ml-10">
                            KHẢO SÁT THU THẬP DỮ LIỆU VỀ CÁC GIẢI PHÁP CHỐNG LŨ
                            QUÉT VÀ SẠT LỞ ĐẤT TẠI KHU VỰC MIỀN NÚI PHÍA BẮC CỦA
                            VIỆT NAM
                        </div>
                        <div className="italic ml-10 text-slate-600">
                            Bộ Nông nghiệp và phát triển nông thôn.
                        </div>
                    </div>
                </div>
            </a>
            <a
                href="https://thuycong.ac.vn/wp-content/uploads/2023/07/phan-tich-dac-trung-luu-vuc-phat-sinh-lu-bun-da.pdf"
                className="hover:text-[#f58620] flex justify-start hover:shadow-lg px-4 py-4"
            >
                <div className="mt-5 ml-10 flex justify-center">
                    <img
                        src={document3}
                        alt=""
                        className="object-contain w-[100px]"
                    />
                    <div className="text-start">
                        <div className="text-[18px] ml-10">
                            Phân tích đặc trưng lưu vực phát sinh lũ bùn đá - lũ
                            quét và cơ chế tác động của lũ ở lưu vực suối Nậm
                            Păm
                        </div>
                        <div className="italic ml-10 text-slate-600">
                            Vũ Bá Thao* , Nguyễn Thị Thu Hương
                        </div>
                    </div>
                </div>
            </a>
        </div>
    );
};

export default Documents;
