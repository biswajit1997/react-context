import React, { useContext } from "react";
import UserContext from "./UserContext";
import Page from "./Page";

function NewPage() {
  const data = useContext(UserContext);
  return (
    <div>
      <h3>New Page</h3>
      <p>{data.count}</p>
      <button
        type="submit"
        onClick={() => {
          data.setCounterSub(1000);
        }}
      >
        - 1000
      </button>
      <Page />
    </div>
  );
}

export default NewPage;
