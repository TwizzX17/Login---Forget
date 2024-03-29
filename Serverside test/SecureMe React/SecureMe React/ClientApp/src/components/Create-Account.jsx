﻿import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';

class CreateAccount extends React.Component {
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

        if (Email.length === 0) {
            document.getElementById("CEerror").innerHTML = "Email field cannot be empty";
            valid = 1;
        } else {
            const confirmation = "";
        }
        if (Password.length === 0) {
            document.getElementById("CPerror").innerHTML = "Password field cannot be empty";
            valid = 1;
        } else {
            const confirmation = "";
        }
        if (RPassword.length === 0) {
            document.getElementById("CPRerror").innerHTML = "Repeat password field cannot be empty";
            valid = 1;
        } else {
            const confirmation = "";
        }
        if (Password !== RPassword) {
            alert("The passwords must match");
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
                .then(
                    response => response.json(),
                    error => {
                        alert(error);
                    }
                )
                .then((response) => {
                    console.log(response)
                    this.props.history.replace('/login');
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
                            <h1 class="formtitles">E-mail</h1>
                            <p id="CEerror" className="error"></p>
                            <input id="Email" class="loginforms" type="text"/>
                            <h1 class="formtitles formtitles2">Password</h1>
                            <p id="CPerror" className="error"></p>
                            <input id="Password" class="loginforms" type="Password" />
                            <h1 class="formtitles formtitles2">Confirm Password</h1>
                            <p id="CPRerror" className="error"></p>
                            <input id="RPassword" class="loginforms" type="Password" />
                                
                            <input onClick={this.SubmitInput} className="loginsubmit Createsubmit" type="submit" value="Create Account" />
                            </div>
                        </div>
                </div>
            </div>
            
            );
    }
}
export default CreateAccount