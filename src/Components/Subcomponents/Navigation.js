import React, { Component } from 'react';
import logo2 from '../../Images/logo2.png';
import './Navigation.css';



class Navigation extends Component{
   render() {
        return (
        <div>
            <a href='/'>
                <img src={logo2} className="App-logo2" alt="logo2"/>
            </a>

             &nbsp;&nbsp; &nbsp;&nbsp;<a id="Nav-Item" href ='/recruiting'><h4>Recruiting</h4></a> &nbsp;&nbsp;
            <a id="Nav-Item" href='/'><h4>Search </h4></a>&nbsp;&nbsp;
            <a id="Nav-Item" href='/import'><h4>Upload </h4></a>
        </div>
               );
    }
}

export default Navigation;