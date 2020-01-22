import React, {Fragment, useEffect} from 'react';
import Navbar from './Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from '../intro/index';
import About from '../about/about';
import '../../App.css';
import Skills from '../skills/skills';
import Work from '../work/work';
import Contact from '../contact/contact';
import Fade from 'react-reveal/Fade';

const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop); 

const componentList = [{com: <Landing />, class: 'intro-page'}, {com: <About />, class: 'about-container'}, 
{com: <Skills />, class: 'skills-container'}, {com: <Work />, class: 'work-container'}, {com: <Contact />, class: 'footer'}]
const App = () => {
     // const myRef = useRef(null)
     // const executeScroll = () => scrollToRef(myRef);
       return (
     
     
          <div className="main-container">
               <Navbar />
               <Fragment>
                   <Fade bottom>
               {componentList.map((item, key) => (

              
               <section className={item.class} key={key}> 
               <Fragment>
          {item.com}       
     </Fragment>
               </section>
                ))}
                </Fade>
                </Fragment>
               {/* <section className='about-container'>
     <Fragment>
          <About />
     </Fragment>
     </section> */}
     {/* <section className='skills-container'>
     <Fragment>
          <Skills />
     </Fragment>
     </section>
     <section className='work-container'>
     <Fragment>
          <Work />
     </Fragment>
     </section>
     <section className='footer'>
     <Fragment>
          <Contact />
     </Fragment>
     </section> */}
          </div>
)};
  
    
  
export default App;
