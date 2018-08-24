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
      resourceList: [
        {
          firstName: 'Ryan Rodwell',
          currentProject: 'BA',
          email: ['ryanrodwell@gmail.com'],
          phone: '12346789',
          colleges: [{'name':'Georgia Tech'}],
          status: 'employee',
          resumes: [{
            'name': 'pdfresume.pdf',
            'fileURL': 'https://firebasestorage.googleapis.com/v0/b/shomsi-test.appspot.com/o/pdfresume.pdf?alt=media&token=445c5465-73ed-416a-9c7d-83709463e3d5',
            'dateCreated': ''
          }]

        },
        {
          firstName: 'John Doe',
          currentProject: 'Developer',
          email: ['jdoe@gmail.com'],
          phone: '12346789',
          colleges: [{'name':'Georgia Southern'}],
          status: 'employee',
          resumes: [{
            'name': 'pdfresume.pdf',
            'fileURL': 'https://firebasestorage.googleapis.com/v0/b/shomsi-test.appspot.com/o/pdfresume.pdf?alt=media&token=445c5465-73ed-416a-9c7d-83709463e3d5',
            'dateCreated': ''
          }]

        },
        {
          firstName: 'Jacob Stone',
          currentProject: 'Developer',
          email: ['jstone@gmail.com'],
          phone: '12346789',
          colleges: [{'name':'Berry'}],
          status: 'employee',
          resumes: [{
            'name': 'pdfresume.pdf',
            'fileURL': 'https://firebasestorage.googleapis.com/v0/b/shomsi-test.appspot.com/o/pdfresume.pdf?alt=media&token=445c5465-73ed-416a-9c7d-83709463e3d5',
            'dateCreated': ''
          }]

        },
      ],
      criteriaList: [],
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

  handler(listOfCriteria, searchCriteria) {
    console.log("handler", listOfCriteria, searchCriteria)


    var getUserByMultipleSkill = "https://us-central1-shomsi-test.cloudfunctions.net/getUserByMultipleSkill";
    var proxyurl = "https://cors-anywhere.herokuapp.com/";
    var data = JSON.stringify(searchCriteria)
    // console.log("data",data);

    fetch(proxyurl + getUserByMultipleSkill, {
        method: 'POST',
        body: data,
        headers: {
          'Content-Type': 'application/json',
          // 'Access-Control-Allow-Origin': '*'
        }
      }).then(response => {
        return response.json();
      })
      .then(myJson => {
        console.log(JSON.stringify(myJson))

        this.setState({
          'criteriaList': listOfCriteria,
          'resourceList': myJson,
          'returnedMatches': true
        })

      })
      .catch(err => {
        console.log("Error:", err)
      });


  }

  renderReturnedResources(match,i) {

    return (
      <ResourceCard key={i} name={match.firstName} email={match.email[0]}  school={match.colleges[0].name} position={match.currentProject} status={match.status} resume={match.resumes[0]}/>
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


