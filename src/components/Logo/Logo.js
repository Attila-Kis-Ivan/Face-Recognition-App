import React from "react";
import Tilt from 'react-parallax-tilt';
import logo from './Logo.png';
import './Logo.css';


const Logo = () => {
    return(
      <div className="ma4 mt0">
        <Tilt className="Tilt br5 shadow-2" option={{ max: 55}} style={{height: 100,    width:150}}>
          <div className="Tilt-inner">
            <img alt="Logo" src={logo}/>
          </div>
        </Tilt>
    </div>
    )
}

export default Logo;