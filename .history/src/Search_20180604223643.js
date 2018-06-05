import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import './search.css';


class Search extends Component {
  render() {
    return (
      <div className='search'>

        <section>
          <div>
            <h3>Current Criteria</h3>
          </div>
        </section>

        <section>
          <div>
            <h3>Filter On</h3>
            <Accordion/>
          </div>
        </section>

        <section>
          <div></div>
        </section>


      </div>

    );
  }
}

export default Search;


