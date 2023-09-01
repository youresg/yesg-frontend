import React from 'react';
import { removeCookie } from './Cookies';

const LogoutButton = ({ onLogout }) => {
 
    const handleLogout = () => {
        // 액세스 토큰 쿠키 삭제
        removeCookie("accessToken");

    }

    return (
        <button onClick={handleLogout}>로그아웃</button>
    );
};

export default LogoutButton;
