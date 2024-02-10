// import React from 'react';

// const User = ({username}) => {

//   return(
//     <>
    
//     <div>
//         <h1>User: {username}</h1>
//     </div>


//     </>
//   )
// };

// export default User;

import React, {useContext} from 'react';
import { AppContext } from './Context';




const User = () => {

    const { username } = useContext(AppContext)

  return(
    <>
    
    <div>
        <h1>User: {username}</h1>
    </div>


    </>
  )
};

export default User;