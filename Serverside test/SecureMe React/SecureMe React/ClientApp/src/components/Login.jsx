import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import AuthService from './AuthService';


class Login extends React.Component {
    constructor() {
        super()
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.Auth = new AuthService();
    }
        

    componentWillMount() {
        if (this.Auth.loggedIn())
            this.props.history.replace('/Dashboard')
            
    }

    handleFormSubmit = () => {
        const user = document.getElementById('lemail').value;
        const pass = document.getElementById('lpass').value;
        this.Auth.login(user, pass)
            .then(res => {
                this.props.history.replace('/Dashboard');
            })
            .catch(err => {
                alert(err);
            })
    }

    render() {
        return (
            
            
            <div id="login-main">
                <div>
                    <div>
                        <Link to="/"><img id="login-logo" alt="Logo" src={logo} /></Link>
                    </div>
                        <div id="login-title">~ Your one secure way to everything ~</div>
                        <div class="loginbox">
                            <div id="boxtitle">Sign In</div>
                        <div class="formtitles formtitles1"></div>
                            <div id="formsandtitles">
                                <div class="formtitles">E-mail</div>
                                <input id="lemail" class="loginforms" type="text"/>
                            <div class="formtitles formtitles2">Password</div>
                            <input id="lpass" class="loginforms" type="Password" />
                            <div id="login-options">
                                <Link to="/forgot-pass"><div id="forgotpass">Forgot password?</div></Link>
                                <Link to="/create-account"><div id="createaccount">Need an Account?</div></Link>
                            </div>
                            <input class="loginsubmit" type="submit" value="Login" onClick={this.handleFormSubmit} />
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