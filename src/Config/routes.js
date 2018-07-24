import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../Components/App';
import Import from '../Components/Pages/Import';
import Search from '../Components/Pages/Search';
import Recruiting from '../Components/Pages/Recruiting';
import { Provider } from "react-redux";
import store from "../Components/Subcomponents/store";


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