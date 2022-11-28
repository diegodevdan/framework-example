import React from 'react';
import styles from './styles.module.css'
import Image from "next/image";
import logo from '/public/statics/images/logo.svg';

export const Navbar = () => {
    return (
        <div className={styles.main}>
            <div className={styles.contImage}>
                <Image
                    src={logo}
                    alt='logo'
                />
            </div>
        </div>
    );
};
