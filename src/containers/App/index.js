import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import Header from '../../components/Header';
import Menu from '../../components/Menu';
import NotificationsComponent from '../../components/Notifications';
import Login from '../../containers/Login';
import Dashboard from '../../containers/Dashboard';
import Profile from '../../containers/Profile';
import Countries from '../../containers/Countries';
import Regions from '../../containers/Regions';
import Specialities from '../../containers/Specialities';
import Categories from '../../containers/Categories';
import Scientific from '../../containers/Scientific';

const App = (props) => {
  console.log('props', props);
  const pathName = props.history.location.pathname;
  const wrapperClass = pathName === '/' ? 'container' : 'wrapper row-offcanvas row-offcanvas-left';
  return (
    <div className={wrapperClass}>
      { pathName !== '/' && <Header /> }
      { <NotificationsComponent /> }
      { pathName !== '/' && <Menu /> }
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/countries" component={Countries} />
        <Route exact path="/regions" component={Regions} />
        <Route exact path="/specialities" component={Specialities} />
        <Route exact path="/categories" component={Categories} />
        <Route exact path="/scientificNames" component={Scientific} />
      </Switch>
    </div>
  );
};

App.defaultProps = { history: {} };

App.propTypes = {
  history: PropTypes.object,
};

export default App;
