import React, { Component } from 'react';
import './Login.scss';

import bgImg from '../img/loginBg.jpg';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    

    componentDidMount() {

    }
    componentWillUnmount() {
    }
    render() {


        const helloWorld = "Hello World!";
        const template = (
            <div className="loginContainer">
                <div className="loginForm">
                ab
                </div>
            </div>
        );
        return (
            <React.Fragment>
                <div className="Login" style={{background: `url(${bgImg})`}}>
                    <h1>LOGIN</h1>
                    {template}
                </div>
            </React.Fragment>
        )
    }
}

export default Login;