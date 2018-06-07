import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../Components/App';
import Home from '../Components/Pages/Home';
import Import from '../Components/Pages/Import';
import Search from '../Components/Pages/Search';
import Recruiting from '../Components/Pages/Recruiting';


const routes = (
  <Router>
    <App>
      <Route exact path='/' component={Home} />
      <Route path='/import' component={Import} />
      <Route path='/search' component={Search} />
      <Route path='/recruiting' component={Recruiting} />
    </App>
  </Router>
);

export default routes;