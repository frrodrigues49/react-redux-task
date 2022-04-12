import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actions } from "./actions/todo";
import { selectors } from "./selectors/todo";

function App() {
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector(selectors.getTasks);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(actions.addTask(task));
    setTask("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input value={task} onChange={handleInputChange} />
        <button>Add</button>
      </form>
      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
