import React, { useState,memo, useCallback } from 'react'

export default function UseCallBack() {
  const [count,setCount]=useState(0);
  const [add,setAdd]=useState(0);

// without useCallback this function will recreate again when we click on add btn 
// so that unnecessary child component will re-render
//(memo is not able to control this think) 
// so that useCallback is use here to control unnecessary re rendering of child component

//   function multiply(){
//     return count*10;
//   }

    const multiply=useCallback(()=>{
        return count*10;
    },[count])

    
    return (
    <div>
        <h1>{add}</h1>
        <button onClick={()=>setAdd(add+1)}>Add</button>
        <Child count={count} setCount={setCount} multiply={multiply}/>
    </div>
  )
}

const Child=memo(({count,setCount,multiply})=>{
    console.log('child component');
    return(
        <>
            <h1>Multiply: {multiply()}</h1>
            <h1>{count}</h1>
            <button onClick={()=>setCount(count+1)}>Child Count</button>
        </>
    )
});