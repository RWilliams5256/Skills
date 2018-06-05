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
            <h>Current Criteria:</h>
          </div>

          <div className='col s12'>
            <h>Filter On:</h>
            <Accordion/>
          </div>

          <div className='col s12'>
            <h>Matching Resources:</h>
            <ResourceCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;


