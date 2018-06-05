import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import ResourceCard from './Components/ResourceCard';
import './search.css';


class Search extends Component {
  render() {
    return (
      <div className='search'>
        <div className='row'>
          <div className='col s12'>
            <h6>Current Criteria:</h6>
          </div>

          <div className='col s12'>
            <h6>Filter On:</h6>
            <Accordion/>
          </div>

          <div className='col s12'>
            <h6>Matching Resources:</h6>
            <ResourceCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;


