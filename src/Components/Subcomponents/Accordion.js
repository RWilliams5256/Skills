import React, { Component } from 'react';
import { Row, Col, Collapsible, CollapsibleItem } from 'react-materialize';


class Accordion extends Component {

    constructor() {
        super();
        this.state = {
            roles: ['Manager', 'Sr. Consultant', 'Jr. Consultant', 'Analyst/Developer'],
            skills: ['Java', 'Javascript', 'React', 'Firebase', 'NodeJS'],
            experienceLevel: ['New Hire', 'Junior', 'Mid-level', 'Senior', 'College Graduate'],
            statuses: ['Active', 'Inactive'],
        }
    }
    render() {
    return <Row>
        <Col s={12}>
          <Collapsible>
            <CollapsibleItem header="Role">
              {this.state.roles.map((role) =>
                <p>
                    <label>
                        <input type="checkbox" />
                        <span>{role}</span>
                    </label>
                </p>
              )}
            </CollapsibleItem>
            <CollapsibleItem header="Skills">
                {this.state.skills.map((skill) =>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>{skill}</span>
                        </label>
                    </p>
                )}
            </CollapsibleItem>
            <CollapsibleItem header="Experience Level">
                {this.state.experienceLevel.map((level) =>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>{level}</span>
                        </label>
                    </p>
                )}
            </CollapsibleItem>
            <CollapsibleItem header="Status">
                {this.state.statuses.map((status) =>
                    <p>
                        <label>
                            <input type="checkbox" />
                            <span>{status}</span>
                        </label>
                    </p>
                )}
            </CollapsibleItem>
          </Collapsible>
        </Col>
      </Row>;
    }
}

export default Accordion;


