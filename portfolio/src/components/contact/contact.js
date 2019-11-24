import React, {Fragment, useEffect} from 'react';
import linkedIn from '../../assets/icons/linkedin.png';
import github from '../../assets/icons/github.png';
import email from '../../assets/icons/email.svg';
import mobile from '../../assets/icons/whatsapp.svg';
function Contact () {
  const js = [':)','Find me on:']
     return (
       <div className='contact'>
           {/* <div className="title">Find me on:</div> */}
           <div className="social">
           <img src={linkedIn} />
           </div>
           <div className="social">
           <img src={github} />
           </div>
           <div className="social">
               <img src={email} />
           </div>
           <div className="social">
           <img src={mobile} />
           </div>
        </div>
     )
  }

export default Contact;