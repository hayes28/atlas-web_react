import React from 'react';
import logo from './atlas_logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="atlas_logo"
          alt="logo"
        />
        <h1>School dashboard</h1>
      </header>

      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" />
        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" />
        <button>OK</button>
      </div>

      <footer className="App-footer">
        <p>Copyright 2020 - holberton School</p>
      </footer>
    </div>
  );
}

export default App;
