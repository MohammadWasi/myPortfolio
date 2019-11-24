import React, {Fragment, useEffect} from 'react';
import Navbar from './components/layout/Navbar';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Landing from './components/intro/index';
import About from './components/about/about';
import './App.css';
import Skills from './components/skills/skills';
import Work from './components/work/work';
import Contact from './components/contact/contact';
import SizedConfetti from './components/canvas/SizedConfetti'

const App = () => {
       return (
     
     
          <div className="main-container">
               <SizedConfetti />
               <section className="intro-page"> 
               <Fragment>
          <Landing />       
     </Fragment>
               </section>
               <section className='about-container'>
     <Fragment>
          <About />
     </Fragment>
     </section>
     <section className='skills-container'>
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
     </section>
          </div>
)};
  
    
  
export default App;
