import React, {Fragment, useEffect} from 'react';
import linkedIn from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import email from '../../assets/icons/email.svg';
import mobile from '../../assets/icons/whatsapp.svg';
import { Link } from 'react-router-dom';

function Contact () {
  const js = [':)','Find me on:']
     return (
       <div className='contact'>
           {/* <div className="title">Find me on:</div> */}
           <div className="social">
           <a href="https://www.linkedin.com/in/mohammad-wasi/" target="_blank">
           <img src={linkedIn} /></a>
           </div>
           <div className="social">
           <a href="https://github.com/MohammadWasi" target="_blank">
           <img src={github} /></a>
           </div>
           <div className="social">
           <a href="mailto: mdwasi15@gmail.com" target="_blank">
               <img src={email} /></a>
           </div>
           <div className="social">
           <a href="tel:+918860971881" target="_blank">
           <img src={mobile} /></a>
           </div>
        </div>
     )
  }

export default Contact;