import React from 'react';
import { getFooterCopy, getFullYear } from "../utils/utils";
import './Footer.css';
import { connect } from 'react-redux';

function Footer({ user }) { // Destructuring user from props here
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

export const mapStateToProps = (state = { uiReducer: new Map() }) => {
    const uiReducer = state.uiReducer || new Map();
    const isLoggedIn = uiReducer.get('isUserLoggedIn', false);
    return { user: { isLoggedIn } };
}

export default connect(mapStateToProps)(Footer);
