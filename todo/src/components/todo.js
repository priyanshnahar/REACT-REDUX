import React, { useState } from "react";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState();
  return (
    <div className="App">
      <h1>Add Your Items Here</h1>
      <input type="text" placeholder="add items here..." value={inputData} onChange={(e)=> e.target.value}/>
      <span>
        <button>+</button>
      </span>
    </div>
  );
};

export default Todo;
