import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import ResourceCard from './Components/ResourceCard';
import './search.css';


class Search extends Component {

  constructor()
  render() {
    return (
      <div className='search'>
        <div className='row'>
          <div className='col s12'>
            <h5>Current Criteria:</h5>
          </div>

          <div className='col s12'>
            <h5>Filter On:</h5>
            <Accordion/>
          </div>

          <div className='col s12'>
            <h5>Matching Resources:</h5>
            <ResourceCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;


