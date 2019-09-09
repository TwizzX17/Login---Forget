import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    render() {
        return (
            
            
            <div id="login-main">
                <div>
                    <div>
                        <img id="login-logo" src={logo}/>
                    </div>
                        <div id="login-title">~ Your one secure way to everything ~</div>
                        <div id="loginbox">
                            <div id="boxtitle">Sign In</div>
                        <div class="formtitles formtitles1">Infomation DIV</div>
                            <div id="formsandtitles">
                                <div class="formtitles">E-mail</div>
                                <input class="loginforms" type="text"/>
                            <div class="formtitles formtitles2">Password</div>
                            <input class="loginforms" type="Password" />
                            <div id="login-options">
                                <Link to="/forgot-pass"><div id="forgotpass">Forgot password?</div></Link>
                                <Link to="/create-account"><div id="createaccount">Need an Account?</div></Link>
                            </div>
                            <input class="loginsubmit" type="submit" value="Login" />
                            </div>





                        {/*


                            <div id="boxtitle">2FA</div>
                            <div>
                                <img style="display: block; width: 135px; height: 135px; margin-left: auto; margin-right: auto;" src="@ViewBag.BarcodeImageUrl" />
                            </div>
                            <div class="formtitles" style="text-align: center; padding-bottom: 17px;">Manual Setup Code : @ViewBag.SetupCode</div>
                            <div>
                                <input type="text" name="CodeDigit" class="loginforms" />
                                <input type="submit" class="loginsubmit" />
                            </div>
                        */}
                        </div>
                </div>
            </div>
            
            );
    }
}
export default Login