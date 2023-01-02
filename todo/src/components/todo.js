import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../redux/actions/actions";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState();
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Add Your Items Here</h1>
      <input
        type="text"
        placeholder="add items here..."
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <span>
        <button onClick={() => dispatch(addToDo(inputData))}>+</button>
      </span>
    </div>
  );
};

export default Todo;
