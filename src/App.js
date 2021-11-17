import './App.css';

import React from 'react';
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom';
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Pizza Mind 
      </header>
      <Router>
        <Routes>

          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Quiz/>} />
        
        </Routes>
      </Router>
    </div>
  );
}
export default App; 

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App; */

