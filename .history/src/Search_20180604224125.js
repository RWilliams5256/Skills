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
            <h4>Current Criteria:</h4>
          </div>

          <div className='col s12'>
            <h4>Filter On:</h4>
            <Accordion/>
          </div>

          <div className='col s12'>
            <h4>Matching Resources:</h4>
            <ResourceCard/>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;


