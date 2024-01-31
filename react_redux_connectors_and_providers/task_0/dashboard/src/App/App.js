import React from 'react';
import { connect } from 'react-redux';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySection from '../BodySection/BodySection';
import AppContext from './AppContext';
import SchoolNews from '../SchoolNews/SchoolNews';
import { StyleSheet, css } from 'aphrodite';

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

const listNotifications = [
  { id: 1, type: 'default', value: 'New course available' },
  { id: 2, type: 'urgent', value: 'New resume available' },
  { id: 3, type: 'urgent', html: { __html: '<strong>Urgent requirement</strong> - complete by EOD' } },
];

export class App extends React.Component {
  static contextType = AppContext;
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
    const { displayDrawer, listNotifications, user } = this.state;
    const { isLoggedIn } = this.props;

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
          <div className="App">
            <div className={`App-header ${css(styles.header)}`} data-testid="app-header">
              <Header />
            </div>
            <div className={`App-body ${css(styles.body)}`}>
              {
                isLoggedIn ? (
                  <CourseList listCourses={listCourses} />
                ) : (
                  <Login logIn={this.logIn} />
                )
              }
              <BodySection title='News from the School'>
                <SchoolNews /> {/* Use SchoolNews component here */}
              </BodySection>
            </div>
            <Footer className={`App-footer ${css(styles.footer)}`} />
          </div>
        </>
      </AppContext.Provider>
    );
  }
}

// mapStateToProps
export const mapStateToProps = (state) => ({
  isLoggedIn: state && state.uiReducer && state.uiReducer.isUserLoggedIn,
  displayDrawer: state && state.uiReducer && state.uiReducer.isNotificationDrawerVisible,
});

connect(mapStateToProps)(App);
