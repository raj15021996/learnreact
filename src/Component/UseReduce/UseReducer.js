import React, { useReducer } from 'react'
const initialState = 0;
const reducer=(state,action)=>{
    // console.log(state,action);
    if(action.type==='Inc'){
        return state+1;
    }
    else if(action.type==='Dec'){
        return state-1;
    }
    return state;
}
export default function UseReducer() {
    const [state,dispatch]=useReducer(reducer,initialState);
  return (
    <div>
        <h1>{state}</h1>
        <button onClick={()=>dispatch({type:'Inc'})}>INC</button>
        <button onClick={()=>dispatch({type:'Dec'})}>DEC</button>
    </div>
  )
}
