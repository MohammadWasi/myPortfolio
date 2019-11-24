import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  
  return (
    <nav className='navbar navbar-dark fixed-top navbar-expand-md headspace' id="main-nav">
      <ul>
        <li>
        <Link to='/'>
          <i className='fas fa-code' /> Intro
        </Link>
        </li>
        <li>
        <Link to='/'>
          <i className='fas fa-code' /> projects
        </Link>
        </li>
        <li>
        <Link to='/'>
          <i className='fas fa-code' /> about
        </Link>
        </li>
        <li>
        <Link to='/'>
          <i className='fas fa-code' /> contact
        </Link>
        </li>
      </ul>
    </nav>
  );
};


export default Navbar;
