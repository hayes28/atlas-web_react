import React from 'react';
import logo from '../assets/atlas_logo.png';
import { StyleSheet, css } from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
    appHeader: {
        backgroundColor: '#fefae8',
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
    logoutSection: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontSize: '1.2rem',
        fontWeight: 'bold',
        marginLeft: 'auto',
        color: '#00003C',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        cursor: 'pointer',
        ':hover': {
            color: '#ffc107',
        },
    },
});

class Header extends React.Component {
    static contextType = AppContext;

    render() {
        const { user = { isLoggedIn: false, email: '' }, logOut = () => { } } = this.context;
        return (
            <div className={`header ${css(styles.appHeader)}`} >
                <img src={logo} className={`logo ${css(styles.appLogo)}`} alt="logo" />
                <h1 className={`title ${css(styles.appTitle)}`}>School dashboard</h1>
                {user.isLoggedIn && (
                    <p id="logoutSection" className={`logoutSection ${css(styles.logoutSection)}`}>
                        Welcome <b>{user.email}</b> <span onClick={logOut}>(logout)</span>
                    </p>
                )}
            </div>
        );
    }
}

export default Header;
