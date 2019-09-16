import decode from 'jwt-decode';

export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:3000';
        //this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }
    login(username, password) {
        //Static header information
        let standardheader = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
        //Adds token to header if we got any
        if (this.loggedIn()) {
            standardheader['Authorization'] = `Bearer ${this.getToken()}`
        }
        return fetch('/Authentication/Login', {
            method: "POST",
            headers: standardheader,
            body: JSON.stringify({ username: username, password: password }),
        })
            .then(this._checkStatus)
            .then(response => response.json())
            .then((response) => {
                this.setToken(response.token); // Setting the token in localStorage
                return Promise.resolve(response);
            });
    }


    //Gets the token from the LocalStorage
    getToken() {
        return localStorage.getItem('id_token')
        }
    //Sets the token in the LocalStorage
    setToken(idToken) {
        return localStorage.setItem('id_token',idToken)
        }
    //Makes sure that the user is logged in
    //!! makes a value to true/false dependent on the value
    //First verifiy we have a token and then check the date
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token)
        }

    //Makes sure the token we find in the users browser isnt expired
    //If the current date now in minuts is above the expiration date in the cookie, the cookie is too old
    isTokenExpired(token) {
        //try error for if we are missing the token.
        try {
            const decoded = decode(token);
            console.log(Date.now());
            if (decoded.exp < Date.now() / 1000) {
                return true
            } else {
                return false
            }
        }
        catch (e) {
            return false;
        }
        }

    //Removes our token from LocalStorage
    logout() {
        localStorage.removeItem('id_token')
    }

    //Decodes the token for information
    getProfile() {
        return decode(this.getToken())
    }

    //If the response if within the 200 range, its a success
    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response
        } else {
            let error = new Error(response.statusText)
            error.reponse = response;
            throw error
        }
    }
}