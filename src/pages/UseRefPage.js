import React, { useRef } from 'react';

const UseRefPage = () => {
  const inputRef = useRef(null);

  const onClick = () => {
    const inputValue = inputRef.current.value.trim();
    if (inputValue !== '') {
      inputRef.current.focus();
      console.log(inputValue);
      inputRef.current.value = '';
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <>
      <div className='content'>
        <h1>UseRef</h1>
        <h1>Bob</h1>
        <input type='text' placeholder='ex.....' ref={inputRef}></input>
        <button onClick={onClick}>Change Name</button>
      </div>
    </>
  );
};

export default UseRefPage;


