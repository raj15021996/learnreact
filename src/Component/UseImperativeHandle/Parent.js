import React, { useRef } from 'react'
import Child from './Child';

export default function Parent() {
  const ref=useRef();
    return (
    <div style={{margin:'20rem',fontSize:'5rem'}}>
        <Child ref={ref}/>
        <button onClick={()=>ref.current.Increment()}>Parent Click</button>
    </div>
  )
}
