import { React } from "react";
import { Button, Form, Input } from "antd";
import styles from "./style.module.scss";
function RegisterPage() {
    const handleFinish = (value) => {
        console.log(value);
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
                        span: 16,
                    }}
                    style={{
                        maxWidth: 500,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    autoComplete="off">
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
                        ]}
                        va>
                        <Input.Password placeholder="confirm password" />
                    </Form.Item>

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
