
 import React from 'react';
import { Intro }  from './intro'
import "../../styles.css";
const Landing = () => {

  return (
    <div className="App">
        <Intro
          textColor=" rgb(204, 80, 75)"
          overlayColor="#777777"
        >
          Hi, my Name is Mohammad Wasi <br></br>i am a Full Stack Sofware Engineer
        </Intro>
      </div>
  );
};

export default Landing;
