import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            CreateEmail: "",
            CreatePassword: "",
            CreateRPassword: ""
        };
    }



    SubmitInput = () => {
        const Email = document.getElementById("Email").value;
        const Password = document.getElementById("Password").value;
        const RPassword = document.getElementById("RPassword").value;
        let valid = 0;

        if (Email.length === null) {
            const errorphrase = "Email field cannot be empty";
            valid = 0;
        } else {
            const confirmation = "";
        }
        if (Password.length === null) {
            const errorphrase = "Password field cannot be empty";
            valid = 0;
        } else {
            const confirmation = "";
        }
        if (RPassword.length === null) {
            const errorphrase = "Repeat password field cannot be empty";
            valid = 0;
        } else {
            const confirmation = "";
        }
        if (Password !== RPassword) {
            const errorphrase = "The passwords must match";
            valid = 1;
        }
        if (valid === 0) {

            fetch('/AddUser/AddUser', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ Id: 0, Email: Email, MasterPass: Password }),
            })
                .then(response => response.json())
                .then((response) => {
                    console.log(response)
                });

        }
    }


    render() {
        return (
            
            <div id="login-main">
                <div>
                    <div>
                        <Link to="/"><img id="login-logo" src={logo}/></Link>
                    </div>
                        <div id="login-title">~ Your one secure way to everything ~</div>
                        <div id="createacc">
                            <div id="boxtitle">Create Account</div>
                        <div class="formtitles formtitles1"></div>
                            <div id="formsandtitles">
                                <div class="formtitles">E-mail</div>
                            <input id="Email" class="loginforms" type="text"/>
                                <div class="formtitles formtitles2">Password</div>
                            <input id="Password" class="loginforms" type="Password" />
                                <div class="formtitles formtitles2">Confirm Password</div>
                            <input id="RPassword" class="loginforms" type="Password" />
                                
                            <input onClick={this.SubmitInput} className="loginsubmit Createsubmit" type="submit" value="Create Account" />
                            </div>
                        </div>
                </div>
            </div>
            
            );
    }
}
export default Login