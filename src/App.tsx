import React from 'react';
import logo from './logo.png';
import './App.css';
import {RobotMap} from "./components/RobotMap/RobotMap";
import {Nav} from "./components/Nav/Nav";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export enum RobotStatus {
    IDLE = "Idle",
    WORKING = "Working",
    CRASHED = "Crashed"
}

const robots = [
    { lat: 42.382561, lon: -71.059566, name: "Hammer", status: RobotStatus.IDLE},
    { lat: 42.382395, lon: -71.059899, name: "Nail", status: RobotStatus.WORKING },
    { lat: 42.382381, lon: -71.059706, name: "Lug Nut", status: RobotStatus.CRASHED },
]

function App() {
  return (
    <div className="App" data-testid="app">
        <ToastContainer />
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Nav/>
        <RobotMap coords={{lat: 42.382529, lon: -71.059781}} robots={robots} />
    </div>
  );
}

export default App;
