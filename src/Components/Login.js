import React, { Component } from 'react';
import './Login.scss';
import $ from 'jquery'
import bgImg from '../img/loginBg.png';

import API from '../API'

class Login extends Component {
   constructor(props) {
      super(props);
      this.state = {
         mode: 'login',
         username: '',
         password: '',
         passwordRepeat: '',
         registerStep: 1,
         fullname: '',
         nickname: '',
         email: '',
         contract: ''
      }
   }

   login = async () => {
      const username = this.state.username
      const password = this.state.password
      var res = await API.request("login", {}, {
         username: username,
         password: password
      })
      if (res) {
         window.location.href = "/";
      }
   }

   toggleMode = () => {
      this.setState({ mode: this.state.mode === 'reg' ? 'login' : 'reg' });
   }

   handleNameInput = (e) => {
      this.setState({ username: e.target.value });
   }

   handlePasswordInput = (e) => {
      this.setState({ password: e.target.value });
   }

   handlePasswordRepeatInput = (e) => {
      this.setState({ passwordRepeat: e.target.value });
   }

   handleFullnameInput = (e) => {
      this.setState({ fullname: e.target.value });
   }

   handleNicknameInput = (e) => {
      this.setState({ nickname: e.target.value });
   }

   handleEmailInput = (e) => {
      this.setState({ email: e.target.value });
   }

   handleContractInput = (e) => {
      this.setState({ contract: e.target.value });
   }


   componentDidMount() {
      $(".input input").focus(function () {

         $(this).parent(".input").each(function () {
            $("label", this).css({
               "line-height": "18px",
               "font-size": "18px",
               "font-weight": "100",
               "top": "0px"
            })
            $(".spin", this).css({
               "width": "100%"
            })
         });
      }).blur(function () {
         $(".spin").css({
            "width": "0px"
         })
         if ($(this).val() == "") {
            $(this).parent(".input").each(function () {
               $("label", this).css({
                  "line-height": "60px",
                  "font-size": "24px",
                  "font-weight": "300",
                  "top": "10px"
               })
            });

         }
      });

      $(".button").click(function (e) {
         var pX = e.pageX,
            pY = e.pageY,
            oX = parseInt($(this).offset().left),
            oY = parseInt($(this).offset().top);

         $(this).append('<span class="click-efect x-' + oX + ' y-' + oY + '" style="margin-left:' + (pX - oX) + 'px;margin-top:' + (pY - oY) + 'px;"></span>')
         $('.x-' + oX + '.y-' + oY + '').animate({
            "width": "500px",
            "height": "500px",
            "top": "-250px",
            "left": "-250px",

         }, 600);
         $("button", this).addClass('active');
      })

      $(".alt-2").click(function () {
         if (!$(this).hasClass('material-button')) {
            $(".shape").css({
               "width": "100%",
               "height": "100%",
               "transform": "rotate(0deg)"
            })

            setTimeout(function () {
               $(".overbox").css({
                  "overflow": "initial"
               })
            }, 600)

            $(this).animate({
               "width": "90px",
               "height": "90px"
            }, 500, function () {
               $(".box").removeClass("back");

               $(this).removeClass('active')
            });

            $(".overbox .title").fadeOut(300);
            $(".overbox .input").fadeOut(300);
            $(".overbox .button").fadeOut(300);

            $(".alt-2").addClass('material-buton');
         }

      })

      $(".material-button").click(function () {

         if ($(this).hasClass('material-button')) {
            setTimeout(function () {
               $(".overbox").css({
                  "overflow": "hidden"
               })
               $(".box").addClass("back");
            }, 200)
            $(this).addClass('active').animate({
               "width": "700px",
               "height": "700px"
            });

            setTimeout(function () {
               $(".shape").css({
                  "width": "50%",
                  "height": "50%",
                  "transform": "rotate(45deg)"
               })

               $(".overbox .title").fadeIn(300);
               $(".overbox .input").fadeIn(300);
               $(".overbox .button").fadeIn(300);
            }, 700)

            $(this).removeClass('material-button');

         }

         if ($(".alt-2").hasClass('material-buton')) {
            $(".alt-2").removeClass('material-buton');
            $(".alt-2").addClass('material-button');
         }

      });
   }
   componentWillUnmount() {
   }

   render() {
      const template = (
         <div className="materialContainer">
            <div className="box">
               <div className="title">LOGIN</div>
               <div className="input">
                  <label htmlFor="name">Username</label>
                  <input type="text" name="name" id="name" onChange={this.handleNameInput} />
                  <span className="spin"></span>
               </div>
               <div className="input">
                  <label htmlFor="pass">Password</label>
                  <input type="password" name="pass" id="pass" onChange={this.handlePasswordInput} />
                  <span className="spin"></span>
               </div>

               <div className="button login">
                  <button onClick={this.login}><span>LOGIN</span> <span className="fa fa-check">✔</span></button>
               </div>

               <a href="" className="pass-forgot">Forgot your password?</a>

            </div>

            <div className="overbox">
               <div className="material-button alt-2" onClick={this.toggleMode}>
                  <span className="shape"></span>
               </div>

               <div className="title">REGISTER</div>
               {this.state.registerStep === 1 ? (
                  <React.Fragment>
                     <div className="input">
                        <label htmlFor="regname">Username</label>
                        <input type="text" name="regname" id="regname" onChange={this.handleNameInput} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="regpass">Password</label>
                        <input type="password" name="regpass" id="regpass" onChange={this.handlePasswordInput} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="reregpass">Repeat Password</label>
                        <input type="password" name="reregpass" id="reregpass" onChange={this.handlePasswordRepeatInput} />
                        <span className="spin"></span>
                     </div>
                  </React.Fragment>
               ) : (
                  <React.Fragment>
                     <div className="input">
                        <label htmlFor="fullname">Full Name</label>
                        <input type="text" name="fullname" id="fullname" onChange={this.handleFullnameInput} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="nickname">Nick Name</label>
                        <input type="text" name="nickname" id="nickname" onChange={this.handleNicknameInput} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" id="email" onChange={this.handleEmailInput} />
                        <span className="spin"></span>
                     </div>

                     <div className="input">
                        <label htmlFor="contract">Contract Address</label>
                        <input type="text" name="contract" id="contract" onChange={this.handleContractInput} />
                        <span className="spin"></span>
                     </div>
                  </React.Fragment>
               )}

               <div className="button">
                  <button onClick={()=> this.setState({registerStep: 2})}><span>NEXT</span></button>
               </div>
            </div>
         </div>
      )
      return (
         <React.Fragment>
            <div className="Login" style={{ backgroundImage: `url(${bgImg})` }}>
               {template}
            </div>
         </React.Fragment>
      )
   }
}

export default Login;