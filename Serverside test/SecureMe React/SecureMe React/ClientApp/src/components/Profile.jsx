import React from 'react'
import logo from '../assets/Logo.svg';
import Help from '../assets/help.svg';

class Login extends React.Component {
    render() {
        return (


            <div>
                <nav id="nav">
                    <div class="flexbox-nav">
                        <div class="placement-nav">
                            <img class="placement-nav-logo" src={logo} />
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <input id="auth" class="navbtn navbtn1" type="button" value="Authenticate" />
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <input class="navbtn" type="button" value="Profile Settings" />
                        </div>
                        <div class="placement-nav placement-nav-btn" type="button">
                            <input class="navbtn navbtn2" type="button" value="Add Password" />
                        </div>
                        <div class="placement-nav placement-nav-btn">
                            <input class="navbtn navbtn3" type="button" value="Log out" />
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
                                    <img id="helpimg" src={Help}/>
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
                    <div id="profileset-submit"><p>Save Changes</p></div>
                </div>
            </div>
            
            );
    }
}
export default Login