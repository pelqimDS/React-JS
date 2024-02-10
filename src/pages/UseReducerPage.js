// import React, { useReducer, useState } from 'react';


// const function1 = (state, action) => {
//   switch (action.type) {
//     case 'TOGGLE_AND_INCREMENT':
//       return { count: state.count + 1, showText: !state.showText };
//     default:
//       return state;
//   }
// };

// const UseReducerPage = () => {

    

//   const [state, dispatch] = useReducer(function1, { count: 0, showText: false });

//   return (
//     <>
//       <div className='content'>
//         <h1>UseReducer</h1>
//         <h1>{state.count}</h1>
//         <button
//           onClick={() => dispatch({ type: 'TOGGLE_AND_INCREMENT' })}
//         >
//           Click here
//         </button>
//         {state.showText && <p>This is a text</p>}
//       </div>


      
//       {/* <div className='content'>
//         <h1>UseReducer</h1>
//         <button
//           onClick={() => dispatch({ type: 'TOGGLE_AND_INCREMENT' })}
//         >
//           Click here
//         </button>
//         {state.showText &&  <h1>{state.count}</h1> }

//         {state.showText && <p>This is a text</p>}
//       </div> */}



//     </>
//   );
//   };


// export default UseReducerPage;


import React, { useReducer, useState } from 'react';


const function1 = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1};
    case 'DEINCREMENT':
      return { count: state.count - 1};
    default:
      return state;
  }
};

const UseReducerPage = () => {

    

  const [state, dispatch] = useReducer(function1, { count: 0 });

  return (
    <>
      <div className='content'>
        <h1>UseReducer</h1>
        <h1>{state.count}</h1>
        <button
          onClick={() => dispatch({ type: 'INCREMENT' })}
        >
          Click here -1
        </button>
        <button
          onClick={() => dispatch({ type: 'DEINCREMENT' })}
        >
          Click here +1
        </button>
        {state.showText && <p>This is a text</p>}
      </div>




    </>
  );
  };


export default UseReducerPage;





