import React, { Component } from 'react';
import { connect } from 'react-redux';
import AddCountry from './addCountry';

const $ = window.$;

class Countries extends Component {
  componentDidMount() {
    console.log('Countries');
    document.body.classList.add('skin-josh');
      $('#table').dataTable();
  }

  render() {
    return (
      <aside className="right-side">
        <section className="content-header">
          <h1>Countries page</h1>
          <ol className="breadcrumb">
            <li>
              <a href="#">
                <i className="livicon" data-name="home" data-size="16" data-color="#000" /> Countries
              </a>
            </li>
            <li className="active">Countries page</li>
          </ol>
        </section>
        <section className="content paddingleft_right15">
          <div className="row">
            <div className="text-right">

              <a href="" data-toggle="modal" data-target="#edit_confirm" className="btn btn-primary">
                <i className="fa fa-plus"></i> Add Country</a>
            </div>
            <div className="panel panel-primary mar-top">
              <div className="panel-heading">
                <h4 className="panel-title">
                  <i className="livicon" data-name="user" data-size="16" data-loop="true" data-c="#fff" data-hc="white"></i>
                  Country List
                </h4>
              </div>
              <br />
              <div className="panel-body">
                <table className="table table-bordered " id="table">
                  <thead>
                  <tr className="filters">
                    <th>Sl No</th>
                    <th>Country Name</th>
                    <th>Country Code</th>
                    {/*<th>Flag</th>*/}
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                  </thead>
                  <tbody>
                  <tr>
                    <th>01</th>
                    <td>Afghanistan</td>
                    <td>AFG</td>
                    {/*<td><img src="img/countries_flags/af.png" alt="" /></td>*/}
                    <td><span className="label label-sm label-success">Active</span></td>
                    <td>

                      <a href="#" className="btn default btn-xs purple" data-toggle="modal" data-target="#edit_confirm">
                        <i className="fa fa-edit"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>02</th>
                    <td>Aland Islands</td>
                    <td>ALA</td>
                    {/*<td><img src="img/countries_flags/is.png" alt="" /></td>*/}
                    <td><span className="label label-sm label-success">Active</span></td>
                    <td>

                      <a href="#" className="btn default btn-xs purple" data-toggle="modal" data-target="#edit_confirm">
                        <i className="fa fa-edit"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>03</th>
                    <td>Albania</td>
                    <td>ALB</td>
                    {/*<td><img src="img/countries_flags/al.png" alt="" /></td>*/}
                    <td><span className="label label-sm label-success">Active</span></td>
                    <td>

                      <a href="#" className="btn default btn-xs purple" data-toggle="modal" data-target="#edit_confirm">
                        <i className="fa fa-edit"></i> Edit
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th>04</th>
                    <td>Afghanistan</td>
                    <td>AFG</td>
                    {/*<td><img src="img/countries_flags/af.png" alt="" /></td>*/}
                    <td><span className="label label-sm label-success">Active</span></td>
                    <td>

                      <a href="#" className="btn default btn-xs purple" data-toggle="modal" data-target="#edit_confirm">
                        <i className="fa fa-edit"></i> Edit
                      </a>
                    </td>
                  </tr>
                  </tbody>
                </table>
                {/*<!-- Modal for showing Edit Country details -->*/}
                <AddCountry />
              </div>
            </div>
          </div>
          {/*<!-- row-->*/}
        </section>
      </aside>
    );
  }
}

export default connect(null)(Countries);
