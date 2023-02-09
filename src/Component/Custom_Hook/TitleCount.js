import React, { useEffect, useState } from 'react'
import useTitleCountCustomHook from './useTitleCountCustomHook';
export default function TitleCount() {
   const [count,setCount]=useState(0);

   //custom hook
   useTitleCountCustomHook(count);
  
   return (
    <>
      <h1>{count}</h1>
      <button style={{marginLeft:'46vw',height:'3rem',width:'5rem'}} onClick={()=>setCount(count+1)} >+</button>
    </>
  )
}
