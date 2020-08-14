import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/">Yakka - Teach you kids the value of hard work and it's reward</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="http://localhost:3000/categories">Categories</Nav.Link>
          <Nav.Link href="http://localhost:3000/chores/new">New Chore</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar