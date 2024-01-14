import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  app: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  appHeaderWrapper: {
    borderBottom: '5px solid #00003C',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  appMenu: {
    display: 'flex',
    alignItems: 'center',
  },

  bodyStyle: {
    height: '100%',
    margin: '0',
    display: 'flex',
  },

  footerStyle: {
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: '0',
    width: '100%',
  },
});

class App extends React.Component {

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = (event) => {
    if (event.ctrlKey && event.key === 'h') {
      event.preventDefault();
      alert('Logging you out');
      this.props.logOut();
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    const listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 },
    ];

    const listNotifications = [
      { id: 1, type: 'default', value: 'New course available' },
      { id: 2, type: 'urgent', value: 'New resume available' },
      { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
    ];

    return (
      <>
        <div className={css(styles.appHeaderWrapper)}>
          <Header />
          <div className={css(styles.appMenu)}>
            <Notifications listNotifications={listNotifications} />
          </div>
        </div>
        <div className={css(styles.bodyStyle)}>
          {isLoggedIn ? (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={listCourses} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login />
            </BodySectionWithMarginBottom>
          )}

          <BodySection title="News from the School">
            <p>Your random text or content here.</p>
          </BodySection>
        </div>
          <footer className={css(styles.footerStyle)}>
          <Footer />
        </footer>
      </>
    );
  }
}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { },
};

export default App;
