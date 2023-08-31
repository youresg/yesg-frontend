import React from 'react';
import GoogleButton from './GoogleButton';
import LogoutButton from './LogoutButton'; 

const Main = () => {

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
