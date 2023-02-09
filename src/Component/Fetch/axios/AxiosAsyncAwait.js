import axios from "axios";
import { useEffect, useState } from "react";


export default function App() {
  const [datas,setDatas]=useState([]);
  
  useEffect(()=>{
    async function getData(){
      const res=await axios.get(`${'https://randomuser.me/api/?results=10'}`);
      setDatas(res.data.results);
      console.log(res.data.results);
    }
    getData();
  },[])

  return (
    <div className="App">
     {
       datas?.map((items)=>{   
         return <h1 key={items.id.value}>{items.gender}</h1>
       })
     }
  
    </div>
  );
}
