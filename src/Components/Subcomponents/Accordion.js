import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';
import $ from 'jquery';
import { DB_CONFIG } from '../../config/db_config';
import firebase from 'firebase';

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

    if (!firebase.apps.length) {
			firebase.initializeApp(DB_CONFIG);
		}
		this.db = firebase.firestore();
		const settings = { timestampsInSnapshots: true };
		this.db.settings(settings);
  }

  componentWillMount() {
    var allSkills = [];
    var allStatuses = [];
    var allRoles = [];
    var allLevels =[];
		this.db.collection('lists').onSnapshot(function(querySnapshot) {
			querySnapshot.forEach(function(doc) {

        console.log(doc.data())
        var listName = doc._document.data.internalValue.root.value.internalValue;
        var name = doc._document.data.internalValue.root.right.value.internalValue;

        if(listName === 'skills') {
          allSkills.push(name)
        } else if (listName === 'status') {
          allStatuses.push(name)
        } else if (listName === 'roles') {
          allRoles.push(name)
        } else if (listName === 'experience level') {
          allLevels.push(name)
        }
			});
    });

    this.setState(() => ({
      skills: allSkills,
      roles: allRoles,
      statuses: allStatuses
		}));

    console.log(this.state)
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
