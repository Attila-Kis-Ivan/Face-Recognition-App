import React from "react";
import './Navigation.css';

const Navigation = ({onRouteChange, isSignedIn}) => {
  
      if(isSignedIn) {
        return(
        <nav>
          <p onClick={() => onRouteChange('signout')} id="sign-out">Sign Out</p>
        </nav>
        );
      } else {
      return (
       <nav>
          <p onClick={() => onRouteChange('signin')} id="sign-in">Sign In</p>
        
          <p onClick={() => onRouteChange('register')} id="register">Register</p>
       </nav>

      );
    }
}

export default Navigation;