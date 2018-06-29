import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';

import './Accordion.css';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: ['test','test2'],
      skills: [],
      experienceLevel: [],
      statuses: [],
    };
  }

  componentWillMount() {
    console.log('accordion will mount')
    var categoryList = sessionStorage.getItem('categories').split(',').sort()
    this.setState({'allCategories': categoryList})
  }

  componentDidMount() {
    console.log('Accordion mounted')
  }

  handleEvent(e) {
    var selected =[]
    $('input[type="checkbox"]:checked').each( () => {
        selected.push($(e.target).attr('name'));
    });

    console.log('selected', selected)
    sessionStorage.setItem('currentCriteria', selected)
  }


  render() {
    return (
      <Row>
        <Col s={12}>
          <Collapsible>
            {this.state.allCategories.map((category,i) => (
              <CollapsibleItem header={category.toUpperCase()} key={i}>
                {this.state.roles.map((role,i) => (
                  <p key={i}>
                    <label>
                      <input type='checkbox' className='filled-in' id={role} name={role} onClick={this.handleEvent} onChange={this.props.handler}/>
                      <span>{role}</span>
                    </label>
                  </p>
                ))}
              </CollapsibleItem>
            ))}
          </Collapsible>
        </Col>
      </Row>
    );
  }
}

export default Accordion;
