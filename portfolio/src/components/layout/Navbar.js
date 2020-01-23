import React, { Fragment } from 'react';
// import { Fragment } from 'react-router-dom';

const Navbar = () => {
  const scrollToRef = (ref) =>{ 
    window.scrollTo(0, ref)
  };
  
  return (
    <nav className='navbar navbar-dark fixed-top navbar-expand-md headspace' id="main-nav">
      <ul className="nav-style">
        <li>
        <div onClick={() => scrollToRef(0)}>        
          <i className='fas fa-code' /> Intro
        </div>
        </li>
        <li>
        <div onClick={() => scrollToRef(700)}>
          <i className='fas fa-code' /> About
        </div>
        </li>
        <li>
        <div onClick={() => scrollToRef(1300)}>
          <i className='fas fa-code' /> Skills
        </div>
        </li>
        <li>
        <div onClick={() => scrollToRef(1890)}>
          <i className='fas fa-code' /> Work
        </div>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
