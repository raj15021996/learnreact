import { useEffect, useState } from "react";
export default function FetchApi() {
  const [data, setData] = useState([]);
 
  useEffect(()=>{
    fetch('https://randomuser.me/api/?results=10 ')
    .then((res)=>res.json())
    .then((obj=>{
        setData(obj.results);
        console.log(obj.results)
    }))
  },[])
  return(
   <div className="App">
    <h1>Table</h1>
    <table border='1px'>
      <tr>
     
        <td>name</td>
        <td>gender</td>
        <td>Address</td>
      </tr>
    { data?.map((item)=>(
      <tr>
        <td>{item.name.first}</td>
        <td>{item.gender}</td>
        <td>{item.location.street.name}</td>
      </tr>
     ))}
    </table>
   </div>
 )
}
