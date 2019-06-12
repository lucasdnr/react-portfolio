import React from "react";
import { Row, Col, Card } from 'react-materialize';
import UserProfile from '../UserProfile/UserProfile';
import Experience from '../Experience/Experience';
import CompanyAvatar from '../../assets/images/company.png';
import CompanyAvatar2 from '../../assets/images/company2.png';

const home = () => (
  <Row>
    <Col m={3} s={12}>
      <UserProfile />
    </Col>
    <Col m={9} s={12}>
        <h5 className="subtitle">About Me</h5>
        <Card>
          <div>
            <p><b>Lorem</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
            <br/>
            <p><b>Ipsum</b></p>
            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>
        </Card>
        <h5 className="subtitle">Experiences</h5>
        <Experience title="Ruby Developer"
                    company="Soundcloud"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={CompanyAvatar}
        />
        <Experience title="React Developer"
                    company="Twitter"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laborevoluptate velit esse cillum dolore eu fugiat id est laborum."
                    avatar={CompanyAvatar2}                    
        /> 
    </Col>
  </Row>
);

export default home;