import React, { Component } from 'react';
import { connect } from 'react-redux';


class Categories extends Component {
  componentDidMount() {
    console.log('Countries');
    document.body.classList.add('skin-josh');
  }

  render() {
    return (
      <aside className="right-side">
        <section className="content-header">
          <h1>Categories page</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="livicon" data-name="home" data-size="16" data-color="#000" /> Categories
              </a>
            </li>
            <li className="active">Categories page</li>
          </ol>
        </section>
        <section className="content" />
      </aside>
    );
  }
}

export default connect(null)(Categories);
