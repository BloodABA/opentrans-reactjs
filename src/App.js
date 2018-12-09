import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Project from './Components/Project';
import Login from './Components/Login';

class App extends Component {
  render() {
    const menuItems = [
      {id: 'project', title : '프로젝트'},
      {id: 'voting', title : '보팅'},
      {id: 'mypage', title : '마이페이지'}
    ];

    let body = (
      <div style={{display:"flex", flex: "1 1 auto", flexDirection: "column"}}>
        <Header menuItems={menuItems} currentPage=''>
        </Header>
        <div className="container mt-5 mb-5" style={{flex: "1 1 auto"}}>
          <Route exact path="/" render={() =>
            <Home />
          } />
          <Route exact path="/project" render={({match}) => (
            <Project query={match.params.query} />
          )} />
          <Route exact path="/login" render={() =>
            <Login />
          } />
        </div>
        <Footer />
      </div>
    );

    return (
      <BrowserRouter>
        { body }
      </BrowserRouter>
    );
  }
}

export default App;
