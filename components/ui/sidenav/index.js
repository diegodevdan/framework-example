import React from 'react';
import styles from './styles.module.css';
import Link from "next/link";
import {SidenavOptions} from "../../../data";
import {Button, Text} from '@mantine/core';
import {openConfirmModal} from "@mantine/modals";
import Image from "next/image";
import account from '../../../public/statics/images/account.png';

export const Sidenav = () => {

    const openModal = () => openConfirmModal({
        title: 'Account info',
        children: (
            <Image
                src={account}
                alt='account'
            />
        ),
        labels: { confirm: 'Confirm', cancel: 'Cancel' },
        onCancel: () => console.log('Cancel'),
        onConfirm: () => console.log('Confirmed'),
    });

    const handleModal = (comp) => {
        if(comp !== 'Account') return;

        openModal();
    }
    return (
        <ul className={styles.main}>
            <Button onClick={openModal}>Open confirm modal</Button>;
            {
                SidenavOptions.map(el => (
                    <li
                        key={el.title}
                        onClick={() => handleModal(el.title)}
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
