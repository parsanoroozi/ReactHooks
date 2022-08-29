import React, { useState, useEffect, useCallback, useMemo } from "react";
import axios from "axios";
import Child from "./utils/Child";
//description: (we want to access the function)
// exactly the same thing with the useMemo but we are storing the function instead of the value

const CallBackTutorial = () => {
  const [data, setData] = useState("yo, pls sub to the channel");
  const [toggle, setToggle] = useState(false);

  const returnComment = useCallback(
    (name) => {
      return data + name;
    },
    [data,toggle]
  );
  // tip:
  // in return section returnComment sends the function itself
  // but returnComment() sends the value returns from the function
  return (
    <div>
      <h1>UseCallback</h1>
      <Child returnComment={returnComment} />
      <button
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
        Toggle
      </button>
      {toggle && <h1>Toggle</h1>}
    </div>
  );
};

export default CallBackTutorial;
