// import React, { useState } from 'react';
// import Login from './Login';
// import User from './User';

// const Context = () => {

//     const [username, setUsername] = useState("")


//   return(
//     <>
    
//     <h1>Context</h1>

//     <div>
//         <Login setUsername={setUsername}/> <User username={username}/>
//     </div>



//     </>
//   )
// };

// export default Context;

import React, { useState, createContext } from 'react';
import Login from './Login';
import User from './User';


export const AppContext = createContext(null)


const Context = () => {

    const [username, setUsername] = useState("")


  return(
    <>
    
    <h1>Context</h1>

    <AppContext.Provider value={{username, setUsername}}>
        <Login /> <User />
    </AppContext.Provider>



    </>
  )
};

export default Context;
