import React, { Component } from 'react';
import './search.css';


class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="row">
            <div className=

        </div>
        <ul className="collapsible">
            <li>
                <div className="collapsible-header"><i className="material-icons">filter_drama</i>First</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
                <div className="collapsible-header"><i className="material-icons">place</i>Second</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
            <li>
                <div className="collapsible-header"><i className="material-icons">whatshot</i>Third</div>
                <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
            </li>
        </ul>
      </div>

    );
  }
}

export default Search;


