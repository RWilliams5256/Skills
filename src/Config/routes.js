import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './../components/App';
import Import from '../components/pages/Import';
import Search from '../components/pages/Search';
import Recruiting from '../components/pages/Recruiting';
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import store from "../components/subcomponents/store";
import showResults from "../components/subcomponents/showResults";


const routes = (
  <Router>
    <Provider store={store}>
      <div style={{ padding: 15 }}>
        <h2>Wizard Example</h2>
        <Recruiting onSubmit={showResults} />
        <Values form="wizard" />
        <App>
          <Route exact path='/' component={Search} />
          <Route path='/import' component={Import} />
          <Route path='/recruiting' component={Recruiting} />
        </App>
      </div>
    </Provider>
  </Router>
);

export default routes;