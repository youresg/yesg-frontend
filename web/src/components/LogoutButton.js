import React from 'react';
import axios from 'axios';
import { getCookie, removeCookie } from './Cookies';

const LogoutButton = ({ onLogout }) => {

    const handleLogout = () => {
        const accessToken = getCookie("accessToken");
        const headers = {
            'Authorization': `Bearer ${accessToken}`
        };

        // POST 요청을 보냅니다.
        axios.post('/member/logout', {}, { headers })
            .then(response => {
                // 요청이 성공하면 여기에서 처리합니다.
                console.log('로그아웃 성공:', response.data);
            })
            .catch(error => {
                // 요청이 실패하면 여기에서 오류를 처리합니다.
                console.error('로그아웃 실패:', error);
            });
        // 액세스 토큰 쿠키 삭제
        removeCookie("accessToken");

    }

    return (
        <button onClick={handleLogout}>로그아웃</button>
    );
};

export default LogoutButton;
