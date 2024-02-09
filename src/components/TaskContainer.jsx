import React, { useState } from "react";
import TodoContainer from "./TodoContainer";

const TaskContainer = () => {
  let [oldTitle, setTitle] = useState("");
  let [oldDesc, setDesc] = useState("");

  return (
    <div className="container-fluid addTaskContainer">
      <div className="mb-3">
        <h1 className="text-center mb-4">Task Details</h1>
        <hr />
        <label className="form-label">Title of task:</label>
        <input
          type="text"
          className="form-control"
          id="taskTitle"
          placeholder="Calculator app, SCRUM meeting, L&D, etc."
          defaultValue={oldTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Description of the task:</label>
        <textarea
          className="form-control"
          id="taskDetail"
          rows="3"
          placeholder="- To add history feature in Calculator app."
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        ></textarea>
      </div>

      <button
        className="btn btn-primary"
        onClick={() => TodoContainer([oldTitle, oldDesc])}
      >
        Add task
      </button>
    </div>
  );
};

export default TaskContainer;
