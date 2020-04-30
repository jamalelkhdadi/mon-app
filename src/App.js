import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
        <h2>Content</h2>
        <p>This is the content!!!</p>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code><h1>Tutorials</h1></code> and Exemple.
        </p>
        <a
          className="App-link"
          href="admin tutorials/index.html"
          target="_top"
          rel="noopener noreferrer"
        >
          <button>Get Started</button>
        </a>
      </div>
    );
  }
}
export default App;
