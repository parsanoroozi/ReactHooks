import React, { useLayoutEffect, useEffect, useRef } from "react";

const LayoutTutorial = (props) => {
  const inputRef = useRef(null);

  // it will call before useEffect... but for the rest of it its like useEffect hook
  useLayoutEffect(() => {
    console.log("UseLayoutEffect", inputRef.current.value);
  }, []);

  // it will call after when the data loaded, and call after every thing get render
  useEffect(() => {
    console.log("useEffect");
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div>
      <h1>UseLayout</h1>
      <p>here is useLayout component</p>
      <input ref={inputRef} value="PEDRO" />
    </div>
  );
};

export default LayoutTutorial;
