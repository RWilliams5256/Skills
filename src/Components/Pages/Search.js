import React, { Component } from 'react';
import { Row, Col, Tag } from 'react-materialize';
import helpers from '../../utils/helpers'

import Accordion from '../subcomponents/Accordion';
import ResourceCard from '../subcomponents/ResourceCard';
import './Search.css';


class Search extends Component {

  constructor(props) {
    super(props)
    this.criteriaList =[]
    this.state = {
      resources: [
        {
          uKey: 0,
          name: 'Ryan Rodwell',
          position: 'BA',
          email: 'ryanrodwell@gmail.com',
          phone: '12346789',
          school: 'Georgia Tech',
          status: 'employee',

        },
        {
          uKey: 1,
          name: 'John Doe',
          position: 'Developer',
          email: 'jdoe@gmail.com',
          phone: '12346789',
          school: 'Georgia Southern',
          status: 'employee',

        },
      ],
      criteriaList: [],
    };

    this.handler = this.handler.bind(this);
  }

  componentWillMount() {
    console.log('Search will mount')
    helpers.dbCallforLists();
  }

  componentDidMount(){
    console.log('search mounted')
  }

  handler() {
    console.log(this.name)
  }

  render() {
    return (
      <div className='search'>
        <Row>
          <Col s={12}>
            <h5>Current Criteria:</h5>
            <Row>
              <Col s={12}>
                {
                  this.state.criteriaList.map(criteria => <Tag>{criteria}</Tag>)
                }
              </Col>
            </Row>
          </Col>

          <Col s={12}>
            <h5>Filter On:</h5>
            <Accordion handler={this.handler}/>
          </Col>

          <Col s={12}>
            <h5>Matching Resources:</h5>
            <Row>
              {
                this.state.resources.map(resource => <ResourceCard key={resource.uKey} name={resource.name} email={resource.email} phone={resource.phone} school={resource.school} position={resource.position} status={resource.status}/>)
              }
            </Row>
          </Col>
        </Row>
      </div>
    );


  }
}

export default Search;


