import React from 'react';
import BackButton from '../components/main/BackButton.jsx';
import Line from '../components/main/Line.jsx';
import classes from '../components/css/Home.module.css';


const Contactus = () => {
  return (
    <>
      <BackButton />
      <Line 
      
      className={classes.navLink}
        style={{
          display: "flex",
          alignItems: "center",
          padding: "1rem",
          flexWrap: "wrap",
        }}>
      
         
           to become one of our talents, work with us, hire our talents, or for any other questions, email us at{' '}
             <a 
             href="mailto:support@wonwonleywontalent.com"
          style={{
            color: "black",
            textDecoration: "underline",
            marginLeft: "5px",
          }}
            >
              support@wonwonleywontalent.com
            </a>
      </Line>
    </>
  );
};

export default Contactus;
