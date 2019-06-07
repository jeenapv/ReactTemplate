import React, { Component } from 'react';
import { connect } from 'react-redux';


class Dash extends Component {
  componentDidMount() {
    console.log('dashboard');
    document.body.classList.add('skin-josh');
  }

  render() {
    return (
      <aside className="right-side">
        <section className="content-header">
          <h1>Dashboard page</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="livicon" data-name="home" data-size="16" data-color="#000" /> Dashboard
              </a>
            </li>
            <li className="active">Dashboard page</li>
          </ol>
        </section>
        <section className="content" />
      </aside>
    );
  }
}

export default connect(null)(Dash);
