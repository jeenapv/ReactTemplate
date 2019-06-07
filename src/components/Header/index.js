import React, { Component } from 'react';
import cookie from 'react-cookies';
import { connect } from 'react-redux';
import logo from '../../assets/img/logo.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout() {
    cookie.save('loginkeeping', false, {});
    // document.cookie = 'loginkeeping=false';
    localStorage.removeItem('admin_data');
    localStorage.removeItem('admin_token');
  }

  render() {
    return (
      <header className="header">
        <a href="/" className="logo">
          <img src={logo} alt="logo" />
        </a>
        <nav className="navbar navbar-static-top" role="navigation">
          {/* <!-- Sidebar toggle button--> */}
          <div>
            <a href="#" className="navbar-btn sidebar-toggle" data-toggle="offcanvas" role="button">
              <div className="responsive_nav" />
            </a>
          </div>
          <div className="navbar-right">
            <ul className="nav navbar-nav">
              <li className="dropdown user user-menu">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <img
                    data-src="holder.js/35x35/#fff:#000"
                    width="35"
                    className="img-circle img-responsive pull-left"
                    height="35"
                    alt="riot"
                  />
                  <div className="riot">
                    <div>
                      Riot
                      <span>
                        <i className="caret" />
                      </span>
                    </div>
                  </div>
                </a>
                <ul className="dropdown-menu">
                  {/* <!-- User image --> */}
                  <li className="user-header bg-light-blue">
                    <img
                      data-src="holder.js/90x90/#fff:#000"
                      className="img-responsive img-circle"
                      alt="User Image"
                    />
                    <p className="topprofiletext">Riot Zeast</p>
                  </li>
                  {/* <!-- Menu Body --> */}
                  <li>
                    <a href="#">
                      <i className="fa fa-user" aria-hidden="true" /> My Profile
                    </a>
                  </li>
                  <li role="presentation" />
                  <li>
                    <a href="#">
                      <i className="fa fa-cogs" aria-hidden="true" /> Account Settings
                    </a>
                  </li>
                  {/* <!-- Menu Footer--> */}
                  <li className="user-footer">
                    <div className="pull-left">
                      <a href="lockscreen.html">
                        <i className="fa fa-lock" aria-hidden="true" /> Lock
                      </a>
                    </div>
                    <div className="pull-right">
                      <a href="/" onClick={this.logout}>
                        <i className="fa fa-sign-out" aria-hidden="true" /> Logout
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default connect(null)(Header);
