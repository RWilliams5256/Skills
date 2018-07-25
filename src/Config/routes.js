import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import Import from '../components/pages/Import';
import Search from '../components/pages/Search';
import Recruiting from '../components/pages/Recruiting';


const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Search} />
      <Route path='/import' component={Import} />
      <Route path='/recruiting' component={Recruiting} />
    </App>
  </Router>
);

export default routes;