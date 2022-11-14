import Home from './components/Home';
import React, { useState, useEffect } from 'react';


// code inspeired by https://dev.to/madara/fetching-data-with-react-hooks-and-fetch-api-beginners-guide-2ick

// const App = () => {
//     const [data, setData] = useState(null)
//     const fetchURL = "https://kekambas-blog.herokuapp.com/blog/posts/"
//     const getData = () =>
//       fetch(`${fetchURL}/posts`)
//         .then((res) => res.json())
  
//     useEffect(() => {
//       getData().then((data) => setData(data))
//     }, [])
  
//     return (
//       <div>
//         {data?.map((item) => 
//           <ul>
//             <li>{item.title}</li>
//           </ul>
//         )}
//       </div>
//     )
//   }
  
//   export default App;


//   const App = () => {
//     const [data, setData] = useState(null)
//     const fetchURL = "https://kekambas-blog.herokuapp.com/"
//     const getData = () =>
//       fetch(`${fetchURL}/posts`)
//         .then((res) => res.json())
  
//     useEffect(() => {
//       getData().then((data) => setData(data))
//     }, [])
  
//     return (
//       <div>
//         {data?.map((item) => 
//           <ul>
//             <li>{item.title}</li>
//           </ul>
//         )}
//       </div>
//     )
//   }
  
//   export default App;