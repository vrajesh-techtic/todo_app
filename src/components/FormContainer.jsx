import { Button, Form, Input } from "antd";
import React from "react";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const FormContainer = ({ layout, success, btnText }) => {
  return (
    <Form
      {...layout}
      className="task-form"
      name="nest-messages"
      onFinish={(e) => {
        success(e);
      }}
      validateMessages={validateMessages}
    >
      <Form.Item
        name={["user", "title"]}
        label="Title"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input allowClear />
      </Form.Item>

      <Form.Item
        name={["user", "description"]}
        label="Description"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input.TextArea allowClear />
      </Form.Item>

      <Button type="primary" className="submitBtn" htmlType="submit">
        {btnText}
      </Button>
    </Form>
  );
};

export default FormContainer;
