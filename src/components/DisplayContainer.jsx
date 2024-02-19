import { Collapse } from "antd";
import React, { useRef, useState } from "react";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import UpdateModal from "./UpdateModal";

function SortLocalStorage() {
  var sortedArray = [];
  if (localStorage.length > 0) {
    var localStorageArray = new Array();
    for (let i = 0; i < localStorage.length; i++) {
      let newKey = localStorage.key(i);
      let newVal = localStorage.getItem(newKey);

      const obj = {};
      obj[newKey] = newVal;

      localStorageArray.push(obj);
    }
    sortedArray = localStorageArray.sort();
  }

  return sortedArray;
}

const DisplayContainer = () => {
  const [storage, setStorage] = useState(SortLocalStorage());
  const [isUpdate, setIsUpdate] = useState(false);
  const [currTask, setCurrTask] = useState("");

  function deleteTask() {
    return (
      <>
        <EditOutlined
          className="mx-4"
          style={{ fontSize: "20px" }}
          onClick={(e) => {
            var el =
              e.target.parentElement.parentElement.parentElement.childNodes[1]
                .innerText;
            setIsUpdate(true);
            setCurrTask(el);
          }}
        />
        <DeleteOutlined
          style={{ fontSize: "20px" }}
          onClick={(e) => {
            var el =
              e.target.parentElement.parentElement.parentElement.childNodes[1]
                .innerText;
            setStorage(() => {
              localStorage.removeItem(el);
              return SortLocalStorage();
            });
          }}
        />
      </>
    );
  }

  const items = storage.map((i) => {
    return {
      label: Object.keys(i),
      children: <pre>{Object.values(i)}</pre>,
      extra: deleteTask(storage),
    };
  });

  return (
    <>
      {isUpdate ? (
        <UpdateModal
          setIsUpdate={setIsUpdate}
          isUpdate={isUpdate}
          setStorage={setStorage}
          SortLocalStorage={SortLocalStorage}
          data={currTask}
        />
      ) : null}
      <div className="task-container ">
        <h1 className="text-center mb-4">List of All Tasks</h1>
        <div className="taskList p-4">
          <Collapse
            defaultActiveKey={0}
            collapsible="icon"
            size="large"
            accordion
            showArrow={false}
            items={items}
          />
        </div>
      </div>
    </>
  );
};

export default DisplayContainer;
