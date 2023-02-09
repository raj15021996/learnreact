
import { useState } from "react";
export default function SquareData() {
  const [data, setData] = useState([]);
  const [square, setSquare] = useState("");
  const [btn, setBtn] = useState(false);
  const [count, setCount] = useState(2);

  function handleClear(id) {
    setData([]);
    setCount(1);
    // setBtn(false);
  }
  function handleAdd() {
    setCount(count + 1);
    setData([...data, { id: `${Date.now()}`, count }]);
    // setvalue("")
  }
  function squareVal(id) {
    const sq = data.find((item) => item.id === id);
    setSquare(sq.count * sq.count);
    console.log(square);       
    setBtn(true);
  }
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div onSubmit={handleAdd}>
        <button onClick={handleAdd}>Add</button>
        <button onClick={() => handleClear()}>Clear</button>
      </div>
      {data.map((item) => (
        <ul>
          <li>
            <div>
              <span key={item.id}>{item.count * item.count}</span>
              <button onClick={() => squareVal(item.id)}>
                square{item.count}
              </button>
            </div>
          </li>
        </ul>
      ))}
    </div>
  );
}
