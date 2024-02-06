// Import necessary modules and components.
import { StyleSheet, css } from 'aphrodite'; // Aphrodite for CSS in JS styling.
import React from 'react'; // React library to define components.
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'; // A component used as a wrapper with a bottom margin.
import PropsTypes from 'prop-types'; // PropTypes for type-checking props.
import { connect } from 'react-redux'; // Connect function to link component to the Redux store.
import { loginRequest } from '../actions/uiActionCreators'; // Action creator for login requests.
import { Map } from 'immutable'; // Immutable.js Map to handle immutable state in Redux.

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
        // Initialize state with email, password, and whether the submit button is enabled.
        this.state = {
            email: '',
            password: '',
            enableSubmit: false,
        };
    }

    // Handles the login form submission.
    handleLoginSubmit = (e) => {
        e.preventDefault();
        // Dispatches the loginRequest action with the email and password from state.
        this.props.onLogin(this.state.email, this.state.password);
    }

    // Updates the email state when the email input changes.
    handleEmailChange = (e) => {
        this.setState({ email: e.target.value }, this.validateForm);
    }

    // Updates the password state when the password input changes.
    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value }, this.validateForm);
    }

    // Validates the form and enables the submit button if both email and password are entered.
    validateForm = () => {
        const { email, password } = this.state;
        const enableSubmit = email.length > 0 && password.length > 0;
        this.setState({ enableSubmit: enableSubmit });
    }

    render() {
        const { email, password, enableSubmit } = this.state; // Destructuring for easier access to state.
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

// Define PropTypes for type checking.
Login.propTypes = {
    onLogin: PropsTypes.func,
};

// Define default props in case they aren't passed to the component.
Login.defaultProps = {
    onLogin: () => {},
};

const mapStateToProps = (state) => {
    console.log(state);
    const uiReducer = state.ui || new Map();
    const isLoggedIn = uiReducer.get('isUserLoggedIn', false);
    return { isLoggedIn };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password) => dispatch(loginRequest(email, password)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
