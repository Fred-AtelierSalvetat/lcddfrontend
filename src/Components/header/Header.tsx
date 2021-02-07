import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Logo from '../../assets/header/logo.png';

// eslint-disable-next-line @typescript-eslint/ban-types
const Header: React.FC<{}> = () => {
    return (
        <div>
            <Navbar bg="lcdd-primary" expand="md" variant="dark">
                <div className="mr-5">
                    <Navbar.Brand href="/">
                        <img alt="" src={Logo} width="154" className="d-inline-block align-top" />
                    </Navbar.Brand>
                </div>
                <div className="ml-5">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#/webTV">WebTV</Nav.Link>

                            <Nav.Link href="#/speakers/">Nos intervenants</Nav.Link>

                            <Nav.Link href="#/contact">Contacter nous</Nav.Link>

                            <Nav.Link href="#/signUp">{"S'inscrire"}</Nav.Link>

                            <NavDropdown title="Vos questions" id="basic-nav-dropdown" className="text-dark">
                                <NavDropdown.Item href="#action/3.1">Vos questions</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </div>
    );
};

export default Header;

Header.displayName = 'Header';
