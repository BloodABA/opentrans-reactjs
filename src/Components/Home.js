import React, { Component } from 'react';
import './Home.scss';
import logo from '../img/logo.svg';
import bg from '../img/mainBg.png';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="Home">
                <div className="head" style={{backgroundImage: `url(${bg})`}}>
                </div>
                <div className="homeTitle">
                    블록체인 기반의 형상관리 기술문서 번역 플랫폼
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </div>
        )
    }
}


export default Home;
