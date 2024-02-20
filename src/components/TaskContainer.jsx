import React from "react";
import { message } from "antd";
import "../css/task-container.css";
import FormContainer from "./FormContainer";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const TaskContainer = () => {
  const [messageApi, contextHolder] = message.useMessage();
  const success = (e) => {
    localStorage.setItem(e.user.title, e.user.description);

    messageApi.open({
      type: "success",
      content: "Task added successfully!",
    });
  };
  return (
    <>
      {contextHolder}
      <div className="task-container">
        <h1 className="text-center mb-4">Add New Task</h1>

        <FormContainer layout={layout} success={success} btnText="Add Task" />
      </div>
    </>
  );
};
export default TaskContainer;
