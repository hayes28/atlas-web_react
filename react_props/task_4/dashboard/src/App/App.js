import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

function App({ isLoggedIn }) {
  return (
    <>
    <div className="App-header-wrapper">
      <Header />
      <div className="App-menu">
        <Notifications />
      </div>
      </div>
      <div className="App">
        {isLoggedIn ? <CourseList /> : <Login />}
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
};

App.defaultProps = {
  isLoggedIn: false
};

export default App;
