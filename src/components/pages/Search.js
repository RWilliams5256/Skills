import React, { Component } from 'react';
import { Row, Col, Preloader, Card } from 'react-materialize';
import helpers from '../../utils/helpers';
import Accordion from '../subcomponents/Accordion';
import ResourceCard from '../subcomponents/ResourceCard';
import '../../css/Search.css';
// import $ from 'jquery';

class Search extends Component {

  constructor(props) {
    super(props)
    this.state = {
      callToDbComplete: false,
      returnedMatches: false,
      resourceList: [],
      criteriaList: [],
    };

    this.handler = this.handler.bind(this);
    this.renderReturnedResources = this.renderReturnedResources.bind(this);
    this.closeTag = this.closeTag.bind(this);
  }

  componentWillMount() {
    // console.log('Search will mount')
    helpers.dbCallforLists(() => {
      this.setState({'callToDbComplete': true})
    });

    helpers.dbCallforPeople({}, (data) => {
      // console.log('returned', data)
      this.setState({
        'resourceList': data,
      })
    })
  }

  componentDidMount(){
    // console.log('search mounted')
  }

  componentDidUpdate(){
    // console.log("search DB again for employees")
    // console.log(this.state)
  }

  handler(listOfCriteria, searchCriteria) {

    console.log("handler", searchCriteria)
    this.setState({'criteriaList': listOfCriteria})

    helpers.dbCallforPeople(searchCriteria, (data) => {
      // console.log('returned', data)
      if( data !== undefined) {
        this.setState({
          'resourceList': data
        })
      } else {
        alert('No matches found with this criteria.');
      }
    })

  }

  closeTag() {

  }

  renderReturnedResources(match,i) {

    return (
      <ResourceCard key={i} name={match.firstName} email={match.email[0]}  school={match.colleges[0].name} position={match.currentProject} status={match.status} resume={match.resumes[0]}/>
    )
  }


  render() {
    const dataReturned = this.state.callToDbComplete;
    // const matchesReturned = this.state.returnedMatches;
    let accord;

    if (dataReturned) {
      accord = <Accordion handler={this.handler} {...this.state}/>;
    } else {
      accord = <Preloader />
    }

    // if (!matchesReturned) {
    //     console.log('No matches yet');
    // } else {
    //   console.log('Matches found:',this.state.resourceList)
    // }

    return (
      <div className='search'>
        <Row>

          <Col s={12}>
            {accord}
          </Col>

          <Col s={12}>
            <Card>
              <h5>Current Criteria:</h5>
              <Row>
                <Col s={12}>
                  {
                    this.state.criteriaList.map((criteria,i) =>
                      <a key={i} className="chip criteria-tag" id={criteria.category} onClick={this.closeTag}>
                        {criteria.value}
                        <i className="close material-icons">close</i>
                      </a>
                  )
                  }
                </Col>
              </Row>
            </Card>
          </Col>

          <Col s={12} >
            <h5>Matching Resources:</h5>
            <Row>
                {
                  this.state.resourceList.map((resource, i) =>
                     this.renderReturnedResources(resource, i)
                    )
                }
            </Row>
          </Col>

        </Row>
      </div>
    );


  }
}

export default Search;


