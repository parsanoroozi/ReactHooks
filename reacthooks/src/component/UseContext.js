import React, { useState, createContext } from "react";
import Login from "./utils/Login";
import User from "./utils/User";

export const AppContext = createContext(null);

const ContextTutorial = () => {
  const [userName, setUserName] = useState("");

  return (
    <AppContext.Provider value={{ userName, setUserName }}>
      <h1>UseContext</h1>
      <Login />
      <User />
    </AppContext.Provider>
  );
};

export default ContextTutorial;
