import React from 'react';
import {Footer, Navbar, Sidenav} from "../../components";
import styles from './style.module.css';

export const NavigationLayout = ({children, showFooter}) => {
    return (
        <div className={styles.main}>
            <Navbar />
            <div className={styles.childrenContainer}>
                <Sidenav />
                <div>
                    {children}
                </div>
            </div>

            <Footer />
        </div>
    );
};
