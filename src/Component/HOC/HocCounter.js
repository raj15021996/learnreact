import React, { useState } from 'react'

function HocCounter() {
    return (
        <>
            <h1>Counter HOC</h1>
            <Hoc1 cmd={Counter} />
            <Hoc2 cmd={Counter} />
        </>

    )
}
function Hoc1(props){
    return(
        <>
            <div style={{backgroundColor:"red",width:"100px"}}><props.cmd/></div>
        </>
    )
}
function Hoc2(props){
    return(
        <>
            <div style={{backgroundColor:"yellow",width:"100px"}}><props.cmd/></div>
        </>
    )
}

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>counter</button>
        </>
    )
}


export default HocCounter
