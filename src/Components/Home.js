import React, { Component } from 'react';
import './Home.scss';
import logo from '../logo.svg';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <React.Fragment>
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div style={{height: "1000px"}}>
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
                    </div>
                    </header>
            </React.Fragment>
        )
    }
}


export default Home;
