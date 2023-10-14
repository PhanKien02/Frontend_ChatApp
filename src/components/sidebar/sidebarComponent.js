import React from "react";
import styles from "./styles.module.scss";
function SidebarComponent() {
    return (
        <>
            <div className={styles.search}>
                <form>
                    <input type="text" placeholder="search" />
                </form>
            </div>
        </>
    );
}

export default SidebarComponent;
