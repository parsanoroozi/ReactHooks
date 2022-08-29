import React, { useState } from "react";
import Navbar from "./utils/Navbar";
import Planets from "./utils/Planets";
import People from "./utils/People";

function QueryTutorial() {
  let [page, setPage] = useState("planets");

  return (
    <>
      <div>
        <h1>useQuery</h1>
        <Navbar setPage={setPage} />
        <div>{page === "planets" ? <Planets /> : <People />}</div>
      </div>
    </>
  );
}

export default QueryTutorial;
