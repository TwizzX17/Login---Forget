import React from 'react'
import ReactModal from "react-modal";
import { Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Edit from '../assets/Edit.svg';
import Help from '../assets/help.svg';
import { ReactComponent as Logo } from '../assets/Delete.svg';
import AuthService from './AuthService';
import withAuth from './withAuth';
import { toClipboard } from 'copee';

var Auth = new AuthService();

class Dashboard extends React.Component {
    constructor() {
        super();
        this.onOpenEdit = this.onOpenEdit.bind(this)
        //Sets  the value false as default
        //state can contain properties
        this.state = {
            openP: false,
            openA: false,
            openE: false,
            openD: false,
            focus: "",
            EditTitle: "",
            Rpassword: "",
            EditDomain: "",
            EditPassword: "",
            AllPass: [],
        };
    }
    componentDidMount() {
        //Get passwords from database
        this.LoadAllPasswords();
    }


    LoadAllPasswords() {
        //Get passwords from database
        fetch('/Distributor/Passwords', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${Auth.getToken()}`,
            }
        }).then(function (response) {
            return response.json();
        }).then((response) => {
            //Delivers the response to the state as a array
            this.setState({ AllPass: response });
        });
    }


    //Will use method from our AuthService Class
    handleLogout() {
        Auth.logout()
        this.props.history.replace('/login');
    }

    onRetrievePassword = (e) => {
        const focusid = e.currentTarget.dataset.id
        this.setState({ focus: focusid });
        const success = toClipboard(this.showRPass(focusid));
    }

    showRPass = (focus) => {
        const password = this.state.AllPass;
        var intfocus = parseInt(focus)
        var SitePass = password.find(item => item.Id === intfocus).PasswordHash;
        return SitePass;
    }


    onOpenDeletePassword = (e) => {
        const focusid = e.currentTarget.dataset.id
        this.setState({ openD: true });
        this.setState({ focus: focusid });
        this.showPassName(focusid);
    }

    onCloseDeletePasswordO = () => {
        this.setState({ openD: false });
    }

    onCloseDeletePassword = () => {
        const passwordid = parseInt(this.state.focus);
        const password = this.state.AllPass;
        const SD = password.find(item => item.Id === passwordid).SiteDescription;
        const SL = password.find(item => item.Id === passwordid).SiteLocation;

            this.setState({ openD: false });
            fetch('/Distributor/DeletePassword', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${Auth.getToken()}`,
                },
                body: JSON.stringify({ Id: passwordid, SiteDescription: SD, SiteLocation: SL }),
            })
                //When the password has been sent, on success, we want refresh the passwords form the database to get updated
                .then(response => response.json()) // response.json() returns a promise
                .then((response) => {
                    console.log(response)
                    this.LoadAllPasswords();
                });
        
    }


    //Changes the property in state on an onclick event
    //setState method is best practice because it calls the render method 
    //and all other lifecycle methods.
    onOpenAddPassword = () => {
        this.setState({ openP: true });
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
            fetch('/Distributor/AddPassword', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${Auth.getToken()}`,
                },
                body: JSON.stringify({ SiteDescription: lvalue, SiteLocation: uvalue, PasswordHash: cvalue }),
            })
                //When the password has been sent, on success, we want refresh the passwords form the database to get updated
                .then(response => response.json()) // response.json() returns a promise
                .then((response) => {
                    console.log(response)
                    this.LoadAllPasswords();
                });
        }        
    }

    onOpenAuthenticate = () => {
        this.setState({ openA: true });
        console.log(this.setState)
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
                body: JSON.stringify({ submittednumber: avalue}),
            })
                .then(response => response.json()) // response.json() returns a promise
                .then((response) => {
                    console.log(response)
                });
        }
    }

    onHoverOpen = () => {
        const helpbox = document.getElementById("helpbox");
        helpbox.style.display ="block";
    }
    onHoverClose = () => {
        const helpbox = document.getElementById("helpbox");
        helpbox.style.display = "none";
    }

    onOpenEdit = (e) => {
        //Focusid defines which password was selected when button was pressed.
        const focusid = e.currentTarget.dataset.id
        this.setState({ openE: true });
        this.setState({ focus: focusid });
        this.showPassName(focusid);
    }

    handleChangeLabel = (event) => {
        this.setState({ EditTitle: event.target.value });
    }

    handleChangeDomain = (event) => {
        this.setState({ EditDomain: event.target.value });
    }

    handleChangeCPass = (event) => {
        this.setState({ EditPassword: event.target.value });
    }

    onCloseEditO = () => {
        this.setState({ openE: false });
    }

    onCloseEdit = () => {
        const focusid = this.state.focus;
        const feedback = "This field cannot be empty";
        const lvalue = document.getElementById("Elabel").value;
        const Dvalue = document.getElementById("Edomane").value;
        const Cvalue = document.getElementById("Ecustompass").value;
        var valid1 = 0;
        var valid2 = 0;
        var valid3 = 0;
        var labelfeedback = document.getElementById("ELfeedback");
        var domanefeedback = document.getElementById("EDfeedback");
        var custompassfeedback = document.getElementById("ECfeedback");

        if (lvalue === "") {
            labelfeedback = document.getElementById("ELfeedback");
            labelfeedback.innerHTML = feedback;
            valid1 = 1;
        } else {
            labelfeedback.innerHTML = "";
        }
        if (Dvalue === "") {
            domanefeedback = document.getElementById("EDfeedback");
            domanefeedback.innerHTML = feedback;
            valid2 = 1;
        } else {
            domanefeedback.innerHTML = "";
        }
        if (Cvalue.length > 0 && Cvalue.length <= 8) {
            custompassfeedback = document.getElementById("ECfeedback");
            custompassfeedback.innerHTML = "This field cannot be less than 8 characters";
            valid3 = 1;
        } else {
            custompassfeedback.innerHTML = "";
        }
        if (valid1 === 0 && valid2 === 0 && valid3 === 0) {

            this.setState({ openE: false });
            fetch('/Distributor/EditPassword', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': `Bearer ${Auth.getToken()}`,
                },
                body: JSON.stringify({ SiteDescription: lvalue, SiteLocation: Dvalue, PasswordHash: Cvalue, Id: focusid }),
            })

                //If successful edit the LI element to update version
                //Will be written when we have response ready at server level
                .then(response => response.json())
                .then((response) => {
                    console.log(response)
                    this.LoadAllPasswords();
                });
        }
    }

    showPassName = (focus) => {
        const password = this.state.AllPass;
        var intfocus = parseInt(focus)
        var SiteName = password.find(item => item.Id === intfocus).SiteDescription;
        var SiteLocation = password.find(item => item.Id === intfocus).SiteLocation;
        var SitePass = password.find(item => item.Id === intfocus).PasswordHash;
        this.setState({ EditTitle: SiteName });
        this.setState({ EditDomain: SiteLocation });
        this.setState({ EditPassword: SitePass });
    }


    filterList = () => {
        var input, filter, table, li, p, i, txtValue;
        input = document.getElementById("search-li");
        filter = input.value.toUpperCase();
        table = document.getElementById("ullist");
        li = table.getElementsByTagName("li")

        for (i = 0; i < li.length; i++) {
            p = li[i].getElementsByTagName("p")[0];
            txtValue = p.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
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
                            <Link to="/Dashboard/Profile"><input class="navbtn" type="button" value="Profile Settings"/></Link>
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
                            <input class="navbtn navbtn3" type="button" onClick={this.handleLogout.bind(this)} value="Log out"/>
                        </div>
                    </div>
                </nav>

                <ReactModal
                    isOpen={this.state.openE}
                    contentLabel="EditPassword"
                    className="AddPasswordBox"
                    overlayClassName="PaswordBoxOverlay"
                    onRequestClose={this.onCloseEditO}>
                    <div class="Addpasswordcontent">
                        <h1>Edit Password - {this.state.EditTitle}</h1>
                        <p>Label</p>
                        <p id="ELfeedback" className="error"></p>
                        <input id="Elabel" type="text" value={this.state.EditTitle} onChange={this.handleChangeLabel} />
                        <p>Domane</p>
                        <p id="EDfeedback" className="error"></p>
                        <input id="Edomane" type="text" value={this.state.EditDomain} onChange={this.handleChangeDomain} />
                        <p>Custom password (Optional)</p>
                        <p id="ECfeedback" className="error"></p>
                        <input id="Ecustompass" type="password" value={this.state.EditPassword} onChange={this.handleChangeCPass} />
                        <button onClick={this.onCloseEdit}>Save Changes</button>
                    </div>
                </ReactModal>

                <ReactModal
                    isOpen={this.state.openD}
                    contentLabel="DeletePassword"
                    className="DeletePasswordBox"
                    overlayClassName="PaswordBoxOverlay"
                    onRequestClose={this.onCloseDeletePasswordO}>

                    <div class="Deletepasswordcontent">
                        <h1>Delete Password - {this.state.EditTitle}</h1>
                        <p>This action will remove your password permanently</p>
                        <div>
                            <button onClick={this.onCloseDeletePassword}>Delete Password</button>
                            <button onClick={this.onCloseDeletePasswordO}>Cancel</button>
                        </div>
                    </div>
                </ReactModal>

                <div id="Dashboard-main" class="main">
                    <div>
                        <div class="liststatus defaulttext">Search Sitename / App</div>
                        <div class="main-title">
                            <input id="search-li" type="text" placeholder="Search..." onKeyUp={this.filterList} />
                            <img alt="helpimage" src={Help} onMouseOver={this.onHoverOpen} onMouseOut={this.onHoverClose}/>
                            <div id="helpbox">
                                <h1>Password security indicator:</h1>
                                <p>Red: Unsecure password</p>
                                <p>Yellow: Acceptable password security</p>
                                <p>Green: Secure password</p>
                            </div>
                        </div>
                    </div>
                    <ul id="ullist">
                        {
                            this.state.AllPass.map(Li => {
                                const element = <li key={Li.Id} className="listelement">
                                    <p className="title defaulttext">{Li.SiteDescription}</p>
                                    <div className="indicator"></div>
                                    <button onClick={this.onOpenEdit} data-id={Li.Id} className="edit-li listbtn">Edit<img alt="editimg" src={Edit} /></button>
                                    <button onClick={this.onRetrievePassword} data-id={Li.Id} className="retrievepassword listbtn">Retrieve Password</button>
                                    <Logo onClick={this.onOpenDeletePassword} data-id={Li.Id} className="deletepass" />
                                </li>
                                //Returns the list components with information from state
                                return element
                            })
                        }
                    </ul>
                </div>
            </div>
            
            );
    }
}

export default withAuth(Dashboard);