import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import { Link } from 'react-router-dom';



const Home = () => {


  return(
    <>
    

  <ul>
    
    <li><Link to="/UseStatePage">Use useState</Link></li>  

    <li><Link to="/UseReducerPage">Use useReducer</Link></li>

    <li><Link to="/UseEffectPage">Use useEffect</Link></li>

    <li><Link to="/UseRefPage">Use useRef</Link></li>

    <li><Link to="/UseLayoutEffect">Use UseLayoutEffect</Link></li>

    <li><Link to="/Context">Use UseContext</Link></li>

    <li><Link to="/ImperativeHandle">Use Imperative</Link></li>

    
  </ul>    
  


         
    
    </>
  )
};

export default Home;
