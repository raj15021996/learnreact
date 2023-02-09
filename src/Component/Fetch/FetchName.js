import { useEffect, useState } from "react";
export default function FetchName() {
  const [data, setData] = useState([]);
  const names=['bella','tony'];
  const arr=[];
 const fetchName=()=>{
   for(let i=0; i<names.length; i++){
  fetch(`https://api.agify.io?name=${names[i]}`)
   .then((res)=>res.json()).then((val)=>setData(val))
  }
 
 }
  useEffect(()=>{
    fetchName();
    console.log(data);
  },[])

  
  return(
   <div className="App">
    <h1>Table</h1>
    <table border='1px'>
      <tr>
        <td>Age</td>
        <td>Name</td>
      </tr>
    { arr?.map((item)=>(
      <tr>
   
        <td>{item.name}</td>
        <td>{item.age}</td>
       
      </tr>
     ))}
    </table>
   </div>
 )
}

