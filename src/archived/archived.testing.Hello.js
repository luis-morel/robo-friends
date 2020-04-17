import React from 'react';
import { Component } from 'react';
import logo from './logo.svg';
// import './App.css';

class Hello extends Component {
    // Add JS Code Here
    render() {
        // Add JS Code Here
        return (
            // Add JSX (React HTML) Code Here
            <div className="App" >
                <div>
                    <h1 className="f1 tc">{this.props.greeting}</h1>
                    <p> Welcome to React!</p>
                </div>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>Edit <code>src/Hello.js</code> and save to reload.</p>
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
    };
};

export default Hello;