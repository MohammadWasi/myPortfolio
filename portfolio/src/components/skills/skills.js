import React, {Fragment, useEffect} from 'react';
function Skills () {
    const js = ['Skills />']
     return (
       <div className='skills'>
           <div className="title">{js[0]}</div>
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
               {/* <div className="list-item">
           <h3>Git</h3>
               </div> */}
         </div>
         
        </div>
     )
  }

export default Skills;