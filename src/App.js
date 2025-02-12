// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import './styles.css';

const App = () => {
  return (
    <Router>
      <div>
        <h1>
        <nav className="navbar">
          <ul className="navbar-list">
              <Link to="/">Home</Link>
              <Link to="/about">About</Link>
          </ul>
        </nav>
        </h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
