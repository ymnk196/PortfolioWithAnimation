import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Container } from 'react-bootstrap';

export default function NavBar() {
    return (
       <React.Fragment>
           <Navbar fixed="top" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link className="tab" href="#about">About Me</Nav.Link>
                            <Nav.Link className="tab" href="#project">Projects</Nav.Link>
                            <Nav.Link className="tab" href="#gallery">Gallery</Nav.Link>
                            <Nav.Link className="tab" href="#language">Language Known</Nav.Link>
                            <Nav.Link className="tab" href="#experience">Experience Details</Nav.Link>
                            <Nav.Link className="tab" href="#download">Download Resume</Nav.Link>
                            <Nav.Link className="tab" href="#contact">Contact</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
       </React.Fragment>
    )
}
