import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";
// description: (we want to access the value)
// every function which we use in our return section will reCompute in every reRender of the component and the component reRenders whenever a state changes inside it,
// if the component reRenders and we have a really large function in our render section, it would be really bad for our app performance to reCompute it every time,
// solving this issue is possible using the useMemo hook
// via useMemo hook we can specify when we want a function to recompute in our app: const memoCustomName = useMeme(() => ourCustomFunction, [array of dependencis...])

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data);
      });
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;
    let longestName = "";
    comments.map((comment) => {
      if (comment.name.length > longestName.length) longestName = comment.name;
    });
    console.log("this was computed");
    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div>
      <h1>UseMemo</h1>
      <div>{getLongestName}</div>
      <button>prev</button>
      <button>next</button>
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

export default MemoTutorial;
