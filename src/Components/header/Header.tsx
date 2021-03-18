import React from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import Logo from '~/assets/header/logo.png';
import './Header.css';

// eslint-disable-next-line @typescript-eslint/ban-types
const Header: React.FC<{}> = () => {
    return (
        <div id="lcdd-header">
            <Navbar bg="lcdd-primary" expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <img alt="" src={Logo} width="154" className="d-inline-block align-top" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav>
                        <div id="navbar-main" className="navbar-nav">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#/questions/" data-toggle="dropdown">Vos questions</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#/questions/1">Questions en vidéo</a></li>
                                    <li><a className="dropdown-item" href="#/questions/2">Questions en attente</a></li>
                                    <li><a className="dropdown-item" href="#/questions/3">Sugérer une question</a></li>
                                </ul>
                            </li>
                            <Nav.Link className="nav-item" href="#/webTV">WebTV</Nav.Link>
                            <Nav.Link className="nav-item" href="#/speakers/">Nos intervenants</Nav.Link>
                            <Nav.Link className="nav-item" href="#/becomeSpeaker">Devenir intervenant</Nav.Link>
                            <Nav.Link className="nav-item" href="#/contact">Contactez nous</Nav.Link>
                        </div>
                        <div id="navbar-right" className="navbar-nav">
                            <Nav.Link href="#/signUp" className="btn-link" style={{ marginRight: "2em" }}>{"S'inscrire"}</Nav.Link>
                            <a href="#/signIn"><Button variant="outline-primary" id="connexion-btn">Se connecter</Button></a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;

Header.displayName = 'Header';
