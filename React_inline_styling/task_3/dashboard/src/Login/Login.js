import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';

const styles = StyleSheet.create({
    Login: {
        margin: '30px 30px auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
    },
    form: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        display: 'flex',
        flexDirection: 'row',
        fontWeight: '400',
        fontSize: '1.2rem',
        '@media screen and (max-width: 900px)': {
            flexDirection: 'column',
        },
    },
    input: {
        fontFamily: "'Galano Grotesque Alt', sans-serif",
        border: 'none',
        outline: 'none',
    },
    button: {
        maxWidth: '40px',
        color: 'black',
        border: '2px solid #ffc107',
        borderRadius: '3px',
        backgroundColor: '#fff',
        cursor: 'pointer',
        textAlign: 'center',
        outline: 'none',
        boxShadow: 'none',
        padding: '0.2rem',
        transition: 'background-color 0.3s ease',

        ':hover': {
            backgroundColor: '#ffc107',
        },
    },
    label: {
        display: 'flex',
        flexDirection: 'row !important',
    },
});

const Login = () => (
    <>
        <BodySectionWithMarginBottom title='Log in to continue'>
            <div className={`Login ${css(styles.Login)}`}>
                <p>Login to access the full dashboard</p>
                <form className={css(styles.form)}>
                    <div className={`label ${css(styles.label)}`}>
                        <label htmlFor='email' >Email: </label>
                        <input className={css(styles.input)} type='email' name='email' id='email' autoComplete='email'></input>
                    </div>
                    <div className={`label ${css(styles.label)}`}>
                        <label htmlFor='password' >Password: </label>
                        <input className={css(styles.input)} type='password' name='password' id='password' autoComplete='true'></input>
                    </div>
                    <button className={`button ${css(styles.button)}`}>OK</button>
                </form>
            </div>
        </BodySectionWithMarginBottom>
    </>
);


export default Login;
