import React from 'react';
import { Navbar, Row } from 'react-materialize';
import { NavLink } from 'react-router-dom';

const header = () => {
    const sections = [{
        name: "Home",
        url: "/"
    },
    {
        name: "About",
        url: "about"
    },
    {
        name: "Services",
        url: "services"
    },
    {
        name: "Contact",
        url: "contact"
    }];

    const navLinks = sections.map(section => {
        return (
            <NavLink to={section.url}>{section.name}</NavLink>
        )
    });

    return (
        <Row>
            <Navbar className="blue-grey darken-4">
                {navLinks}
            </Navbar>
        </Row>
    );
}

export default header;