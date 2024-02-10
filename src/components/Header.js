import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css';
import Footer from './Footer';

const Header = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleSetActiveLink = (path) => {
    setActiveLink(path);
  };

  return (
    <>
      <h1>Simple SPA</h1>

      <ul className="nav">
          <Link to="/"  className='aLink' onClick={() => handleSetActiveLink('/')}>
          <li className={activeLink === '/' ? 'active' : ''} >

            Home
          </li>
          </Link>
  
      
       
          <Link to="/stuff" className='aLink' onClick={() => handleSetActiveLink('/stuff')}>
          <li className={activeLink === '/stuff' ? 'active' : ''} >
            Stuff
          </li>
          </Link>




          <Link to="/contact"  className='aLink' onClick={() => handleSetActiveLink('/contact')}>
            <li className={activeLink === '/contact' ? 'active' : ''} >

              Contact
            </li>
          </Link>


      </ul>
    </>
  );
};

export default Header;
