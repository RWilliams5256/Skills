import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';

import './Accordion.css';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this)

    this.state = {
      roles: ['test','test2','test3'],
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

  handleEvent() {
    var selected = []
    $('input[type="checkbox"]:checked').each(function() {
        selected.push($(this).attr('id'));
    });
    console.log('selected', selected)
    this.props.handler(selected)
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
                      <input type='checkbox' className='filled-in' id={role} name={role} onChange={this.handleEvent} />
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
