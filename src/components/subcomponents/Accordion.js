import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import Checkbox from './Checkbox';
import RadioButton from './RadioButton';
import './Accordion.css';
import { functions } from '../../firebase/firebase';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this)
    this.renderOptions = this.renderOptions.bind(this)
  }

  componentWillMount() {
    // console.log('accordion will mount')
    var allCategories = sessionStorage.getItem('allCategories')
    this.setState({
      'allItems': JSON.parse(allCategories)
    })
  }

  componentDidMount() {
    // console.log('Accordion mounted')
  }

  handleEvent() {
    let listOfCriteria = []
    let skills = []
    let searchCriteria = {};

    $('input[type="radio"]:checked').each(function () {
      let category = $(this).attr('name');
      var selectedItem = {
        'value': $(this).attr('id'),
        'category': $(this).attr('name')
      }
      listOfCriteria.push(selectedItem);

      if (category === 'current project') {
        searchCriteria['currentProject'] = $(this).attr('id');
      // } else if (category === 'known?') {
      //   searchCriteria.known = $(this).attr('id');
      } else if (category === 'experience level') {
        searchCriteria['experienceLevel'] = $(this).attr('id');
      } else if (category === 'status') {
        searchCriteria['status'] = $(this).attr('id');
      // } else if (category === 'resume rank') {
      //   searchCriteria.resumeRank = $(this).attr('id');
      } else if (category === 'role') {
        searchCriteria['role'] = $(this).attr('id');
      } else if (category === 'referral source') {
        searchCriteria['referralSource'] = $(this).attr('id');
      }

    });

    // Capture selected checkboxes
    $('input[type="checkbox"]:checked').each(function() {
        var selectedItem = {
          'value': $(this).attr('id'),
          'category': $(this).attr('name')
        }
        listOfCriteria.push(selectedItem);
        skills.push($(this).attr('id'));
        searchCriteria['skills'] = skills;

    });

    // Send selected criteria to parent component
    this.props.handler(listOfCriteria, searchCriteria)
  }

  renderOptions(index,name,item,event) {
    if(name === 'other skills' || name === 'tech skills') {
      return (
        <Checkbox key={index} name={name} id={item} span={item} onChange={event} />
      )
    } else {
      return (
        <RadioButton key={index} name={name} id={item} span={item} onChange={event} />
      )
    }
  }

  render() {

    return (
      <Row>
        <Col s={12}>
          <Collapsible>
            {this.state.allItems.map((category,i) => (
              <CollapsibleItem header={category.listName.toUpperCase()} key={i}>
                <Row>
                {category.listItem.map((item,j) => (
                  this.renderOptions(j,category.listName,item,this.handleEvent)
                ))}
                </Row>
              </CollapsibleItem>
            ))}
          </Collapsible>
        </Col>
      </Row>
    );
  }
}

export default Accordion;
