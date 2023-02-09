import { useState } from "react";

const ChildA = (props) => {
  const [inputVal, setInputVal] = useState("");
  const handleBtn = () => {
    props.setDataFromChildA(inputVal);
  };

  return (
    <>
      <div>Hello A</div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={handleBtn}>A-State</button>
    </>
  );
};
export default ChildA;
