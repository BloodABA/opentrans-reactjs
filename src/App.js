import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Project from './Components/Project';
import ProjectView from './Components/ProjectView';
import Login from './Components/Login';
import PageEdit from './Components/PageEdit';

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
        <Route exact path="/" render={() =>
          <Home />
        } />
        <Route exact path="/project" render={({match}) => (
          <Project/>
        )} />
        <Route exact path="/project/:id" render={({match}) => (
          <ProjectView index={match.params.id} />
        )} />
        <Route exact path="/login" render={() =>
          <Login />
        } />
        <Route exact path="/project/:project/:page" render={({match}) => (
          <PageEdit projectId={match.params.project} pageId={match.params.page} />
        )} />
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
