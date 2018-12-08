import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Project from './Components/Project';

class App extends Component {
  render() {
    const menuItems = [
      {id: 'project', title : '프로젝트'},
      {id: 'voting', title : '보팅'},
      {id: 'mypage', title : '마이페이지'}
    ];

    let body = (
      <React.Fragment>
        <Header menuItems={menuItems} currentPage=''>
        </Header>
        <div className="container mt-5 mb-5">
          <Route exact path="/" render={() =>
            <Home />
          } />
          <Route exact path="/project" render={({match}) => (
            <Project query={match.params.query} />
          )} />
        </div>
        <Footer />
      </React.Fragment>
    );

    return (
      <BrowserRouter>
        { body }
      </BrowserRouter>
    );
  }
}

export default App;
