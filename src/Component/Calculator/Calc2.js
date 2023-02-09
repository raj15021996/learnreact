import React, { useState } from "react";
export default function Calc2() {
  const [result, setResult] = useState('');
  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };

  function Clear() {
    setResult("");
  }
  function Calculate() {
    setResult(eval(result).toString());
  }
  function Backppace() {
    setResult(result.slice(0, -1));
  }
  return (
    <div className='App'>
      <h1>Calculator</h1>
      <input type='text' placeholder="enter value" value={result} />
      <br /><br />

      <input type="button"
        value="1"
        onClick={handleClick} />

      <input type="button"
        value="2"
        onClick={handleClick} />

      <input type="button"
        value="3"
        onClick={handleClick} />

      <input type="button"
        value="4"
        onClick={handleClick} /> <br /><br />

      <input type="button"
        value="5"
        onClick={handleClick} />

      <input type="button"
        value="6"
        onClick={handleClick} />

      <input type="button"
        value="7"
        onClick={handleClick} />

      <input type="button"
        value="8"
        onClick={handleClick} /> <br /><br />


      <input type="button"
        value="9"
        onClick={handleClick} />
      <input type="button"
        value="0"
        onClick={handleClick} />   <br /><br />
      <input type="button"
        value="+"
        onClick={handleClick} />
      <input type="button"
        value="-"
        onClick={handleClick} />

      <input type="button"
        value="/"
        onClick={handleClick} />
      <input type="button"
        value="x"
        onClick={handleClick} />
      <br /><br />
      <input type="button"
        value="="
        onClick={Calculate} />
      <input type="button"
        value="C"
        onClick={Backppace} />
      <input type="button"
        value="Clear"
        onClick={Clear} />
    </div>

  )
}