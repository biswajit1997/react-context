import React, { useContext } from "react";
import UserContext from "./UserContext";

const Page = () => {
  const data = useContext(UserContext);

  return (
    <div>
      <h3>page</h3>
      <p>{data.count}</p>
      <button
        type="submit"
        onClick={() => {
          data.setCounterValue(1000);
        }}
      >
        + 1000
      </button>
    </div>
  );
};

export default Page;
