import React from 'react'
import {Link} from 'react-router-dom'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'


class Header extends React.Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
              <Nav.Link href="/">Logout</Nav.Link>
                <Nav.Link href="posts">Posts</Nav.Link>
                <Nav.Link href="users">Users</Nav.Link>          
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        )
    }

}

export default Header;