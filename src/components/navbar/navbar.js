import Container from 'react-bootstrap/Container'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import { Link } from "react-router-dom";
import discord_logo from '../../assets/discord_logo.png'
import React from 'react';



const NavBar = () => {

    const navSelect = (key) => {

    }

    return(
        <Navbar bg="dark" expand="lg" variant="dark" collapseOnSelect>
            <Container fluid>
                <LinkContainer to="/">
                    <Navbar.Brand> 
                        <img
                        alt=""
                        src={discord_logo}
                        width="100"
                        height="100"
                        className="d-inline-block align-top"
                        />{' '}
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav onSelect={navSelect}>
                        <Nav.Item>
                                <Nav.Link as = {Link} to="/join" eventKey="join">Join</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                                <Nav.Link as = {Link} to="/" eventKey="home">Home</Nav.Link>
                        </Nav.Item>
                        <NavDropdown title="Rules">
                            <NavDropdown.Item as = {Link} to="/msc-rules">
                                MSC
                            </NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/sms-rules">
                                SMS
                                </NavDropdown.Item>
                            </NavDropdown>
                        <NavDropdown title="Rankings">
                            <NavDropdown.Item as = {Link} to="/msc-rankings">
                                MSC
                            </NavDropdown.Item>
                            <NavDropdown.Item as = {Link} to="/sms-rankings">
                                SMS
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Item>
                                <Nav.Link as = {Link} to="/tournaments" eventKey="tournaments">Tournaments</Nav.Link>
                            </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
}

export default NavBar;