import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class ForgotPass extends React.Component {
    render() {
        return (
            
            
            <div id="login-main">
                <div>
                    <div>
                        <Link to="/"><img id="login-logo" src={logo} /></Link>
                    </div>
                        <div id="login-title">~ Your one secure way to everything ~</div>
                    <div class="forgotpassbox">
                            <div id="boxtitle">Recover Password</div>
                            <div class="formtitles formtitles1"></div>
                            <div id="formsandtitles">
                                <div class="formtitles">E-mail</div>
                                <input class="loginforms" type="text"/>
                                <input class="loginsubmit Createsubmit" type="submit" value="Login" />
                            </div>

                        </div>
                </div>
            </div>
            
            );
    }
}
export default ForgotPass