import React from 'react';
import logo from './logo.png';
import './App.css';
import {RobotMap} from "./components/RobotMap/RobotMap";
import {Nav} from "./components/Nav/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Nav/>
      <RobotMap coords={{lat: 45.414150, lon:  -110.676818}} robots={[]} />
    </div>
  );
}

export default App;
