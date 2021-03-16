import decode from 'jwt-decode';

class AuthService {
    //get the data saved in token
    getUserData() {
        return decode(this.getToken());
    }
    //checks to see if user is still logged in
    isLoggedIn() {
        //saved token & valid
        const token = this.getToken();
        //check if token is NOT undefined and the token is not expired
        return !!token && !this.isTokenExpired(token);
    }
    //checks if token is expired
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else {
                return false;
            }
        } catch (err) {
            return false;
        }
    }
    //get token from localStorage
    getToken() {
        return localStorage.getItem('token');
    }
    //save token to localStorage and relocate to main page 
    login(idToken) {
        localStorage.setItem('token', idToken);
        window.location.assign('/');
    }
    //delete token from localStorage and relocate to main page 
    logout() {
        localStorage.removeItem('token');
        window.location.assign('/');
    }
}

export default new AuthService(); 