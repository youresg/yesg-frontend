import React, { useEffect } from 'react';
import GoogleButton from './GoogleButton';

const Main = () => {

    useEffect(() => {
        // URL에서 'token' 값을 추출하는 함수
        const getTokenFromURL = () => {
            const urlParams = new URLSearchParams(window.location.search);
            return urlParams.get('token');
        };

        // URL에서 토큰을 가져옵니다.
        const tokenFromURL = getTokenFromURL();
        if (tokenFromURL) {
            // 토큰이 URL에 있다면 localStorage에 저장합니다.
            localStorage.setItem('userToken', tokenFromURL);
        }

        // localStorage에서 토큰을 가져와 콘솔에 출력합니다.
        const tokenFromStorage = localStorage.getItem('userToken');
        if (tokenFromStorage) {
            console.log("Token from localStorage:", tokenFromStorage);
        }
    }, []);

    return (
        <div className="mainPage">
            <GoogleButton />
            <div className="image-container"><img className="ment" alt="ment" src="img/ment2.png" /></div>
            <div className="slide-container">
                <img className="emoji" alt="emoji" src="img/emoji.png" />
            </div>
            <div><img className="back" alt="back" src="img/mainColor1.png" /></div>
            <div><img className="earth" alt="earth" src="img/earth3.png" /></div>
        </div>
    );
}

export default Main;
