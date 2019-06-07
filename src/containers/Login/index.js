import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import cookie from 'react-cookies';
import primaryLogo from '../../assets/img/logo-primary.png';
import '../../assets/css/login.css';
import { changeValue, validate, submit } from './actions';
import { getFields, getValid, submitErr } from './selectors';
import Notifications from 'react-notification-system-redux';

const validations = {
  email: 'email',
  password: ['minLength:3'],
};
const notificationOpts = {
  // uid: 'once-please', // you can specify your own uid if required
  title: "Hey, it's good to see you!",
  message: 'Now you can see how easy it is to use notifications in React!',
  position: 'tc',
  autoDismiss: 5,
  action: {
    label: 'Click me!!',
    callback: () => alert('clicked!'),
  },
};

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      keepLoggedIn: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  componentDidMount() {
    const val = cookie.load('loginkeeping') === 'true';
    document.getElementById('loginkeeping').checked = val;
    if (val) {
      this.props.history.replace('/dashboard');
    }
  }

  componentWillMount() {
    document.body.classList.remove('skin-josh');
  }

  validateLogin(e) {
    e.preventDefault();
    this.props.history.push('/dashboard');
  }

  handleChange(e, valid) {
    e.persist();
    this.setState({ [e.target.name]: e.target.value });
    this.props.changeValue(e.target.name, e.target.value);
    this.props.validate(e.target.name, valid);
  }

  handleCheckbox() {
    const checked = document.getElementById('loginkeeping').checked;
    this.setState({ keepLoggedIn: checked });
  }

  handleSubmit(values) {
    // console.log('values', values);
    // if (values.result && values.result.status) {
    //   const date = new Date();
    //   const expirationDate = date.setHours(date.getHours() + 4);
    //   console.log(new Date(expirationDate));
    //   cookie.save('loginkeeping', this.state.keepLoggedIn, { expires: new Date(expirationDate) });
    //   this.props.history.replace('/dashboard');
    // }
    this.props.history.replace('/dashboard');
  }

  render() {
    const { onSubmit } = this.props;
    console.log('getError', this.props.getError);
    return (
      <div className="row vertical-offset-100">
        <div className="col-sm-6 col-sm-offset-3  col-md-5 col-md-offset-4 col-lg-4 col-lg-offset-4">
          <div id="container_demo">
            <a className="hiddenanchor" id="toregister" />
            <a className="hiddenanchor" id="tologin" />
            <a className="hiddenanchor" id="toforgot" />
            <div id="wrapper">
              <div id="login" className="animate form">
                <form autoComplete="on" onSubmit={onSubmit(this.handleSubmit)}>
                  <h3>
                    <img src={primaryLogo} alt="josh logo" />
                    <br />
                    Log in
                  </h3>
                  <p>
                    <label style={{ marginBottom: '0px' }} htmlFor="email" className="uname">
                      <i className="fa fa-user-o" aria-hidden="true" />
                      E- mail or Username
                    </label>
                    <input
                      id="email"
                      name="email"
                      required
                      type="text"
                      placeholder="email or e-mail"
                      value={this.state.userName}
                      onChange={(e) => this.handleChange(e, validations.email)}
                    />
                    {this.props.fields.email && this.props.fields.email.errors && (
                      <div className="field-error">
                        {this.props.fields.email.errors.map((e) => (
                          <div key={e}>{e}</div>
                        ))}
                      </div>
                    )}
                  </p>
                  <p>
                    <label style={{ marginBottom: '0px' }} htmlFor="password" className="youpasswd">
                      <i className="fa fa-key" aria-hidden="true" />
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      required
                      type="password"
                      placeholder="eg. X8df!90EO"
                      value={this.state.password}
                      onChange={(e) => this.handleChange(e, validations.password)}
                    />
                    {this.props.fields.password && this.props.fields.password.errors && (
                      <div className="field-error">
                        {this.props.fields.password.errors.map((e) => (
                          <div key={e}>{e}</div>
                        ))}
                      </div>
                    )}
                  </p>
                  <p className="keeplogin">
                    <input
                      type="checkbox"
                      name="loginkeeping"
                      id="loginkeeping"
                      onChange={this.handleCheckbox}
                    />
                    <label htmlFor="loginkeeping">Keep me logged in</label>
                  </p>
                  <p className="login button">
                    <input
                      type="submit"
                      value="Login"
                      className="btn btn-success"
                      disabled={this.props.submitting || !this.props.valid}
                    />
                  </p>
                  <p className="change_link">
                    <a href="#toforgot">
                      <button
                        type="button"
                        className="btn btn-responsive botton-alignment btn-warning btn-sm"
                      >
                        Forgot password
                      </button>
                    </a>
                    <a href="#toregister">
                      <button
                        type="button"
                        className="btn btn-responsive botton-alignment btn-success btn-sm"
                        style={{ float: 'right' }}
                      >
                        Sign up
                      </button>
                    </a>
                  </p>
                </form>
              </div>
              <div id="forgot" className="animate form">
                <form action="index.html" autoComplete="on" method="post">
                  <h3>
                    <img src={primaryLogo} alt="josh logo" />
                    <br />
                    Password
                  </h3>
                  <p>
                    Enter your email address below and we'll send a special reset password link to
                    your inbox.
                  </p>
                  <p>
                    <label
                      style={{ marginBottom: '0px' }}
                      htmlFor="emailsignup1"
                      className="youmai"
                    >
                      <i className="fa fa-envelope" aria-hidden="true" />
                      Your email
                    </label>
                    <input
                      id="emailsignup1"
                      name="emailsignup"
                      required
                      type="email"
                      placeholder="your@mail.com"
                    />
                  </p>
                  <p className="login button">
                    <input type="submit" value="Login" className="btn btn-success" />
                  </p>
                  <p className="change_link">
                    <a href="/" className="to_register">
                      <button
                        type="button"
                        className="btn btn-responsive botton-alignment btn-warning btn-sm"
                      >
                        Back
                      </button>
                    </a>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return {
    changeValue: (field, value) => {
      const Value = value;
      return dispatch(changeValue(field, Value));
    },
    validate: (field, validation) => dispatch(validate(field, validation)),

    onSubmit: (handler) => (e) => {
      e.preventDefault();
      return dispatch(submit(validations, handler));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  fields: getFields(),
  valid: getValid(),
  getError: submitErr(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
