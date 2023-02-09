import { useRef } from "react";

export default function Uncontrolled() {
  const formUseRef=useRef(null);
  function FormSubmit(e){
    e.preventDefault();
    console.log("Username",formUseRef.current.value)
  }
  return (
    <div className="App">
      <h1>Uncontrolled component</h1>
     <form onSubmit={FormSubmit}>
       <input type='text' placeholder='username' ref={formUseRef}/>
       <button>submit</button>
     </form>
    </div>
  );
}
