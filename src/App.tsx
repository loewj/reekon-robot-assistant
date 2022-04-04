import React from 'react';
import logo from './logo.png';
import './App.css';
import {RobotMap} from "./components/RobotMap/RobotMap";
import {Nav} from "./components/Nav/Nav";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App" data-testid="app">
        <ToastContainer />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav/>
        <RobotMap coords={{lat: 42.382529, lon: -71.059781}} />
    </div>
  );
}

export default App;
