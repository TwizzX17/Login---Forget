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
            openA: false,
            Pemail: "test@gmail.com",
            Pfirstname: "",
            Plastname: "",
            Pcountry: "",
            Pcity: "",
            Pstreet: "",
            Pzip: "",
            Pphone: ""
        };
    }
    //ComponentDidMount will run after we have rendered the site
    componentDidMount() {


        //Get data for our profile states
        fetch(/profile/)
            .then((resp) => resp.json())
            .then(function (data) {
                let info = data.results; //Get the results
                this.setState({ Pemail: info.email });
                this.setState({ Pfirstname: info.firstname });
                this.setState({ Plastname: info.lastname });
                this.setState({ Pcountry: info.country });
                this.setState({ Pcity: info.city });
                this.setState({ Pstreet: info.street });
                this.setState({ Pzip: info.zip });
                this.setState({ Pphone: info.phone });
            })
    }

    onSaveChanges = () => {

        const firstname = document.getElementById("eifirstname");
        const lastname = document.getElementById("eilastname")
        const country = document.getElementById("eicountry")
        const city = document.getElementById("eicity")
        const street = document.getElementById("eistreet")
        const zip = document.getElementById("eizip")
        const phone = document.getElementById("eiphone")
        let validate = 0;
        //Validate length of inputs.
        if (this.state.Pfirstname.length > 30) {
            //error
            firstname.innerHTML = "This field can't be longer than 30 characters";
            validate = 1;
        } else {
            firstname.innerHTML = "";
        }
        if (this.state.Plastname.length > 40) {
            //error
            lastname.innerHTML = "This field can't be longer than 40 characters";
            validate = 1;
        } else {
            lastname.innerHTML = "";
        }
        if (this.state.Pcountry.length > 50) {
            //error
            country.innerHTML = "This field can't be longer than 50 characters";
            validate = 1;
        } else {
            country.innerHTML = "";
        }
        if (this.state.Pcity.length > 80) {
            //error
            city.innerHTML = "This field can't be longer than 80 characters";
            validate = 1;
        } else {
            city.innerHTML = "";
        }
        if (this.state.Pstreet.length > 80) {
            //error
            street.innerHTML = "This field can't be longer than 80 characters";
            validate = 1;
        } else {
            street.innerHTML = "";
        }
        if (this.state.Pzip.length > 10) {
            //error
            zip.innerHTML = "This can't be longer than 10 characters";
            validate = 1;
        } else {
            zip.innerHTML = "";
        }
        if (this.state.Pphone.length > 20) {
            //error
            phone.innerHTML = "This field can't be longer than 20 characters";
            validate = 1;
        } else {
            phone.innerHTML = "";
        }





        if (validate === 0) {
            //if all states are ok, we get here
            //Fetch post to server
            fetch('/Profile/submitdata', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    Email: this.state.Pemail, //50
                    FirstName: this.state.Pfirstname,//30
                    LastName: this.state.Plastname,//40
                    Country: this.state.Pcountry,//50
                    City: this.state.Pcity,//80
                    Street: this.state.Pstreet,//80
                    Zip: this.state.Pzip,//10
                    Phone: this.state.Pphone//
                }),
                })
                .then(response => response.json()) // response.json() returns a promise
                .then((response) => {
                    console.log(response)
                });
        }
            
        



        
    }

    handleChangeFirstname = (event) => {
        this.setState({ Pfirstname: event.target.value });
    }
    handleChangeLastname = (event) => {
        this.setState({ Plastname: event.target.value });
    }
    handleChangeCountry = (event) => {
        this.setState({ Pcountry: event.target.value });
    }
    handleChangeCity = (event) => {
        this.setState({ Pcity: event.target.value });
    }
    handleChangeStreet = (event) => {
        this.setState({ Pstreet: event.target.value });
    }
    handleChangeZip = (event) => {
        this.setState({ Pzip: event.target.value });
    }
    handleChangePhone = (event) => {
        this.setState({ Pphone: event.target.value });
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

    onCloseAddPasswordO = () => {
        this.setState({ openP: false });
    }

    onCloseAddPassword = () => {
        const feedback = "This field cannot be empty";
        const lvalue = document.getElementById("LabelId").value;
        const uvalue = document.getElementById("DomaneId").value;
        var cvalue = document.getElementById("CustomPassword").value;
        var valid1 = 0;
        var valid2 = 0;
        var valid3 = 0;
        var labelfeedback = document.getElementById("Lfeedback");
        var domanefeedback = document.getElementById("Dfeedback");
        var custompassfeedback = document.getElementById("Cfeedback");

        if (lvalue === "") {
            labelfeedback.innerHTML = feedback;
            valid1 = 1;
        } else {
            labelfeedback.innerHTML = "";
        }
        if (uvalue === "") {
            domanefeedback.innerHTML = feedback;
            valid2 = 1;
        } else {
            domanefeedback.innerHTML = "";
        }
        if (cvalue.length > 0 && cvalue.length <= 8) {
            custompassfeedback.innerHTML = "This field cannot be less than 8 characters";
            valid3 = 1;
        } else {
            custompassfeedback.innerHTML = "";

        }
        if (valid1 === 0 && valid2 === 0 && valid3 === 0) {
            this.setState({ openP: false });
            fetch('/dashboard/add-password', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ label: lvalue, url: uvalue, custompass: cvalue }),
            })
                .then(response => response.json()) // response.json() returns a promise
                .then((response) => {
                    console.log(response)
                });
        }


    }

    onOpenAuthenticate = () => {
        this.setState({ openA: true });
    }

    onCloseAuthenticateO = () => {
        this.setState({ openA: false });
    }

    onCloseAuthenticate = () => {
        const feedback = "This field cannot be empty";
        const avalue = document.getElementById("AuthenticateCode").value;
        var valid1 = 0;
        var Authinput = document.getElementById("authfeedback");
        if (avalue === "") {
            Authinput.innerHTML = feedback;
            valid1 = 1;
        } else {
            Authinput.innerHTML = "";
        }
        if (valid1 === 0) {
            this.setState({ openA: false });
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
                                contentLabel="Authentication"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                shouldCloseOnOverlayClick={true}
                                onRequestClose={this.onCloseAuthenticateO}>

                                <div class="Addpasswordcontent">
                                    <h1>Two factor authentication</h1>
                                    <p>Enter code to confirm:</p>
                                    <p className="error" id="authfeedback"></p>
                                    <input id="AuthenticateCode" type="text" />
                                    <button onClick={this.onCloseAuthenticate}>Generate Password</button>
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
                                contentLabel="AddPasswordModal"
                                className="AddPasswordBox"
                                overlayClassName="PaswordBoxOverlay"
                                onRequestClose={this.onCloseAddPasswordO}>

                                <div class="Addpasswordcontent">
                                    <h1>Enter the information for your site in the fields below - then click generate!</h1>
                                    <p>Label - E. G. Facebook John</p>
                                    <p id="Lfeedback" className="error"></p>
                                    <input id="LabelId" type="text" />
                                    <p>Url - E. g. https://www.facebook.com</p>
                                    <p id="Dfeedback" className="error"></p>
                                    <input id="DomaneId" type="text" />
                                    <p>Custom password (Optional)</p>
                                    <p id="Cfeedback" className="error"></p>
                                    <input id="CustomPassword" type="password" />
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
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">E-mail*</h1>
                                    <p id="eiemail" className="error"></p>
                                </div>
                                <input id="iemail" class="profile-set-input" type="text" value={this.state.Pemail} disabled />
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">First Name</h1>
                                    <p id="eifirstname" className="error"></p>
                                </div>
                                <input id="ifirstname" class="profile-set-input" type="text" value={this.state.Pfirstname} onChange={this.handleChangeFirstname} />
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">Last Name</h1>
                                    <p id="eilastname" className="error"></p>
                                </div>
                                <input id="ilastname" class="profile-set-input" type="text" value={this.state.Plastname} onChange={this.handleChangeLastname}/>
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">Country</h1>
                                    <p id="eicountry" className="error"></p>
                                </div>
                                <input id="icountry" class="profile-set-input" type="text" value={this.state.Pcountry} onChange={this.handleChangeCountry}/>
                            </div>
                        </div>
                        <div class="profile-flexitem">
                            <input type="button" id="premiummember" value="Premium Member"/>
                            <div>
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">City</h1>
                                    <p id="eicity" className="error"></p>
                                </div>
                                <input id="icity" class="profile-set-input" type="text" value={this.state.Pcity} onChange={this.handleChangeCity} />
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">Street</h1>
                                    <p id="eistreet" className="error"></p>
                                </div>
                                <input id="istreet" class="profile-set-input" type="text" value={this.state.Pstreet} onChange={this.handleChangeStreet}/>
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">Zip</h1>
                                    <p id="eizip" className="error"></p>
                                </div>
                                <input id="izip" class="profile-set-input" type="text" value={this.state.Pzip} onChange={this.handleChangeZip}/>
                                <div className="profile-item-titles-flex">
                                    <h1 class="profile-item-titles">Phone</h1>
                                    <p id="eiphone" className="error"></p>
                                </div>
                                <input id="iphone" class="profile-set-input" type="number" value={this.state.Pphone} onChange={this.handleChangePhone}/>
                            </div>
                        </div>
                    </div>
                    <input id="profileset-submit" type="button" value="Save Changes" onClick={this.onSaveChanges}/>
                </div>
            </div>
            
            );
    }
}
export default Login