import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Logo from '../../assets/header/logo.png';

// eslint-disable-next-line @typescript-eslint/ban-types
const Header: React.FC<{}> = () => {
    return (
        <div>
            <Navbar bg="lcdd-primary" expand="sm" variant="dark">
                <div className="mr-5">
                    <Navbar.Brand href="/">
                        <img alt="" src={Logo} width="154" className="d-inline-block align-top" />
                    </Navbar.Brand>
                </div>
                {/* <div> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#/questions/" data-toggle="dropdown">Vos questions</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#/questions/1">Questions en vidéo</a></li>
                                <li><a className="dropdown-item" href="#/questions/2">Questions en attente</a></li>
                                <li><a className="dropdown-item" href="#/questions/3">Sugérer une question</a></li>
                            </ul>
                        </li>

                        <Nav.Link href="#/webTV">WebTV</Nav.Link>
                        <Nav.Link href="#/speakers/">Nos intervenants</Nav.Link>
                        <Nav.Link href="#/contact">Contactez nous</Nav.Link>
                    </Nav>
                    <Nav className="mr-5">
                        <Nav.Link href="#/signUp" className="btn-link">{"S'inscrire"}</Nav.Link>
                        <Button variant="outline-primary">Se connecter</Button>
                    </Nav>
                </Navbar.Collapse>
                {/* </div> */}
            </Navbar>
        </div>
    );
};

export default Header;

Header.displayName = 'Header';
