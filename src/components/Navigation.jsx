import { Routes, Route} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import Books from '../pages/Books'; 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Course';

   class Navigation extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar className="navbar navbar-expand-lg navbar-light bg-light">
            <Navbar.Brand as={Link} to="/" >Home</Navbar.Brand>
            <Navbar.Collapse>
              <Nav >
                <NavItem eventkey={1} href="/books">
                  <Nav.Link as={Link} to="/books" >Books</Nav.Link>
                </NavItem>
              
                <NavItem eventkey={1} href="/course">
                  <Nav.Link as={Link} to="/course" >Courses</Nav.Link>
                </NavItem>
                
              </Nav>
              <Nav className='ms-auto'>
              <NavItem className='navbar-right'>
                <Form className="d-flex" >
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> 
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
        <div>
          <Routes>
            <Route exact path='/books' element={() => <Books />} />
            <Route exact path='/course' element={() => <Course />} />
            <Route exact path='/' element={() => <Home />} />
            {/* <Route render={function () {
              return <p>Not found</p>
            }} /> */}
          </Routes>
        </div>
      </div>
    );
  }
}

export default Navigation;