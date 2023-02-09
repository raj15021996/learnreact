import React, { useMemo, useState } from 'react'

export default function UseMemo() {
    const [count,setCount]=useState(0);
    const [subCount,setSubCount]=useState(100);
     
    const multiplyWithoutMemo=()=>{
        console.log('multiply function call without Usememo')
        return count*10;
    }
    
    const multiply=useMemo(function handleMultiply(){
        console.log('multiply function call with UseMemo')
        return count*10;
    },[count]  )
    
  return (
    <div>
        <h1>multiplyWithoutmemeo:{multiplyWithoutMemo()}</h1>
        <h1>mul:{multiply}</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>{subCount}</h1>
        <button onClick={()=>setSubCount(subCount-1)}>Decrement</button>
    </div>
  )
}

