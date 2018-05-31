import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './navigation.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom';



class Navigation extends React.Component{
   render() {
        return (
        <div>
            <h2 id="Nav-Item"> Recruiting </h2> &nbsp;&nbsp;
            <h2 id="Nav-Item"> Search </h2>&nbsp;&nbsp;
            <h2 id="Nav-Item"> Upload </h2> 
        </div>
               );
    }
}

export default Navigation;