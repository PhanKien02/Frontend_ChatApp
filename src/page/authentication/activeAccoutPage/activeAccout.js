import { Button, Form, Input } from "antd";
import styles from "./style.module.scss"
import { useSelector,useDispatch } from "react-redux";
import request from "../../../utils/httpRequest"
import { useEffect, useState } from "react";
function ActivePage() {
    const login = useSelector(state =>state.authentication)
    // const [key , setkey] = useState(null);
    const resetKey = ()=>{

    }
    const setkey = (event) =>{
        console.log(event.target.value);
    }
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
                    ]}
                    getValueFromEvent={setkey}
                    >
                    <Input placeholder="active key" />
                </Form.Item>
                <Form.Item
                        className={`${styles.action}`}>
                        <Button
                            className={styles.button}
                            type="warning"
                            htmlType="button">
                            Reset key
                        </Button>
                        <Button
                            className={`${styles.button}`}
                            type="success"
                            htmlType="button">
                            Active
                        </Button>
                    </Form.Item>
            </Form>
        </div>
    );
}

export default ActivePage;
