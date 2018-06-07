import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo2 from '../../Images/logo2.png';
import './Navigation.css';



class Navigation extends Component{
   render() {
        return (
        <div>
            <Link to='/'>
                <img src={logo2} className="App-logo2" alt="logo2"/>
            </Link>

             &nbsp;&nbsp; &nbsp;&nbsp;<h2 id="Nav-Item"><Link to='/recruiting'>Recruiting </Link></h2> &nbsp;&nbsp;
            <h2 id="Nav-Item"><Link to='/search'>Search </Link></h2>&nbsp;&nbsp;
            <h2 id="Nav-Item"><Link to='/import'>Upload </Link></h2>
        </div>
               );
    }
}

export default Navigation;