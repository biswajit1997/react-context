import React, { useState } from "react";
import NewPage from "./NewPage";
import { UserProvider } from "./UserContext";

const View = () => {
  const [count, setCount] = useState(0);

  const setCounterValue = (value) => {
    setCount(count + value);
  };
  const setCounterSub = (value) => {
    setCount(count - value);
  };
  const data = {
    count,
    setCounterValue,
    setCounterSub,
  };

  return (
    <div>
      <div>
        <h2>Use Context</h2>
      </div>
      <div>
        <h3>Simple Counter</h3>
      </div>
      <p>{count}</p>
      <button
        type="submit"
        onClick={() => {
          setCount(count * 2);
        }}
      >
        x2
      </button>
      <button
        type="submit"
        onClick={() => {
          setCount(count + 10);
        }}
      >
        +10
      </button>
      <button
        type="submit"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        +1
      </button>
      <button
        type="submit"
        onClick={() => {
          if (count !== 0) {
            setCount(count - 1);
          }
        }}
      >
        -1
      </button>
      <button
        type="submit"
        onClick={() => {
          if (count !== 0) {
            setCount(count - 10);
          }
        }}
      >
        -10
      </button>
      <button
        type="submit"
        onClick={() => {
          setCount(0);
        }}
      >
        reset
      </button>
      <UserProvider value={data}>
        <NewPage />
      </UserProvider>
    </div>
  );
};

export default View;
