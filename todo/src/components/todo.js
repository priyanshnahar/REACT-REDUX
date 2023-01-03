import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToDo, deleteToDo, removeToDo } from "../redux/actions/actions";
import "../App.css";

const Todo = () => {
  const [inputData, setInputData] = useState();
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Add Your Items Here</h1>
      <div>
        <input
          type="text"
          placeholder="add items here..."
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <span>
          <button
            onClick={() => dispatch(addToDo(inputData), setInputData(""))}
          >
            ADD
          </button>
        </span>
      </div>
      <div className="Items">
        {list.map((elem) => {
          return (
            <div className="eachItems" key={elem.id}>
              <h3>{elem.data}</h3>
              <div>
                <button
                  onClick={() =>
                    dispatch(deleteToDo(elem.id), setInputData(""))
                  }
                >
                  DELETE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
