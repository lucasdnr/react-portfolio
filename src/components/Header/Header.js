import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const header = () => {
    return (
        <Row>
            <Navbar className="blue-grey darken-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="about">About</NavLink>
                <NavLink to="services">Services</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </Navbar>
        </Row>
    );
}

export default header;