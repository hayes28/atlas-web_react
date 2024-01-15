import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
    AppBody: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        minHeight: '100vh',
    },
    paragraph: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontWeight: '400',
        fontSize: '1.3rem',
        margin: '1rem 2rem 1rem 4rem',
    },
    form: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        fontWeight: '400',
        fontSize: '1.2rem',
        margin: '0.5rem 2rem 1rem 4rem',
    },
    label: {
        marginRight: '1rem',
    },
    inputButton: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        fontWeight: '400',
        fontSize: '1.3rem',
        margin: '0.5rem',
        padding: '0.2rem',
        border: '1px solid #00003C',
        borderRadius: '2px',
        maxWidth: 'calc(50% - 2rem)',
    },
    button: {
        backgroundColor: '#00003C',
        color: 'white',
    },
});

function Login() {
    return (
        <>
        <div className={css(styles.AppBody)}>
            <p className={css(styles.paragraph)}>Login to access the full dashboard</p>
            <form className={css(styles.form)}>
                <label className={css(styles.label)} htmlFor="email">Email: </label>
                <input className={css(styles.inputButton)} type="email" id="email" name="email" />
                <label className={css(styles
                    .label)} htmlFor="password">Password: </label>
                <input className={css(styles.inputButton)} type="password" id="password" name="password" />
                <button className={css(styles.inputButton, styles.button)}>OK</button>
            </form>
        </div>
        </>
    );
}

export default Login;
