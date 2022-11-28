import React from 'react';
import {Navbar, Sidenav} from "../../components";

export const NavigationLayout = ({children}) => {
    return (
        <div>
            <Navbar />

            <div>
                <Sidenav />
                {children}
            </div>
        </div>
    );
};
