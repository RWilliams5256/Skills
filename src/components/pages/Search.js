import React, { Component } from 'react';
import { Row, Col, Button, Preloader } from 'react-materialize';
import helpers from '../../utils/helpers';
import Accordion from '../subcomponents/Accordion';
import ResourceCard from '../subcomponents/ResourceCard';
import './Search.css';

// import { db } from '../../firebase/firebase';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      callToDbComplete: false,
      returnedMatches: false,
      resources: [
        {
          uKey: 0,
          firstName: 'Ryan Rodwell',
          position: 'BA',
          studentEmail: 'ryanrodwell@gmail.com',
          phone: '12346789',
          college: 'Georgia Tech',
          status: 'employee',

        },
        {
          uKey: 1,
          firstName: 'John Doe',
          position: 'Developer',
          studentEmail: 'jdoe@gmail.com',
          phone: '12346789',
          college: 'Georgia Southern',
          status: 'employee',

        },
      ],
      criteriaList: [],
      resourceList: [],
    };

    this.handler = this.handler.bind(this);
    this.renderReturnedResources = this.renderReturnedResources.bind(this);
  }

  componentWillMount() {
    // console.log('Search will mount')
    helpers.dbCallforLists(() => {
      this.setState({'callToDbComplete': true})
    });
  }

  componentDidMount(){
    // console.log('search mounted')
  }

  componentDidUpdate(){
    console.log("search DB again for employees")
    console.log(this.state)
  }

  handler(criteria, resources) {
    console.log("handler", resources)
    this.setState({
      'criteriaList': criteria, 
      'resourceList': resources, 
      'returnedMatches': true
    })
  }

  renderReturnedResources() { 

    return (
      
        this.state.resourceList.map((match, i) => (
          <ResourceCard key={i} name={match.firstName} email={match.email[0]}  school={match.colleges[0].name} position={match.currentProject} status={match.status} resume={match.resumes[0]}/>
        ))
      
      )
  }


  render() {
    const dataReturned = this.state.callToDbComplete;
    const matchesReturned = this.state.returnedMatches;
    let accord;

    if (dataReturned) {
      accord = <Accordion handler={this.handler} {...this.state}/>;
    } else {
      accord = <Preloader />
    }

    if (!matchesReturned) {
        console.log('No matches yet');
    } else {
      console.log('Matches found:',this.state.resourceList)
    }

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
                
            </Row>
          </Col>
          
        </Row>
      </div>
    );


  }
}

export default Search;


