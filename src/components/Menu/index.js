import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Menu extends Component {

  render() {
    return (
      <aside className="left-side sidebar-offcanvas">
        <section className="sidebar ">
          <div className="page-sidebar  sidebar-nav">
            {/* <!-- BEGIN SIDEBAR MENU --> */}
            <ul id="menu" className="page-sidebar-menu">
              <li>
                <Link to="/dashboard">
                  <i className="fa fa-home" aria-hidden="true" />
                  <span className="title">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <i className="fa fa-user" aria-hidden="true" />
                  <span className="title">Profile</span>
                </Link>
              </li>
              <li>
                <Link to="/countries">
                  <i className="fa fa-flag" aria-hidden="true" />
                  <span className="title">Countries</span>
                </Link>
              </li>
              <li>
                <Link to="/regions">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span className="title">Regions</span>
                </Link>
              </li>
              <li>
                <Link to="/specialities">
                  <i className="fa fa-th-list" aria-hidden="true" />
                  <span className="title">Specialities</span>
                </Link>
              </li>
              <li>
                <Link to="/categories">
                  <i className="fa fa-th-list" aria-hidden="true" />
                  <span className="title">Categories</span>
                </Link>
              </li>
              <li>
                <Link to="/scientificNames">
                  <i className="fa fa-flask" aria-hidden="true" />
                  <span className="title">Scientific Names</span>
                </Link>
              </li>
            </ul>
            {/* <!-- END SIDEBAR MENU --> */}
          </div>
        </section>
      </aside>
    );
  }
}

export default connect(null)(Menu);
