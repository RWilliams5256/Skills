import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../Components/App';
import Import from '../Components/Pages/Import/Import';
import Search from '../Components/Pages/Search/Search';
import Recruiting from '../Components/Pages/Recruiting/Recruiting';
import PersonCreation from '../Components/Pages/PersonCreation/PersonCreation'

const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Search} />
      <Route exact path='/createperson' component={PersonCreation} />
      <Route path='/import' component={Import} />
      <Route path='/recruiting' component={Recruiting} />
    </App>
  </Router>
);

export default routes;
