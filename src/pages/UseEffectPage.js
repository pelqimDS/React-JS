// import React, { useEffect, useState } from 'react';
// import axios from 'axios';



// function UseEffectPage() {
//   const [data, setData] = useState([])
//   useEffect(() =>{
//       // axios.get('https://reqres.in/api/users?page=2')
//       // .then(res => setData(res.data.data))
//       // .catch(err => console.log(err))

      
//       // axios.post('https://reqres.in/api/users/2', {
//       //   "name": "Yousaf",
//       //   "job": "programmer"
//       // })
//       // .then(res => console.log(res))
//       // .catch(err => console.log(err))


//       // axios.put('https://reqres.in/api/users/2', {
//       //   "name": "Yousaf",
//       //   "job": "programmer"
//       // })
//       // .then(res => console.log(res))
//       // .catch(err => console.log(err))



//       axios.delete('https://reqres.in/api/users/2')
//       .then(res => console.log(res))
//       .catch(err => console.log(err))


//   }, [])


//     return (
//       <>
//           <h1>useEffect</h1> 
//           <ul>
//             {/* {
//               data.map(d => {
//                 return <li>{d.email}</li>
//               })
//             }
//            */}
//           {/* {
//             data.slice(0, 3).map(d => {
//               return <li>{d.email}</li>;
//             })
//           } */}

//           </ul>
          
  
//       </>
//     )
//   };


// export default UseEffectPage;




import React, { useEffect, useState } from 'react';
import axios from 'axios';



function UseEffectPage() {
  const [data, setData] = useState("")
  
  const [count, setCount] = useState(0)



  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments')
    .then((resp)=>{
      setData(resp.data[count].email)
      console.log('api called ')
    })
  }, [count])


    return (
      <>
          <h1>useEffect <br/> <br/> {data}</h1> 
        
          <p>{count}</p>
          <button onClick={() => {
            setCount(count + 1)
          }}>click</button>
  
      </>
    )
  };


export default UseEffectPage; 