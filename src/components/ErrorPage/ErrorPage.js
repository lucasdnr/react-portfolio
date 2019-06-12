import React from "react";
import { Row, Col, CardPanel } from 'react-materialize';

const errorPage = () => (
    <Row>
        <Col s={12}>
            <CardPanel className="teal">
                <span className="white-text">
                    404 Page Not Found !!!
                </span>
            </CardPanel>
        </Col>
    </Row>
);

export default errorPage;