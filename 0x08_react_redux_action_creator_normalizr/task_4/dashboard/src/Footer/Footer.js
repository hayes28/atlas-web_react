import React from 'react';
import { getFooterCopy, getFullYear } from "../utils/utils";
import AppContext from '../App/AppContext';
import './Footer.css';

function Footer() {
    const { user } = React.useContext(AppContext);
    return (
        <footer className="App-footer">
            <p>
                Copyright {getFullYear()} - {getFooterCopy(true)}
                {user.isLoggedIn && (
                    <a href="#contact">Contact us</a>
                )}
            </p>
        </footer>
    );
}

export default Footer;
