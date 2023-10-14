import React from 'react';
import styles from "./style.module.scss"
import { Outlet } from 'react-router-dom';
import NavBarComponent from '../../components/navbar/navbarComponent';
import SidebarComponent from '../../components/sidebar/sidebarComponent';
function MainLayout() {

    return ( 
        <div className={styles.main}>
            <div className={styles.navbar}>
                <NavBarComponent/>
            </div>
            <div className={styles.sidebar}>
                <SidebarComponent/>
                <Outlet/>
            </div>
            <div className={styles.content}>
                <Outlet/>
            </div>
        </div> 
    );
}

export default MainLayout;