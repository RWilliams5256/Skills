import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import Checkbox from './Checkbox';
import helpers from '../../utils/helpers';

import './Accordion.css';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this)

  }

  componentWillMount() {
    console.log('accordion will mount')
    var allCategories = sessionStorage.getItem('allCategories')
    this.setState({
      'allItems': JSON.parse(allCategories)
    })
  }

  componentDidMount() {
    console.log('Accordion mounted')
  }

  handleEvent() {
    var listOfCriteria = []

    $('input[type="checkbox"]:checked').each(function() {

        var selectedItem = {
          'value': $(this).attr('id'),
          'category': $(this).attr('data-category')
        }

        listOfCriteria.push(selectedItem);
    });
    console.log('selectedCriteria', listOfCriteria)
    helpers.dbCallforPeople(listOfCriteria)
    this.props.handler(listOfCriteria)
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
                  <Checkbox key={j} name={item} id={item} span={item} onChange={this.handleEvent} category={category.listName}/>
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
