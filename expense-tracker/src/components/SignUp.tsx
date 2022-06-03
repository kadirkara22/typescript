import React from "react";
import { Form, Input, Button } from "antd";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import showError from "../utils/showError";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const SignUp = () => {
  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
    },
  };

  const navigate = useNavigate();

  const onFinish = async (values: any) => {
    console.log(values);
    try {
      await api().post("/users/register", values);
      navigate("/login", { state: true });
    } catch (error) {
      console.log(error);
      showError((error as any).response.data.errorMessage);
    }
  };
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
    >
      <Form.Item name="username" label="username" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          { required: true, message: "Please input your password!", min: 6 },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[{ type: "email", required: true }]}
      >
        <Input />
      </Form.Item>
      <Form.Item name="full_name" label="Full Name">
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignUp;
