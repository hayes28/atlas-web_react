import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: '#fff',
        borderBottom: '3px solid #00003c',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        padding: '0.5rem 1rem',
        alignItems: 'center',
    },
    appLogo: {
        height: '12rem',
        pointerEvents: 'none',
        marginRight: '1rem',
    },
    appTitle: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontSize: '3rem',
        fontWeight: 'bold',
        marginRight: 'auto',
        color: '#00003C',
    },
});

function Header() {
    return (
        <div className={`header ${css(styles.appHeader)}`} >
            <img src={logo} className={`logo ${css(styles.appLogo)}`} alt="logo" />
            <h1 className={`title ${css(styles.appTitle)}`}>School dashboard</h1>
        </div>
    );
}

export default Header;
