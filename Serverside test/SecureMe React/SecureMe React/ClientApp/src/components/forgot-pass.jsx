import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class ForgotPass extends React.Component {
    constructor() {
        super();
        this.state = {
            CreateEmail: "",

        };
    }

    SubmitInput = () => {
        const Email = document.getElementById("Email").value;
        let valid = 0;

        if (Email.length === null) {
            const errorphrase = "Email field cannot be empty";
            valid = 1;
        } else {
            const confirmation = "";
        }

        if (valid === 0) {

            fetch('/ForgotPassword/ForgotPassword', {
                method: "POST",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Id: 0, Email: Email, MasterPass: "DummyPassword" }),
            }).then(this._checkStatus)
                .then(
                    response => response.json(),
                    error => {
                        alert(error) //catching the error
                    }
                )
                .then((response) => {
                    console.log(response)
                    this.props.history.replace('/forgot-pass/NewPass')
                    return Promise.resolve(response);
                });

        }
    }

    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error.reponse = response;
            throw error
        }
    }


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
                                <input id="Email" class="loginforms" type="text" />
                            <input onClick={this.SubmitInput} className="loginsubmit Createsubmit" type="submit" value="Login" />
                            </div>

                        </div>
                </div>
            </div>
            
            );
    }
}
export default ForgotPass