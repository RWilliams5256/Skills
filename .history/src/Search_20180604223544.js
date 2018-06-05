import React, { Component } from 'react';
import Accordion from './Components/Accordion';
import './search.css';


class Search extends Component {
  render() {
    return (
      <div className='search'>

        <section>
          <div>
            <h2></h2>
          </div>
        </section>
        <Accordion/>

      </div>

    );
  }
}

export default Search;


