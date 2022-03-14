import { Button, Form, Input, notification } from "antd";
import React from "react";
import styles from "./Contact.module.css";

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "Please enter a valid email!",
  },
};

const Contact = () => {
  const onFinish = (values) => {
    notification.success({
      message: "Email sent!",
    });
  };

  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.contactHeading}>Get in touch</h2>
      <Form
        name="contact-form"
        onFinish={onFinish}
        validateMessages={validateMessages}
        className={styles.form}
        layout="vertical"
      >
        <Form.Item
          name={["contact", "email"]}
          label="Email"
          rules={[{ required: true }, { type: "email" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["contact", "subject"]}
          label="Subject"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name={["contact", "message"]}
          label="Message"
          rules={[{ required: true }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={styles.submitButton}
          >
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
