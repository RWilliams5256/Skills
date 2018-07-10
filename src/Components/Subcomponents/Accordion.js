import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import Checkbox from './Checkbox';

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
            {this.state.allItems.map((category,i) => (
              <CollapsibleItem header={category.listName.toUpperCase()} key={i}>
                {category.listItem.map((item,j) => (
                  <Checkbox key={j} name={item} id={item} span={item} onChange={this.handleEvent} />
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
