import React from 'react';

const SatLo = () => {
    const iframeStyle = {
        // width: '100%',
        // height: '100vh', // Đặt chiều cao cố định là chiều cao của cửa sổ trình duyệt
        border: 'none', // Loại bỏ khung iframe
        overflow: 'hidden', // Ẩn thanh cuộn
    };

    React.useEffect(() => {
        const iframe = document.querySelector('iframe'); // Lấy thẻ iframe

        // Thực hiện cuộn trang đến vị trí cần hiển thị (ví dụ: element có id "end-of-page")
        iframe.contentWindow.scrollTo({
            top: document.querySelector('#end-of-page'),
            behavior: 'smooth',
        });
    }, []);

    return (
        <div>
            <iframe
                src="http://truotlo.com/"
                height={600}
                width={'100%'}
                style={iframeStyle}
                seamless
            ></iframe>
        </div>
    );
};

export default SatLo;
