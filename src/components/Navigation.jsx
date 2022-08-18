import { Routes, Route} from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavItem ,NavDropdown} from 'react-bootstrap';
import Books from '../pages/Books'; 
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Home from '../pages/Home';
import Course from '../pages/Course';
import About from '../pages/About';
import AOL from '../pages/AOL';
import Sanskrit  from '../pages/Sanskrit';
import SanskritDisplay from '../pages/SanskritDisplay';

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

                <NavItem eventkey={1} href="/aol">
                  <Nav.Link as={Link} to="/aol" >AOL</Nav.Link>
                </NavItem>

                {/* <NavItem eventkey={1} href="/sanskrit">
                  <Nav.Link as={Link} to="/sanskrit" >Sanskrit</Nav.Link>
                </NavItem> */}
              
                <NavItem eventkey={1} href="/courses">
                  <Nav.Link as={Link} to="/courses" >Courses</Nav.Link>
                </NavItem>
                {/* <NavItem eventkey={1} href="/learnMantra">
                  <Nav.Link as={Link} to="/learnMantra" >Learn Sanskrit</Nav.Link>
                </NavItem> */}
                <NavItem eventkey={1} href="/about">
                  <Nav.Link as={Link} to="/about" >About</Nav.Link>
                </NavItem>

                {[false].map((expand) => ( <NavDropdown
                title="Sanskrit"
                id={`offcanvasNavbarDropdown-expand-${expand}`}
              >
                <NavDropdown.Item href="/sanskrit/letters">Fundemental Letters</NavDropdown.Item>
                <NavDropdown.Item href="/sanskrit/learnBasic">Fundemental Test</NavDropdown.Item>
                <NavDropdown.Item href="/sanskrit/learnMantra">Mantra Test</NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item> */}
              </NavDropdown>))}
                
              </Nav>
              <Nav className='ms-auto pull-right'>
              <NavItem className='  me-1'>
                <Form className="d-flex  " >
                    <FormControl className='me-1' type="text"  placeholder="Search" />
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
            <Route exact path='/learnSanskrit' element={() => <SanskritDisplay />} />
            <Route exact path='/courses' element={() => <Course />} />
            <Route exact path='/sanskrit' element={() => <Sanskrit />} />
            <Route exact path='/about' element={() => <About />} />
            <Route exact path='/aol' element={() => <AOL />} />
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