import React, { Component } from "react";

//This file will create our login elements, it will be called by "React Router"
class Login extends Component {
  render() {
    return(

      <div id="login-main">
        <div>
            <div>
                <img id="login-logo" src="assets/Logo.svg">
            </div>
            <div id="login-title">~ Your one secure way to everything ~</div>
            <div id="loginbox">
                <div id="boxtitle">Welcome</div>
                <div id="formsandtitles">
                  <div class="formtitles">E-mail</div>
                    <input class="loginforms" type="text">
                    <div style="margin-top: 24px;" class="formtitles">Password</div>
                    <input class="loginforms" type="Password">
                    <div id="forgotpass">Forgot password?</div>
                    <input id="loginsubmit" type="button" value="Login">
                  </div>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
