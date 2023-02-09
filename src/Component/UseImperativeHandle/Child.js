import React, { useState,useImperativeHandle,forwardRef } from 'react'

function Child(props,ref) {
    const [c,setC]=useState(0);

    useImperativeHandle(ref,()=>({
        Increment
    }))
    function Increment(){
        setC(c+1);
    }
  return (
    <div >
        {c}
        <button onClick={Increment}>Child Click</button>
    </div>
  )
}
export default forwardRef(Child);