import Container from 'react-bootstrap/Container'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap'
import discord_logo from '../../assets/discord_logo.png'



const NavBar = () => {

    const navSelect = (key) => {

    }

    return(
        <Navbar bg="dark" variant="dark">
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
                <LinkContainer to="/join">
                    <Nav.Link eventKey="join">Join</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <Nav.Item>
                <LinkContainer to="/">
                    <Nav.Link eventKey="home">Home</Nav.Link>
                </LinkContainer>
            </Nav.Item>
            <NavDropdown title="Rules">
                <NavDropdown.Item href="/msc-rules">
                    MSC
                </NavDropdown.Item>
                <NavDropdown.Item href="/sms-rules">
                    SMS
                    </NavDropdown.Item>
                </NavDropdown>
            <NavDropdown title="Rankings">
                <NavDropdown.Item href="/rankings?game=msc">
                    MSC
                </NavDropdown.Item>
                <NavDropdown.Item href="/rankings?game=sms">
                    SMS
                    </NavDropdown.Item>
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}

export default NavBar;