import { message } from "antd";

const showSuccess = (successMessage: string) => {
  message.error(successMessage);
};

export default showSuccess;
