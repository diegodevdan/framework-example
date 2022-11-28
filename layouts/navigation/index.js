import React from 'react';
import {Navbar, Sidenav} from "../../components";
import styles from './style.module.css';

export const NavigationLayout = ({children}) => {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.childrenContainer}>
                <Sidenav />
                <div>
                    {children}
                </div>
            </div>
        </div>
    );
};
