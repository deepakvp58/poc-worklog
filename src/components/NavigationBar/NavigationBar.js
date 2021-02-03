import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
            <Navbar collapseOnSelect expand="sm" bg="primary" variant="light">
                <Navbar.Brand>GSSP WorkLog</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink className="d-inline p-2 bg-primary text-dark" to="/Home">Home</NavLink>
                        <NavLink className="d-inline p-2 bg-primary text-dark" to="/DetailsForm">Enter-work-log</NavLink>
                        <NavLink className="d-inline p-2 bg-primary text-dark" to="/Login">Logout</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;