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
          school: 'Gerogia Tech',
          status: 'employee',

        },
        {
          uKey: 1,
          name: 'John Doe',
          position: 'Developer',
          email: 'jdoe@gmail.com',
          phone: '12346789',
          school: 'Gerogia Southern',
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
            <div className='row'
              {
                this.state.resources.map(resource => <ResourceCard key={resource.uKey} name={resource.name} email={resource.email} phone={resource.phone} school={resource.school} position={resource.position} status={resource.status}/>)
              }
          </div>
        </div>
      </div>
    );
  }
}

export default Search;


