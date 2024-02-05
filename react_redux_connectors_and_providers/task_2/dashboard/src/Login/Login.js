import { StyleSheet, css } from 'aphrodite';
import React from 'react';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import PropsTypes from 'prop-types';
import { connect } from 'react-redux';
import { onLogin, loginRequest } from '../actions/uiActionCreators';
import { Map } from 'immutable';
import { bindActionCreators } from 'redux';

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


export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };
    }

    handleLoginSubmit = (e) => {
        e.preventDefault();
        // Call the loginRequest action creator with email and password
        this.props.onLogin(this.state.email, this.state.password);
    }

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value }, this.validateForm);
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value }, this.validateForm);
    }

    validateForm = () => {
        const { email, password } = this.state;
        const enableSubmit = email.length > 0 && password.length > 0;
        this.setState({ enableSubmit: enableSubmit });
    }

    render() {
        const { email, password, enableSubmit } = this.state;
        return (
            <>
                <BodySectionWithMarginBottom title='Log in to continue'>
                    <div className={`Login ${css(styles.Login)}`}>
                        <p>Login to access the full dashboard</p>
                        <form className={css(styles.form)} onSubmit={this.handleLoginSubmit}>
                            <div className={`label ${css(styles.label)}`}>
                                <label htmlFor='email' >Email: </label>
                                <input
                                    className={css(styles.input)}
                                    type='email'
                                    name='email'
                                    id='email'
                                    autoComplete='email'
                                    value={email}
                                    onChange={this.handleEmailChange}
                                />
                            </div>
                            <div className={`label ${css(styles.label)}`}>
                                <label htmlFor='password' >Password: </label>
                                <input
                                    className={css(styles.input)}
                                    type='password'
                                    name='password'
                                    id='password'
                                    autoComplete='current-password'
                                    value={password}
                                    onChange={this.handlePasswordChange}
                                />
                            </div>
                            <input
                                type='submit'
                                value='OK'
                                className={`button ${css(styles.button)}`}
                                disabled={!enableSubmit}
                            />
                        </form>
                    </div>
                </BodySectionWithMarginBottom>
            </>
        );
    }
}

Login.propTypes = {
    onLogin: PropsTypes.func,
};

Login.defaultProps = {
    onLogin: () => {},
};

const mapStateToProps = (state) => {
    console.log(state);
    const uiReducer = state.uiReducer || new Map();
    const isLoggedIn = uiReducer.get('isUserLoggedIn', false);
    return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(loginRequest(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
