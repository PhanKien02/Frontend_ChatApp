import { React, useEffect, useState } from "react";
import { Button, Form, Input } from "antd";
import styles from "./style.module.scss";
import { userLogin } from "../../../redux/slices/authSlide";
import { useDispatch,useSelector } from 'react-redux';
function RegisterPage() {
    const [messageError,setMessageError] = useState(" ");
    const message = useSelector(state => state.authentication.message);
    const dispatch = useDispatch()
    const handleFinish = (value) => {
        dispatch(userLogin(value));
    };
    useEffect(()=>{
        setMessageError(message);
    },[message])
    return (
        <div className={styles.registerPage}>
            <div className="form-value">
                <h2 className={styles.title}>Login</h2>
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
                        ]}>
                        <Input.Password placeholder="password" />
                    </Form.Item>
                        <p className="text-danger">{messageError}</p>
                    <Form.Item
                        wrapperCol={{
                            offset: 2,
                            span: 20,
                        }}>
                        <Button
                            className={styles.button}
                            type="primary"
                            htmlType="submit">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className={styles.register}>
                    <p>
                        <a href="/auth/register">Do not have an account: reister</a>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
