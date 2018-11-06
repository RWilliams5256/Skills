import React, { Component } from 'react';
// import { Navbar, NavItem } from 'react-materialize';
import egLogo from '../../images/companylogo.png';
import smallLogo from '../../images/logo2.png';
import '../../css/Navigation.css';


class Navigation extends Component{
   render() {
        return (
            <div>
                <div className="container">
                    <a data-activates="nav-mobile" className="button-collapse top-nav full hide-on-large-only"><i className="material-icons">menu</i></a>
                </div>

                <ul id="nav-mobile" className="sidenav fixed" style={{transform: 'translateX(0%)'}}>
                    <li className="logo center">
                        <img src={egLogo} alt="Experient Group Logo"/>
                    </li>
                    <li className="navigation">
                        <a href="/" className="waves-effect">
                            <i className="fas fa-search"></i>
                            <span>Search</span>
                        </a>
                    </li>
                    <li className="navigation">
                        <a href="/recruiting" className="waves-effect">
                            <i className="fas fa-clipboard-list"></i>
                            <span>Recruiting</span>
                        </a>
                    </li>
                    <li className="navigation">
                        <a href="/import" className="waves-effect">
                            <i className="fas fa-upload"></i>
                            <span>Upload</span>
                        </a>
                    </li>
                    <li className="footer">
                        <div className="row">
                            <div className="col s9">
                                <p className="copyright">© 2018 Experient Group.</p>
                            </div>
                            <div className="col s3">
                                <img className="small-logo" src={smallLogo} alt="small EG logo"/>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>


               );
    }
}

export default Navigation;