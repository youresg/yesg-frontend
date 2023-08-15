import React from 'react';

import {Link} from 'react-router-dom';

const main=() =>{
    return(
        <div>
            메인 공간
            <nav id="menubar">
            <ul className="menu">
                <li><Link to="/esg" className="link" >ESG</Link></li>
                <li><Link to="/information" className="link" >INFORMATION</Link></li>
                <li><Link to="/community" className="link" >COMMUNITY</Link></li>
            </ul>
            </nav>
        </div>
    )
}

export default main;