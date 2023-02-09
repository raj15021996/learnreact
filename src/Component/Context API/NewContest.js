import React, { useContext, useState } from "react";
import { createContext } from "react";
const Usercontext = createContext();

export default function App() {
  const [user, setUser] = useState("");
  const [val, setVal] = useState("");
  const [password, setpassword] = useState("");
  const [p, setP] = useState(false);
  return (
    <div className="App">
      <Usercontext.Provider value={{ user, p, val }}>
        <h1>Context Api</h1>
        <hr />

        {p ? (
          <>
            <h2>{`my name is ${user}`}</h2>
            <h2>{`my password is ${val}`}</h2>
          </>
        ) : null}

        <input
          type="text"
          value={password}
          onChange={(e) => {
            setpassword(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setUser("Raj");
            setVal(password);
            if (password) {
              setP(true);
              setpassword("");
            } else {
              setP(false);
            }
          }}
        >
          Click me
        </button>
        <Component1 />
      </Usercontext.Provider>
    </div>
  );
}

const Component1 = () => {
  const { user, val, p } = useContext(Usercontext);
  return (
    <div>
      {p ? (
        <>
          <h3>{`component1:my name is  ${user}`}</h3>
          <h3>{`component1:my password is  ${val}`}</h3>
        </>
      ) : null}
    </div>
  );
};
