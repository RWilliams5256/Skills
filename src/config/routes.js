import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import Import from '../components/pages/Import';
import Search from '../components/pages/Search';
import Recruiting from '../components/pages/Recruiting';
import { Provider } from "react-redux";
import store from "../components/subcomponents/store";


const routes = (
  <Router>
    <Provider store={store}>
        <App>
          <Route exact path='/' component={Search} />
          <Route path='/import' component={Import} />
          <Route path='/recruiting' component={Recruiting} />
        </App>
    </Provider>
  </Router>
);

export default routes;