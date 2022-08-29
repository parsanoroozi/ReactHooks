import React, { useRef } from "react"; // useRef to refference DOM Elements
import Button from "./utils/Button";
// the useImperativeHandle hook give us the ability to control states of a child component from a parent component with a little help of the useRef and forwardRef
const ImperativeTutorial = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <h1>UseImperative</h1>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeTutorial;
