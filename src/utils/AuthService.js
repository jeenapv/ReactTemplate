import { browserHistory } from 'react-router';

export default class AuthService {
  constructor(props) {
    super();
    // this.login = this.login.bind(this);
    // this.signup = this.signup.bind(this);
    this.isLogged = this.isLogged.bind(this);
    this.logout = this.logout.bind(this);
  }


  getUserInfo() {
    return new Promise((resolve, reject) => {
      console.log(localStorage.getItem('user_access_token'));
      this.auth0.client.userInfo('l8bn_rkFQVeik1Ag', (error, profile) => (error ? reject(error) : resolve(profile)));
    });
  }

  setToken(accessToken, idToken) {
        // Saves user access token and ID token into local storage
    localStorage.setItem('access_token', accessToken);
    localStorage.setItem('id_token', idToken);
  }

  getNextPathname() {
    // Retrieves the nextState from localStorage
    const path = localStorage.getItem('nextState');
    return path ? JSON.parse(path).location.pathname : '/';
  }

  removeNextPathname() {
    // clear nextPath to avoid redirections
    localStorage.removeItem('nextState');
  }

  isLogged() {
    const token = this.getToken();
    return !!token;
  }

  getToken() {
    return localStorage.getItem('user_access_token');
  }

  logout() {
    localStorage.removeItem('user_access_token');
    localStorage.removeItem('user_profile');
    localStorage.removeItem('roles');
    localStorage.removeItem('userId');
    localStorage.removeItem('currentLanguage');
    localStorage.removeItem('pageCount');
  }
}
