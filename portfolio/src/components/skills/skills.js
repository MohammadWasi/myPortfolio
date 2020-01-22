import React, {Fragment, useEffect} from 'react';
import angular from '../../assets/skills/angular.png';
import react from '../../assets/skills/react.png';
import redux from '../../assets/skills/redux.png';
import javascript from '../../assets/skills/js.png';
import nodejs from '../../assets/skills/nodejs.png';
import ionic from '../../assets/skills/ionic.png';
import html from '../../assets/skills/html.png';
function Skills () {
    const js = ['Skills />']
     return (
         <>
         <div className="title">{js[0]}</div>
       <div className='skills'>
           {/* <div className="title">{js[0]}</div>
         <div className="skills-list">
           <div className="list-item hvr-shutter-in-vertical">
           <h3>HTML &amp; CSS</h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>Javascript</h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>React</h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>Redux</h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>Angular</h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>Ionic </h3>
               </div>
               <div className="list-item hvr-shutter-in-vertical">
           <h3>Node Js</h3>
               </div>
         </div> */}
         
         <div className="skill">
  <img src={html} alt="John" />
  <h3>HTML &amp; CSS</h3>
  </div>
  <div className="skill">
  <img src={javascript} alt="Javascript" />
  <h3>Javascript</h3>
  </div>
  <div className="skill">
  <img src={react} alt="React" />
  <h3>React</h3>
  </div>
  </div>

 <div className='skills'>
  <div className="skill">
  <img src={redux} alt="Redux" />
  <h3>Redux</h3>
  </div>
  <div className="skill">
  <img src={angular} alt="Angular" />
  <h3>Angular</h3>
  </div>
  <div className="skill">
  <img src={nodejs} alt="Nodejs" />
  <h3>Node Js</h3>
  </div>
         
        </div>
        </>
     )
  }

export default Skills;