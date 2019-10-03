import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import Schedule from './pages/Schedule'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        NHL Schedules
      </header>
      <Schedule/>
    </div>
  );
}

export default App;
