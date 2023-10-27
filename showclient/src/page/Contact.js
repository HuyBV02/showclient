import React from 'react';

const Contact = () => {
    return (
        <div className="flex justify-around mb-5">
            <div className="w-[50%]">
                <section className="bg-white text-start">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-5 text-[24px] text-[#f58620] tracking-tight font-extrabold text-start">
                            Liên hệ
                        </h2>

                        <form action="#" className="space-y-5">
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2"
                                    placeholder="example@gmail.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="phone"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Số điện thoại
                                </label>
                                <input
                                    type="text"
                                    id="phone"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
                                    placeholder="0123456789"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    for="subject"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Tiêu đề
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 "
                                    placeholder="..."
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label
                                    for="message"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Nội dung
                                </label>
                                <textarea
                                    id="message"
                                    rows="6"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                                    placeholder="..."
                                ></textarea>
                            </div>
                            <button
                                type="submit button"
                                className="w-100 bg-[#f58620] py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke-width="1.5"
                                    stroke="currentColor"
                                    class="w-6 h-6"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <div className="w-[45%] flex py-8 lg:py-16 px-4 mx-auto">
                <div className="block">
                    <div className="mb-10 text-start">
                        <h2 className="text-[#f58620] text-[24px] tracking-tight font-extrabold">
                            Địa chỉ công ty
                        </h2>
                    </div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.608168439606!2d105.78753261128382!3d21.04835858052489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab2e25fa0bed%3A0xd77fc906815855d7!2zMjYgTmcuIDgyIFRy4bqnbiBDdW5nLCBOZ2jEqWEgVMOibiwgVOG7qyBMacOqbSwgSMOgIE7hu5lpLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1698033700372!5m2!1svi!2s"
                        width="600"
                        height="480"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Contact;
