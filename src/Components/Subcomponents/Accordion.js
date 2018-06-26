import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';

import './Accordion.css';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      roles: [],
      skills: [],
      experienceLevel: [],
      statuses: []
    };

  }

  componentWillMount() {
    console.log('accordion will mount')
    console.log(sessionStorage.getItem('allLists'))
  }

  componentDidMount() {
    console.log('Accordion mounted')
  }

  handleEvent() {
    // $('input[type='checkbox']').change(function () {
    //     if ($('input[type='checkbox']:checked')) {
    //         // $('input[type='checkbox']:checked').each(function(){
    //         //     console.log(this.name);
    //         // });
    //         // console.log(this.name);
    //     }
    // })
    var selected =[]
    $('input[type="checkbox"]:checked').each(function () {
        selected.push($(this).attr('name'));
    });

    console.log('selected', selected)
  }

  sendToParent(value){
    this.props.handler(value);
  }



  render() {
    return (
      <Row>
        <Col s={12}>
          <Collapsible>
            <CollapsibleItem header='Role'>
              {this.state.roles.map(role => (
                <p>
                  <label>
                    <input type='checkbox' className='filled-in' name={role} onChange={this.handleEvent}/>
                    <span>{role}</span>
                  </label>
                </p>
              ))}
            </CollapsibleItem>
            <CollapsibleItem header='Skills'>
              {this.state.skills.map(skill => (
                <p>
                  <label>
                    <input name='skills' type='checkbox' />
                    <span>{skill}</span>
                  </label>
                </p>
              ))}
            </CollapsibleItem>
            <CollapsibleItem header='Experience Level'>
              {this.state.experienceLevel.map(level => (
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>{level}</span>
                  </label>
                </p>
              ))}
            </CollapsibleItem>
            <CollapsibleItem header='Status'>
              {this.state.statuses.map(status => (
                <p>
                  <label>
                    <input type='checkbox' />
                    <span>{status}</span>
                  </label>
                </p>
              ))}
            </CollapsibleItem>
          </Collapsible>
        </Col>
      </Row>
    );
  }
}

export default Accordion;
