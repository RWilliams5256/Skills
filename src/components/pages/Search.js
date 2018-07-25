import React, { Component } from 'react';
import { Row, Col, Button, Preloader } from 'react-materialize';
import helpers from '../../utils/helpers';
import Accordion from '../subcomponents/Accordion';
import ResourceCard from '../subcomponents/ResourceCard';
import './Search.css';


class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      callToDbComplete: false,
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
      resourceList: [],
    };

    this.handler = this.handler.bind(this);
  }

  componentWillMount() {
    console.log('Search will mount')
    helpers.dbCallforLists(() => {
      console.log("callback function")
      this.setState({'callToDbComplete': true})
    });
  }

  componentDidMount(){
    console.log('search mounted')
  }

  componentDidUpdate(){
    console.log("search DB again for employees")
    console.log('did update:', this.state.criteriaList)
    console.log(this.state.resourceList)
  }

  handler(criteria, resources) {
    // console.log('initial resource:', resources)
    this.setState({
      'criteriaList': criteria, 
      'resourceList': resources
    })

    console.log('resourceList:',this.state.resourceList)
  }


  render() {
    console.log("Search rendered")

    const dataReturned = this.state.callToDbComplete;

    let accord;

    if (dataReturned) {
      accord = <Accordion handler={this.handler} {...this.state}/>;
    } else {
      accord = <Preloader />
    }

    console.log('rendering search:', this.state.resourceList)

    const resor = this.state.resourceList;
    console.log('resor:', resor.length)


    return (
      <div className='search'>
        <Row>
          <Col s={12}>
            <h5>Current Criteria:</h5>
            <Row>
              <Col s={12}>
                {
                  this.state.criteriaList.map((criteria,i) => <Button key={i}>{criteria.value}</Button>)
                }
              </Col>
            </Row>
          </Col>

          <Col s={12}>
            <h5>Filter On:</h5>
            {accord}
          </Col>

          <Col s={12}>
            <h5>Matching Resources:</h5>
            <Row>
              {
                resor.map(
                  (resource,i) => <ResourceCard key={i} name={resource.firstName} email={resource.studentEmail}  school={resource.college} position={resource.appliedFor} status={resource.applicationDate}/>)
              }
            </Row>
          </Col>
        </Row>
      </div>
    );


  }
}

export default Search;

