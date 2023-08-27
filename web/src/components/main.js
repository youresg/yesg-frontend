import React from 'react';

const main=() =>{
    return(
        <div className="mainPage">
        <div><a href="http://localhost:8080/oauth2/authorization/google">구글 계정</a></div>
        <div className="image-container"><img className="ment" alt="ment" src="img/ment2.png" /></div>
        <div className="slide-container">
        <img className="emoji" alt="emoji" src="img/emoji.png" /> </div>
        <div><img className="back" alt="back" src="img/mainColor1.png" /></div>
        <div><img className="earth" alt="earth" src="img/earth3.png" /></div>
    </div>
    )
}

export default main;