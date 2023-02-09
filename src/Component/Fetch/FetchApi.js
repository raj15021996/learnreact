import { useEffect, useState } from "react";
export default function FetchApi() {
  const [data, setData] = useState([]);
 
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res)=>res.json())
    .then((result=>{
        setData(result);
    }))
  })

  
  return(
   <div className="App">
    <h1>Table</h1>
    <table border='1px'>
      <tr>
        <td>ID</td>
        <td>name</td>
        <td>Mail</td>
        <td>Address</td>
      </tr>
    { data?.map((item)=>(
      <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td>{item.address.city}</td>
      </tr>
     ))}
    </table>
   </div>
 )
}
