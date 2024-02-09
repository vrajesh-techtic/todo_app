import React from 'react'
import CreateTask from './CreateTask';

const TodoContainer = (taskArr) => {

  // console.log(taskArr);

  let newTitle = taskArr[0];
  let newDesc = taskArr[1];

  return (
    <div className="container-fluid" id="todoContainer">
        <h1 className="text-center">To-Do List</h1>
        <div className="container-fluid" id="listContainer">
          <ul className="list-group" id="listHead">
             <CreateTask addTitle={newTitle} addDesc={newDesc}/>
          </ul>
        </div>
      </div>
  )
}

export default TodoContainer