import {useState} from 'react'

export default function CharacterCount(){
    const [inputData, setData]=useState("")
    const[count,setCount]=useState(false);
    const [countval,setcountval]=useState(0);
   function HandleChar(e){
    setData(e.target.value)
    setcountval(e.target.value.length);
    if(e.target.value.length>10){
        setCount(true);
    }
   }
    return(
        <div>
           <input type='text' value={inputData} onChange={HandleChar}/>
           {
            count? <span>Limit Exceeded</span> : <span>{countval}/10</span>
           }
        </div>
    )
}