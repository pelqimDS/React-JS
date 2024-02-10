import React, { useReducer } from 'react';
import './App.css';

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_AND_INCREMENT':
      return { count: state.count + 1, showText: !state.showText };
    default:
      return state;
  }
};

const Stuff = () => {

  return (
    <>
      <div className='content'>
        <h1>Stuff Page</h1>
        </div>
    </>
  );
};

export default Stuff;
