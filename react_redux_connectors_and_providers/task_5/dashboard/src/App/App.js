import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import SchoolNews from '../SchoolNews/SchoolNews';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';
import { Map } from 'immutable';
import {
  loginRequest,
  displayNotificationDrawer,
  hideNotificationDrawer,
  logout,
} from '../actions/uiActionCreators';
import { bindActionCreators } from 'redux';
import { fetchNotifications } from '../actions/notificationActionCreators';


const styles = StyleSheet.create({

  header: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    borderBottom: '5px solid #00003C',
    backgroundColor: '#fefae8',
  },

  body: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    padding: '1rem',
    minHeight: 'calc(100vh - 190px)',
  },

  footer: {
    borderTop: '5px solid #00003C',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});

const listCourses = [
  { id: 1, name: 'ES6', credit: 60 },
  { id: 2, name: 'Webpack', credit: 20 },
  { id: 3, name: 'React', credit: 40 },
];

export class App extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
    this.props.fetchNotifications();
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleLogin = (email, password) => {
    // Dispatch the loginRequest action creator
    this.props.login(email, password);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logout();
    }
  }


  render() {
    // console.log(this.props);
    const { isLoggedIn, displayDrawer, displayNotificationDrawer, hideNotificationDrawer } = this.props;

    return (
      <>
        <Notifications
          displayDrawer={displayDrawer}
          handleDisplayDrawer={displayNotificationDrawer}
          handleHideDrawer={hideNotificationDrawer}
        />
        <div className="App">
          <div className={`App-header ${css(styles.header)}`} data-testid="app-header">
            <Header />
          </div>
          <div className={`App-body ${css(styles.body)}`}>
            {isLoggedIn ? <CourseList listCourses={listCourses} /> : <Login onLogin={this.props.login} />}
            <BodySection title='News from the School'>
              <SchoolNews /> {/* Use SchoolNews component here */}
            </BodySection>
          </div>
          <Footer className={`App-footer ${css(styles.footer)}`} />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  logout: PropTypes.func,
  login: PropTypes.func,
  markAsRead: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
};

export const mapStateToProps = (state = { uiReducer: new Map() }) => {
  const uiReducer = state.ui || new Map();
  const isLoggedIn = uiReducer.get('isUserLoggedIn', false);
  const displayDrawer = uiReducer.get('isNotificationDrawerVisible', false);

  return {
    isLoggedIn,
    displayDrawer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    displayNotificationDrawer,
    hideNotificationDrawer,
    logout,
    login: loginRequest,
    // Assuming fetchNotifications is an action you have
    fetchNotifications,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
