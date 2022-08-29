import React, { useRef } from "react";

const RefTutorial = (props) => {
  const inputRef = useRef(null);
  const onClick = () => {
    // console.log(inputRef.current.value);
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>UseRef</h1>
      <p>here is useRef component</p>
      <div>
        <h2>Pedro</h2>
        <input type="text" placeholder="Ex..." ref={inputRef} />
        <button onClick={onClick}>Change Name</button>
      </div>
    </div>
  );
};

export default RefTutorial;
