// import React from 'react';

// const Login = ({setUsername}) => {

//   return(
//     <>
    
//     <div>
//         <input onChange={(e) => {
//             setUsername(e.target.value)
//         }}/>
//     </div>


//     </>
//   )
// };

// export default Login;

import React, {useContext} from 'react';
import { AppContext } from './Context';
 
const Login = () => {


    const { setUsername } = useContext(AppContext)


  return(
    <>
    
    <div>
        <input onChange={(e) => {
            setUsername(e.target.value)
        }}/>

        <h1>hello</h1>

    </div>


    </>
  )
};

export default Login;