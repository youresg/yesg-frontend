import React from 'react';
import { NavLink } from "react-router-dom";

const Information=() =>{
    return(
        <nav>
        <div>
          <NavLink to="/About1" style={{ textDecoration: "none" }}>YESG 소개</NavLink>
        </div>
        <div>
          <NavLink to="/About2" style={{ textDecoration: "none" }}>ESG 교육</NavLink>
        </div>
        <div>
          <NavLink to="/About3" style={{ textDecoration: "none" }}>튜토리얼</NavLink>
        </div>

      </nav>
    )
}

export default Information;