import { Button, Form, Input } from "antd";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import request from "../../../utils/httpRequest";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function ActivePage() {
    const navigate = useNavigate();
    const [inputkey, setInputkey] = useState();
    const [message,setMessage] = useState(" ");
    const login = useSelector((state) => state.authentication);
    const activeAccout = async () => {
        await request.post("/active-user",{
            active_key : inputkey
        }).then(()=>{
            navigate("/")
        }).catch((error)=>{
            console.log(error.response.data);
            let message = error.response.data.message;
            console.log(message);
            setMessage(message)
        });
    };
    const resetKey = async () => {
        await request.post("reset-active-key",{
            email:login.user.email
        }).then((response)=>{
            console.log(response);
            setMessage(response.data.message)
        }).catch((error)=>{
            setMessage(error.response.data.message)
        })
    };
    const setKey = (event) => {
        setInputkey(event.target.value);
    };
    return (
        <div className={styles.activePage}>
            <h1 className={styles.title}>Active Accout</h1>
            <p className="mt-5">Please enter your activation key</p>
            <Form
                className={styles.inputBox}
                name="active user Form"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 800,
                }}
                initialValues={{
                    remember: false,
                }}
                autoComplete="off">
                <Form.Item
                    label="active key"
                    name="active_key"
                    labelCol={{ flex: "100px" }}
                    labelAlign="left"
                    labelWrap
                    wrapperCol={{ flex: 1 }}
                    style={{ maxWidth: 150 }}
                    rules={[
                        {
                            required: true,
                            message: "Please input your active key!",
                        },
                    ]}>
                    <Input placeholder="active key" onChange={setKey} />
                </Form.Item>
                <p className={`text-danger ${styles.message}`} >{message}</p>
                <Form.Item className={`${styles.action}`}>
                    <Button
                        className={styles.button}
                        onClick={resetKey}
                        htmlType="button">
                        Reset key
                    </Button>
                    <Button
                        className={`${styles.button}`}
                        htmlType="button"
                        onClick={activeAccout}>
                        Active
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default ActivePage;
