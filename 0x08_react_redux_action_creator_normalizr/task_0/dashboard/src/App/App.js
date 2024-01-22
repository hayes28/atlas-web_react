import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({

  header: {
    fontFamily: "'Galano Grotesque Alt', sans-serif",
    borderBottom: '5px solid #00003C',
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

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
    // define default state including listNotifications
    this.state = {
      displayDrawer: false,
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      listNotifications: listNotifications,
    };
  }

  // Function to handle displayDrawer state
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  }
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  }

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
      this.logOut();
    }
  }

  logIn = (email, password) => {
    this.setState({ user: { email, password, isLoggedIn: true } });
  }

  logOut = () => {
    this.setState({ user: { email: '', password: '', isLoggedIn: false } });
  }

  markNotificationAsRead = (id) => {
    this.setState({ listNotifications: this.state.listNotifications.filter((notification) => notification.id !== id) });
  }

  render() {
    const { user, displayDrawer, listNotifications } = this.state;

    return (
      <AppContext.Provider value={{ user, logOut: this.logOut, logIn: this.logIn }}>
        <>
          <Notifications
            listNotifications={listNotifications}
            displayDrawer={displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markNotificationAsRead={this.markNotificationAsRead}
            />
          <div className={`App ${css(styles.app)}`}>
            <div className={`App-header ${css(styles.header)}`} data-testid="app-header">
              <Header />
            </div>
            <div className={`App-body ${css(styles.body)}`}>
              {
                user.isLoggedIn ? (
                  <CourseList listCourses={listCourses} />
                ) : (
                  <Login logIn={this.logIn} />
                )
              }
              <BodySection title='News from the School'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim ut tellus elementum sagittis. Ornare arcu odio ut sem nulla. Erat velit scelerisque in dictum non consectetur a erat nam. Commodo ullamcorper a lacus vestibulum sed arcu non. Lacus vel facilisis volutpat est velit egestas dui id. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Sit amet porttitor eget dolor morbi. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque. Aliquam ut porttitor leo a. Tincidunt praesent semper feugiat nibh sed pulvinar. Non nisi est sit amet.</p>
              </BodySection>
            </div>
            <Footer className={`App-footer ${css(styles.footer)}`} />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}


App.propTypes = {
};

App.defaultProps = {
};

export default App;
