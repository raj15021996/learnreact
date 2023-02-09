import React,{useState} from "react";

function Profile(){
    const [show, setShow] = useState(false);
    return(
        <div className="App">
            { show? <h1>Hello World!--false</h1>:<h1>Hello My world!--True</h1> }
             <button onClick={()=>setShow(false)}>true</button>
             <button onClick={()=>setShow(true)}>false</button>
        </div>
    )
}
export default Profile