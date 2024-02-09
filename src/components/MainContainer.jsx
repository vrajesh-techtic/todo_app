import React from "react";
import TaskContainer from "./TaskContainer";
import TodoContainer from "./TodoContainer";

const MainContainer = () => {
  return (
    <div className="main-container">
      <TaskContainer />
      <TodoContainer />
    </div>
  );
};

export default MainContainer;
