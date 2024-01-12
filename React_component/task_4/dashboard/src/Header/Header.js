import React from 'react';
import logo from '../assets/atlas_logo.png';
import './Header.css';

function Header() {
    return (
            <header className="App-header">
                <img src={logo} className="atlas_logo" alt="logo" />
                <h1>School dashboard</h1>
            </header>
    );
}

export default Header;
