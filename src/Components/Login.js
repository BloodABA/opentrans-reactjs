import React, { Component } from 'react';
import './Login.scss';

import bgImg from '../img/loginBg.png';

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
        /*
        const template = (
            <div className="loginContainer">
                <div className="loginBg">
                </div>
                <div className="loginForm">
                    <div className="loginButton">
                        Hello World!
                    </div>
                    <form id="login">
                        <input id="loginId" class="form-control form-control-lg" type="text" placeholder="아이디를 입력해주세요." />
                        <input id="loginId" class="form-control form-control-lg" type="password" placeholder="비밀번호" />
                    </form>
                    <div className="loginButton">
                        LOG IN
                    </div>
                </div>
            </div>
        );*/

        const template = (
            <div className="materialContainer">
                <div className="box">
                    <div className="title">LOGIN</div>
                    <div className="input">
                        <label for="name">Username</label>
                        <input type="text" name="name" id="name" />
                        <span className="spin"></span>
                    </div>
                    <div className="input">
                        <label for="pass">Password</label>
                        <input type="password" name="pass" id="pass" />
                        <span className="spin"></span>
                    </div>

                    <div className="button login">
                        <button><span>GO</span> <i className="fa fa-check"></i></button>
                    </div>

                    <a href="" className="pass-forgot">Forgot your password?</a>

                </div>

                <div className="overbox">
                    <div className="material-button alt-2"><span className="shape"></span></div>

                    <div className="title">REGISTER</div>

                    <div className="input">
                        <label for="regname">Username</label>
                        <input type="text" name="regname" id="regname" />
                        <span className="spin"></span>
                    </div>

                    <div className="input">
                        <label for="regpass">Password</label>
                        <input type="password" name="regpass" id="regpass" />
                        <span className="spin"></span>
                    </div>

                    <div className="input">
                        <label for="reregpass">Repeat Password</label>
                        <input type="password" name="reregpass" id="reregpass" />
                        <span className="spin"></span>
                    </div>

                    <div className="button">
                        <button><span>NEXT</span></button>
                    </div>
                </div>
            </div>
        )
        return (
            <React.Fragment>
                <div className="Login" style={{backgroundImage: `url(${bgImg})`}}>
                    {template}
                </div>
            </React.Fragment>
        )
    }
}

export default Login;