import React from 'react';
import { Switch, Route } from 'react-router-dom';



// import App from './containers/App';
import Login from './containers/Login';
import Dashboard from './containers/Dashboard';
import Header from './components/Header';

// console.log('props', this);
const routes = (
      <div>
          {/*{ history.location.pathname !== '/' && <Header /> }*/}
    <Switch>

      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
      </div>
);
export default routes;
