import React from 'react';
import styles from './styles.module.css';
import Link from "next/link";
import {SidenavOptions} from "../../../data";

export const Sidenav = () => {
    return (
        <ul className={styles.main}>
            {
                SidenavOptions.map(el => (
                    <li
                        key={el.title}
                    >
                        <Link href={el.route}>
                            {el.content}
                        </Link>
                    </li>
                ))
            }
        </ul>
    );
};
