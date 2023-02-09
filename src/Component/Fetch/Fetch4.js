import { useEffect, useState } from "react";

export default function Fetch4() {
  const [val,setVal]=useState([{}]);
 
  const url='https://www.thecolorapi.com/id?hex=441212'
  const ApiCall=()=>{
    return fetch(url).then((res)=>res.json())
    .then((data)=>{
      setVal([{'result': data}])
      console.log(val)
    
    })
  }
  
  useEffect(()=>{
    ApiCall() 
  },[])
  return (
    <div className="App">
      <h1>Table</h1>
      <table border='1px'>
        <thead>
          <td>S.No</td>
          <td>Name</td>
          <td>Distance</td>
          <td>Image</td>
        </thead>
      {
       (val)?.map((items,index)=>{
         
         return <tr key={index}>
           
         <td > {index+1}</td> 
         <td style={{color:items?.result?.rgb?.value}}>
            {items?.result?.name?.value}</td> 
         <td>{items?.result?.name?.distance}</td>  
         <td><img src={items?.result?.image?.named}/></td> 
         </tr>
         }
       )  
      }      
       </table>
    </div>
  );
}
