import { useState } from "react";

export default function Calc1() {
  const [data1,setdata1]=useState(0);
  const [data2,setdata2]=useState(0);
  const [data3,setdata3]=useState("");
  function operation(e){
    if(e.target.value==='sum'){
      setdata3(Number(data1)+Number(data2));
      setdata1(0);
      setdata2(0);
    }
    else if(e.target.value==='sub'){
      setdata3(Number(data1)-Number(data2));
      setdata1(0);
      setdata2(0);
    }
    else if(e.target.value==='div'){
      setdata3(Number(data1)/Number(data2));
      setdata1(0);
      setdata2(0);
    }
    else if(e.target.value==='mul'){
      setdata3(Number(data1)*Number(data2));
    }
  }
  return (
    <div className="Calc1">
      <h1>Calculator</h1>
     <input value={data1} onChange={(e)=>setdata1(e.target.value)}/>
     <select onChange={operation}>
       <option value=''>opration</option>
       <option value='sum'>+</option>
       <option value='sub'>-</option>
       <option value='div'>/</option>
       <option value='mul'>*</option>
     </select>
     <input value={data2} onChange={(e)=>setdata2(e.target.value)}/>
     <span>=</span>
     <input value={data3} />
    </div>
  );
}
