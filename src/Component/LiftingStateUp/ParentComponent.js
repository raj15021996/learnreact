import { useState } from "react";
import ChildA from "./ChildA";
import ChildB from "./ChildB";


export default function App() {
  const [input,setInput]=useState("");

  const handleChange=(data)=>{
    setInput(data)
  }
  return (
    <div className="App" style={{textAlign:'center' , fontSize:'50px'}}>
      <h1>Lifting State up</h1>
      <div>Parent {input}</div>
    <ChildA setDataFromChildA={handleChange}/>
    <ChildB name={input}/>
    </div>
  );
}
