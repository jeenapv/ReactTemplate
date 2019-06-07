import React, { Component } from 'react';
import { connect } from 'react-redux';


class Scientific extends Component {
  componentDidMount() {
    console.log('Regions');
    document.body.classList.add('skin-josh');
  }

  render() {
    return (
      <aside className="right-side">
        <section className="content-header">
          <h1>Scientific Names page</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="livicon" data-name="home" data-size="16" data-color="#000" /> Scientific Names
              </a>
            </li>
            <li className="active">Scientific Names page</li>
          </ol>
        </section>
        <section className="content" />
      </aside>
    );
  }
}

export default connect(null)(Scientific);
