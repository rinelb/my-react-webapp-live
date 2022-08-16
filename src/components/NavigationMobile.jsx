import { Routes, Route} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavItem, NavDropdown,Offcanvas,Container } from 'react-bootstrap';
import Books from '../pages/Books'; 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Course';
import Sanskrit  from '../pages/Sanskrit';

   class NavigationMobile extends Component {
  render() {
    return (
<>
  {[false].map((expand) => (
    <Navbar key={expand} bg="light" expand={expand} className="mb-3">
      <Container fluid>
        <Navbar.Brand href="#" >Rinel's World</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
          color='white'
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Menu ... (not the food kind)
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body >
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Nav.Link href="/sanskrit">Sanskrit</Nav.Link>
              <Nav.Link href="/learnSanskrit">Learn Sanskrit</Nav.Link>
              <Nav.Link href="/aol">AOL</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <NavDropdown
                title="Dropdown"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  ))}
</>);
  }
}

export default NavigationMobile;