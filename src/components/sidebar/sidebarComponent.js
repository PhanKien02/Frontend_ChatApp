import React from "react";
import styles from "./styles.module.scss";
import { Input } from "antd";
function SidebarComponent() {
    const { Search } = Input;
    return (
        <>
            <div className={styles.search}>
                <Search
                    placeholder="Search"
                    enterButton
                />
            </div>
        </>
    );
}

export default SidebarComponent;
