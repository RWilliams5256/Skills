import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import Checkbox from './Checkbox';
// import helpers from '../../utils/helpers';

import './Accordion.css';
// import { functions } from '../../firebase/firebase';


class Accordion extends Component {
  constructor(props) {
    super(props);
    this.handleEvent = this.handleEvent.bind(this)

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

    const searchCriteria = {
      'currentProject': '',
      'experienceLevel': '',
      'known': '',
      'techSkill': {},
      'otherSkills': {},
      'role': '',
      'referralSource': '',
      'resumeRank': '',
      'status': '',
    };

    let $box = $(this);
  
    console.log($box)
    // if ($box.is(":checked")) {
    //   let category = $box.attr("data-category");

    //   console.log('category selected:', category)
    //   if (category === "current project") {
    //     // the name of the box is retrieved using the .attr() method
    //     // as it is assumed and expected to be immutable
    //     var group = "input:checkbox[name='" + $box.attr("name") + "']";
    //     // the checked state of the group/box on the other hand will change
    //     // and the current value is retrieved using .prop() method
    //     $(group).prop("checked", false);
    //     $box.prop("checked", true);
    //     searchCriteria.currentProject = $(this).attr("id");
    //   } else {
    //     $box.prop("checked", false);
    //   }

    // }

    $('input[type="checkbox"]:checked').each(function() {
        let category = $(this).attr('name');

        if(category === 'current project'){
          if ($(this).is(":checked")) {
            // the name of the box is retrieved using the .attr() method
            // as it is assumed and expected to be immutable
            var group = "input:checkbox[name='" + $(this).attr("name") + "']";
            // the checked state of the group/box on the other hand will change
            // and the current value is retrieved using .prop() method
            $(group).prop("checked", false);
            $(this).prop("checked", true);
            searchCriteria.currentProject = $(this).attr('id');
          } else {
            $(this).prop("checked", false);
          }
        } else if(category === 'other skills') {
          searchCriteria.otherSkills[$(this).attr('id')] = true;
        } else if(category === 'known?') {
          searchCriteria.known = $(this).attr('id');
        } else if(category === 'experience level') {
          searchCriteria.experienceLevel = $(this).attr('id');
        } else if(category === 'status') {
          searchCriteria.status = $(this).attr('id');
        } else if(category === 'resume rank') {
          searchCriteria.resumeRank = $(this).attr('id');
        } else if(category === 'role') {
          searchCriteria.role = $(this).attr('id');
        } else if(category === 'tech skills') {
          searchCriteria.techSkill[$(this).attr('id')] = true;
        } else if(category === 'referral source') {
          searchCriteria.referralSource = $(this).attr('id');
        }

    });

    // console.log('selectedCriteria', listOfCriteria)
    console.log(searchCriteria)

    var listOfResources;

    // functions.https.onRequest()
    // helpers.dbCallforPeople(listOfCriteria, function(matchingPeople){
    //   listOfResources = matchingPeople
    // })

    // this.props.handler(listOfCriteria, listOfResources)
    console.log('accordion matching people:',listOfResources)
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
                  <Checkbox key={j} name={category.listName} id={item} span={item} onChange={this.handleEvent} />
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
