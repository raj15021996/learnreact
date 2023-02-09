import React,{useEffect} from 'react'

function useTitleCountCustomHook(count) {
    useEffect(()=>{
        if(count>0)
        document.title=`Chat ${count}`;
        else
        document.title="Chat"
       },[count])
}

export default useTitleCountCustomHook;

//custom hook is same as a component with start the name by 
//use...(as per naming convention) we create with some functionality that is reuseable 
//we import this hook and use where we need this functionality
