import React from 'react';
import { Link } from 'react-router-dom';
import classes from "../../components/css/Head.module.css";
import logo from "../../assets/Logo.png"; // Adjust the path as necessary

const Head = () => {
  return (
    <div className={classes.head}>
      <Link to="/">
        <img 
          src={logo} 
          style={{ marginLeft:"-5.1px" , height : "44.8px" }} // Adjust the size as necessary
          alt="Logo" 
          className={classes.logo}
        />
      </Link>
      
    </div>
  );
};

export default Head;
