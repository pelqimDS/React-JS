import React, { useState } from 'react';

const UseStatePage = () => {

    let [inputValue, setInputValue] = useState('Test')

    const function1 = (e) => {
      const newValue = e.target.value
      setInputValue(newValue)
    }

    return (
      <>
          <h1>useEffect</h1>
  
          <div className='content'>
              <input placeholder='type smth' onChange={function1}></input>
              {inputValue}
          </div>
  
      </>
    )
  };


export default UseStatePage;
