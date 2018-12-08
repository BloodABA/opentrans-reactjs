import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './Components/Header';
import './App.scss';

class App extends Component {
  render() {
    let menuItems = [
      {title : 'Home', isActive : true},
      {title : 'Project', isActive : false},
      {title : 'Vote', isActive : false},
      {title : 'MyPage', isActive : false}
    ];
    return (
      <div className="App">
        <Header menuItems={menuItems}>
        </Header>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p className="title">
            Hello World! 
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
}

export default App;
