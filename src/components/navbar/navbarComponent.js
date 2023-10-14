import React from "react";
import styles from "./styles.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
function NavBarComponent() {
    return (
        <>
            <div className={styles.user}>
                <FontAwesomeIcon
                    icon="fas fa-user"
                    size="lg"
                    style={{ color: "#33c2e1" }}
                />
            </div>
            <div className={styles.items}>
                <Link to={""}>
                    <FontAwesomeIcon
                        icon="fas fa-comment-dots"
                        size="lg"
                        style={{ color: "#0FC738" }}
                    />
                </Link>
                <Link>
                    <FontAwesomeIcon
                        icon="fas fa-user-friends"
                        size="lg"
                        style={{ color: "#0FC738" }}
                    />
                </Link>
                <Link>
                    <FontAwesomeIcon
                        icon="fas fa-users"
                        size="lg"
                        style={{ color: "#0FC738" }}
                    />
                </Link>
            </div>
            <div className={styles.setting}>
                <FontAwesomeIcon
                    icon="fas fa-cog"
                    size="lg"
                    style={{ color: "#0FC738" }}
                />
            </div>
        </>
    );
}

export default NavBarComponent;
