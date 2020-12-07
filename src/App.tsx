
import React from 'react';
import logo from './assets/images/logo_small_rust.svg';
import './App.css';
import NavBar from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi there! BeWell app site coming soon
        </p>
      </header>
    </div>
  );
}

export default App;
