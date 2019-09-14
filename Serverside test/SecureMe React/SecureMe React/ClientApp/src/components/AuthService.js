import decode from 'jwt-decode';

export default class AuthService {
    constructor(domain) {
        this.domain = domain || 'http://localhost:3000';
        //this.fetch = this.fetch.bind(this)
        this.login = this.login.bind(this)
        this.getProfile = this.getProfile.bind(this)
    }
    login(username, password) {

        let standardheader = {
            "Accept": "application/json",
            "Content-Type": "application/json",
        }
        if (this.loggedIn())
            standardheader['Authorization'] = `Bearer ${this.getToken()}`
        console.log(username);
        return fetch('/api/Authentication/Login', {
            method: "POST",
            headers: standardheader,
            body: JSON.stringify({ username: username, password: password }),
            
        })
            //.then(response => console.log(response)) // response.json() returns a promise
            //.then(response => response.json()) // response.json() returns a promise
            .then(this._checkStatus)
            .then(response => response.json())
            .then((response) => {
                this.setToken(response.token); // Setting the token in localStorage
                console.log(response)
                return Promise.resolve(response);
            });

        //return this.fetch('/Login', {
        //    method: 'POST',
        //    body: JSON.stringify({
        //        username,
        //        password
        //    })
        //}).then(res => {
        //    this.setToken(res.token);
        //    return Promise.resolve(res);
        //})
    }






    //fetch(url, options) {
    //     // performs api calls sending the required authentication headers
    //    const headers = {
    //        'Accept': 'application/json',
    //        'Content-type': 'application/json'
    //    }
    //     // Setting Authorization header
    //    // Authorization: Bearer xxxxxxx.xxxxxxxx.xxxxxx
    //    if (this.loggedIn())
    //        headers['Authorization'] = `Bearer ${this.getToken()}`

    //    return fetch(url, {
    //        headers,
    //        ...options
    //    })
    //        .then(this._checkStatus)
    //        .then(response => response.json())
    //}


    getToken() {
        return localStorage.getItem('id_token');
    }
    setToken(idToken) {
        return localStorage.setItem('id_token',idToken)
    }
    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token)
    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true
            }
            else {
                return false
            }
        }
        catch (e) {
            return false;
        }
    }
    logout() {
        localStorage.removeItem('id_token')
    }

    getProfile() {
        return decode(this.getToken())
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
}