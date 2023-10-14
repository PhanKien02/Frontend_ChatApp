import { React, useState } from "react";
import { Button, Form, Input } from "antd";
import request from "../../../utils/httpRequest";
import styles from "./style.module.scss";
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
    const Navigate = useNavigate();
    const [errorMessage,setErrorMessage] = useState("");
    const handleFinish =async (user) => {
        try {
            await request.post("create-user",user);
            Navigate("/auth/active-accout");
        } catch (error) {
            setErrorMessage(error.response.data.message);
        }
    };
    return (
        <div className={styles.registerPage}>
            <div className="form-value">
                <h2 className={styles.title}>Register</h2>
                <Form
                    onFinish={handleFinish}
                    className={styles.inputBox}
                    name="registerForm"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 8,
                    }}
                    style={{
                        maxWidth: 500,
                    }}
                    initialValues={{
                        remember: false,
                    }}
                    autoComplete="off">
                    <div className="d-flex justify-content-between">
                        <Form.Item
                            label="firstName"
                            name="firstName"
                            labelCol={{ flex: "100px" }}
                            labelAlign="left"
                            labelWrap
                            wrapperCol={{ flex: 1 }}
                            style={{ maxWidth: 150 }}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your firstName!",
                                },
                            ]}>
                            <Input placeholder="firstName" />
                        </Form.Item>
                        <Form.Item
                            label="LastName"
                            name="lastName"
                            labelCol={{ flex: "100px" }}
                            labelAlign="left"
                            labelWrap
                            wrapperCol={{ flex: 1 }}
                            style={{ maxWidth: 150 }}
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your LastName!",
                                },
                            ]}>
                            <Input placeholder="LastName" />
                        </Form.Item>
                    </div>
                    <Form.Item
                        label="email"
                        name="email"
                        labelCol={{ flex: "410px" }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        style={{ maxWidth: 400 }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your email!",
                            },
                            {
                                type: "email",
                                message: "Email is incorrect.",
                            },
                        ]}>
                        <Input placeholder="email" />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        labelCol={{ flex: "410px" }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        style={{ maxWidth: 400 }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your password!",
                            },
                            {
                                min: 6,
                                message:
                                    "Password must be at least 6 characters long",
                            },
                        ]}>
                        <Input.Password placeholder="password" />
                    </Form.Item>
                    <Form.Item
                        label="Confirm password"
                        name="confirmPassword"
                        labelCol={{ flex: "410px" }}
                        labelAlign="left"
                        labelWrap
                        wrapperCol={{ flex: 1 }}
                        style={{ maxWidth: 400 }}
                        rules={[
                            {
                                required: true,
                                message: "Please input your confirm  password!",
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {
                                    if (
                                        !value ||
                                        getFieldValue("password") === value
                                    ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(
                                        new Error(
                                            "password entered do not match!"
                                        )
                                    );
                                },
                            }),
                        ]}>
                        <Input.Password placeholder="confirm password" />
                    </Form.Item>
                        <p className="text-danger">{errorMessage}</p>
                    <Form.Item
                        wrapperCol={{
                            offset: 2,
                            span: 20,
                        }}>
                        <Button
                            className={styles.button}
                            type="primary"
                            htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.register}>
                    <p>
                        <a href="/auth/login">you have a account login</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
