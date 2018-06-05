import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import ResourceCard from './Components/ResourceCard';
import './search.css';


class Search extends Component {

  constructor() {
    super()
    this.state = {
      resources: [
        {
          uKey: 0,
          name: 'Ryan Rodwell',
          

        },
        {
          uKey: 1,
          icon: 'flash_on',
          iconColor: 'black',
          iconUrl: '',
          caption: 'Test 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },
    }
  }
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


