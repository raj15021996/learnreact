import { useEffect, useState } from "react";

export default function Fetch3() {
  const [val,setVal]=useState([]);
 
  const url='https://api.imgflip.com/get_memes'
  const ApiCall=()=>{
    return fetch(url).then((res)=>res.json())
    .then((data)=>{
      setVal(data.data.memes)
      // console.log(data.data.memes[t])
    
    })
  }
  
  useEffect(()=>{
   
    ApiCall();
    
  },[])
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <table border='1px'>
        <thead>
          <td>S.No</td>
          <td>Name</td>
          <td>Width</td>
        </thead>
      {
       (val)?.map((items,index)=>{
         
         if(index<=5){
         
         return <tr key={index}>
           
         <td> {index+1}</td> 
         <td> {items.name}</td>
         <td>{items.width}</td>
             
         </tr>
         }
       })  
      }      
       </table>
    </div>
  );
}
