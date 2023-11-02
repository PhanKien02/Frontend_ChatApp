import React from "react";
import { Button, Popover } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./styles.module.scss";
import { useDispatch } from "react-redux";
import { LOG_OUT } from "../../redux/slices/authSlide";
function SettingPopOverComponent() {
    const Dispath = useDispatch();
    const content = (
        <div className={`${styles.content} d-flex flex-column-reverse`}>
            <div onClick={() => Dispath(LOG_OUT())}>
                <span>
                    Logout <FontAwesomeIcon icon="fas fa-sign-out-alt" />
                </span>
            </div>
            <div>User Settings <FontAwesomeIcon icon="fas fa-user-cog" /></div>
        </div>
    );

    return (
        <>
            <Popover
                placement="rightBottom"
                content={content}
                trigger="click"
                className={styles.popover}>
                <Button className={styles.button}>
                    <FontAwesomeIcon
                        icon="fas fa-cog"
                        size="lg"
                        style={{ color: "#33c2e1" }}
                    />
                </Button>
            </Popover>
        </>
    );
}

export default SettingPopOverComponent;
