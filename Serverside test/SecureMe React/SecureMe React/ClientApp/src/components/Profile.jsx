import React from 'react'
import ReactModal from "react-modal";
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Help from '../assets/help.svg';

class Login extends React.Component {
    constructor() {
        super();
        //Sets  the value false as default
        //state can contain properties
        this.state = {
            openP: false,
            openA: false
        };
    }

    //Sets  the value false as default
    //state can contain properties


    //Changes the propertie in state on an onclick event
    //setState method is best practice because it calls the render method 
    //and all other lifecycle methods.
    onOpenAddPassword = () => {
        this.setState({ openP: true });
        console.log(this.setState)
    }

    onCloseAddPassword = () => {
        this.setState({ openP: false });

        const lvalue = document.getElementById("LabelId").value;
        const uvalue = document.getElementById("DomaneId").value;
        fetch('/dashboard/add-password', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ label: lvalue, url: uvalue }),
        })
            .then(response => response.json()) // response.json() returns a promise
            .then((response) => {
                console.log(response)
            });
    }

    onOpenAuthenticate = () => {
        this.setState({ openA: true });
        console.log(this.setState)
    }

    onCloseAuthenticate = () => {
        this.setState({ openA: false });

        const avalue = document.getElementById("AuthCode").value;
        fetch('/dashboard/2fa', {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ submittednumber: avalue }),
        })
            .then(response => response.json()) // response.json() returns a promise
            .then((response) => {
                console.log(response)
            });
    }
    render() {
        return (


            <div>
                <nav id="nav">
                    <div className="flexbox-nav">
                        <div className="placement-nav">
                            <Link to="/Dashboard"><img className="placement-nav-logo" alt="Logo" src={logo} /></Link>
                        </div>
                        <div className="placement-nav placement-nav-btn">
                            <input id="auth" className="navbtn navbtn1" onClick={this.onOpenAuthenticate} type="button" value="Authenticate" />
                            <ReactModal
                                isOpen={this.state.openA}
                                contentLabel="Minimal Modal Example"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                onRequestClose={this.onCloseAuthenticate}>

                                <div class="Addpasswordcontent">
                                    <h1>Two Factor Authentication</h1>
                                    <p>QR Code</p>
                                    <p>Enter code</p>
                                    <input id="AuthCode" type="text" />
                                    <button onClick={this.onCloseAddPassword}>Generate Password</button>
                                </div>

                            </ReactModal>
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <Link to="/Dashboard/Profile"><input class="navbtn" type="button" value="Profile Settings" /></Link>
                        </div>
                        <div className="PasswordTar" id="AddPasswordDiv" class="placement-nav placement-nav-btn" type="button">
                            <input class="navbtn navbtn2" onClick={this.onOpenAddPassword} type="button" value="Add Password" />
                            <ReactModal
                                isOpen={this.state.openP}
                                contentLabel="Minimal Modal Example"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                onRequestClose={this.onCloseAddPassword}>

                                <div class="Addpasswordcontent">
                                    <h1>Enter the information for your site in the fields below - then click generate!</h1>
                                    <p>Label - E. G. Facebook John</p>
                                    <input id="LabelId" type="text" />
                                    <p>Url - E. g. https://www.facebook.com</p>
                                    <input id="DomaneId" type="text" />
                                    <button onClick={this.onCloseAddPassword}>Generate Password</button>
                                </div>

                            </ReactModal>
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <Link to="/Logout"><input class="navbtn navbtn3" type="button" value="Log out" /></Link>
                        </div>
                    </div>
                </nav>

                <div id="profileset-main">
                    <div id="profileset-title">Change Profile Settings</div>
                    <div id="profile-flexcontainer">
                        <div class="profile-flexitem">
                            <div class="profile-set-structure">
                                <div class="titlecontain">
                                    <div class="profile-item-titles">Account Plan</div>
                                    <img id="helpimg" alt="Help" src={Help}/>
                                </div>
                                <input class="profile-set-input" type="text" placeholder="Unauthorized"/>
                            </div>
                            <div>
                                <div class="profile-item-titles">E-mail*</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">First Name</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">Last Name</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">Country</div>
                                <input class="profile-set-input" type="text"/>
                            </div>
                        </div>
                        <div class="profile-flexitem">
                            <input type="button" id="premiummember" value="Premium Member"/>
                            <div>
                                <div class="profile-item-titles">City</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">Street</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">Zip</div>
                                <input class="profile-set-input" type="text"/>
                                <div class="profile-item-titles">Phone</div>
                                <input class="profile-set-input" type="text"/>
                            </div>
                        </div>
                    </div>
                    <input id="profileset-submit" type="button" value="Save Changes"/>
                </div>
            </div>
            
            );
    }
}
export default Login