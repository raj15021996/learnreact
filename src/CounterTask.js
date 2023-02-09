import React,{useState} from "react";

export default function Counter(){
    const [counter,setValue] = useState(0)
    const Ins =()=>{
       setValue(counter+1)
    }
    const Dec =()=>{
        setValue(counter-1)
     }
     const Res =()=>{
        setValue(0);
     }
    return(
        <div className="App">
            <h1>Counter</h1>
            <h1>{counter}</h1>
            <button onClick={Ins}>+</button>
            <button onClick={Dec}>-</button><br></br>
            <button onClick={Res}>reset</button>
        </div>
    )
}