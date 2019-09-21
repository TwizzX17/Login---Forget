import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class NewPass extends React.Component {
    constructor() {
        super();
        this.state = {
            NewPass: "",

        };
    }

    SubmitInput = () => {
        const Pass = document.getElementById("NewPass").value;
        let valid = 0;

        if (Pass.length === null) {
            const errorphrase = "Email field cannot be empty";
            valid = 1;
        } else {
            const confirmation = "";
        }

        if (valid === 0) {

            fetch('/ForgotPassword/Forgot', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Id: 0, Email: "", MasterPass: Pass }),
            }).then(this._checkStatus)
                .then(
                    response => response.json(),
                    error => alert(error)
                )
                .then((response) => {
                    console.log(response)
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
                                <div class="formtitles">Enter new password</div>
                                <input id="NewPass" class="loginforms" type="text" />
                                <input onClick={this.SubmitInput} className="loginsubmit Createsubmit" type="submit" value="Change Password" />
                            </div>

                        </div>
                </div>
            </div>
            
            );
    }
}
export default NewPass