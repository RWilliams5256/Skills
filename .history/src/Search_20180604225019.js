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
          position: 'BA',
          email: 'ryanrodwell@gmail.com',
          phone: '12346789',
          college: 'Gerogia Tech',
          status: 'employee',

        },
        {
          uKey: 1,
          name: 'John Doe',
          position: 'BA',
          email: 'ryanrodwell@gmail.com',
          phone: '12346789',
          college: 'Gerogia Tech',
          status: 'employee',

        },
      ]
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


