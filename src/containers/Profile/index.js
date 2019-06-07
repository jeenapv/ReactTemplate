import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectApiData } from './selectors';
import avatar from '../../assets/img/authors/avatar.jpg';

class Profile extends Component {
  componentDidMount() {
    console.log('profile');
    document.body.classList.add('skin-josh');
  }

  render() {
    console.log(JSON.parse(localStorage.getItem('admin_data')));
    return (
      <aside className="right-side">
        <section className="content-header">
          <h1>My Profile</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="livicon" data-name="home" data-size="16" data-color="#000" /> Dashboard
              </a>
            </li>
            <li className="active">Profile</li>
          </ol>
        </section>
        <section className="content pg-wrp">
          <div className="profile">
            <div className="row">
              <div className="col-md-3 col-sm-4 col-xs-12">
                <div className="profile-image">
                  <img src={avatar} className="img-thumbnail" alt="Cinque Terre" />
                </div>
              </div>
              <div className="col-md-9 col-sm-8 col-xs-12 profile-dtls">
                <h3 className="profile-name">Addie osmani</h3>
                <ul className="list list-unstyled">
                  <li className="user-type"><span className="lbl">User Type:</span> <span>Admin</span></li>
                  <li className="user-id"><span className="lbl">User ID:</span> <span>097865</span></li>
                  <li className="user-email"><span className="lbl">Email:</span> <span><a href="">addie.osmani@aumet.com</a></span></li>
                </ul>
                <a href="profile-edit.html" className="btn btn-primary edit-profile">
                  <i className="fa fa-pencil"></i> Edit Profile
                </a>
              </div>
            </div>
          </div>
        </section>
      </aside>
    );
  }
}

function mapDispatchToProps(dispatch, ownProps) {
  return {


  };
}

const mapStateToProps = createStructuredSelector({
  fields: selectApiData(),
});


export default connect(mapStateToProps, mapDispatchToProps)(Profile);
