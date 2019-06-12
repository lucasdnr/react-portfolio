import React from "react";
import { Row, Col, Card } from 'react-materialize';

const experience = (props) => (
  <Card>
      <Row>
        <Col s={2} m={2}>
          <img src={props.avatar} className="circle responsive-img" alt="avatar"/>
          { props.name }
        </Col>

        <Col m={10} s={10}>
          <p><b>{props.title} in <span className="grey darken-2 white-text">{props.company}</span></b></p>
          <p>{props.description}</p>
        </Col>
      </Row>
  </Card>
);

export default experience;