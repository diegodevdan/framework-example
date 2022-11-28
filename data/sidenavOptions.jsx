import Account from '../public/statics/images/account.png';
import Services from '../public/statics/images/services.png';
import Shares from '../public/statics/images/shares.png';
import Warnings from '../public/statics/images/warnings.png';
import Image from "next/image";

export const SidenavOptions = [
    {
        title: 'Account',
        route: '/',
        content:
            <Image
                src={Account}
                alt='logo'
            />
    },
    {
        title: 'Warnings',
        route: '/warnings',
        content:
            <Image
                src={Warnings}
                alt='logo'
            />
    },
    {
        title: 'Services',
        route: '/services',
        content:
            <Image
                src={Services}
                alt='logo'
            />
    },
    {
        title: 'Shares',
        route: '/shares',
        content:
            <Image
                src={Shares}
                alt='logo'
            />
    },
]
