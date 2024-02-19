import { Form, Input, Modal, message } from "antd";
import React, { useState } from "react";
import FormContainer from "./FormContainer";

const layout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 16,
  },
};

const UpdateModal = ({
  setIsUpdate,
  isUpdate,
  setStorage,

  SortLocalStorage,
  data,
}) => {
  const [modal2Open, setModal2Open] = useState(isUpdate);

  let taskTitle = data;

  const [messageApi, contextHolder] = message.useMessage();
  const success = (e) => {
    let newTitle = e.user.title;
    let newDesc = e.user.description;

    if (taskTitle !== newTitle) {
      localStorage.removeItem(taskTitle);
    }

    messageApi.open({
      type: "success",
      content: "Task Updated successfully!",
    });
    setStorage(() => {
      localStorage.setItem(newTitle, newDesc);
      return SortLocalStorage();
    });
    setModal2Open(false);
    setIsUpdate(false);
  };

  return (
    <>
      {contextHolder}

      <Modal
        title={<h3 className="text-center mb-4">Update Task</h3>}
        centered
        open={modal2Open}
        okText={"Update"}
        onOk={(e) => {
          success();
          setModal2Open(false);
          setIsUpdate(false);
        }}
        onCancel={() => {
          setModal2Open(false);
          setIsUpdate(false);
        }}
      >
        <FormContainer layout={layout} success={success} btnText={"Update"} />
      </Modal>
    </>
  );
};

export default UpdateModal;
