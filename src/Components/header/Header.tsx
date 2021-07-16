import React, { FC, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import Logo from '~/assets/header/logo.png';
import { SignInContainer } from '../sign_in';
import { ReactComponent as DropdownIcon } from '~/assets/icons/dropdown-chevron.svg';
import { checkScroll } from './checkScroll';
import Profile from './Profile';
import Notifications from './Notifications';
import { connect } from 'react-redux';
import './Header.scss';

import PropTypes from 'prop-types';

const headerPropsTypes = {
    loggedIn: PropTypes.bool,
};

const Header: FC<PropTypes.InferProps<typeof headerPropsTypes>> = (props) => {
    useEffect(() => {
        const header = document.getElementById('lcdd-header');
        header && window.addEventListener('scroll', () => checkScroll(header));
    });

    return (
        <div id="lcdd-header">
            <Navbar bg="lcdd-primary" expand="lg" variant="dark">
                <Navbar.Brand href="/">
                    <img
                        alt="La chaine du droit"
                        src={Logo}
                        width="154"
                        height="46"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav activeKey={window.location.pathname}>
                        <div id="navbar-main" className="navbar-nav">
                            <div className="nav-item dropdown">
                                <Nav.Link href="/questions/" data-toggle="dropdown">
                                    Vos questions
                                    <DropdownIcon style={{ marginLeft: '8px' }}></DropdownIcon>
                                </Nav.Link>
                                <ul className="dropdown-menu dropdown-menu-standard">
                                    <li>
                                        <a className="dropdown-item" href="/questions/1">
                                            Questions en vidéo
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/questions/2">
                                            Questions en attente
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/questions/3">
                                            Sugérer une question
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <Nav.Link className="nav-item" href="/webTV">
                                WebTV
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="/speakers/">
                                Nos intervenants
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="/devenirintervenant">
                                Devenir intervenant
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="/contact-us">
                                Contactez nous
                            </Nav.Link>
                        </div>
                        <div id="navbar-right" className="navbar-nav">
                            {props.loggedIn ? (
                                <>
                                    <Notifications number={2} />
                                    <Profile />
                                </>
                            ) : (
                                <>
                                    <Nav.Link
                                        href="/sign-up"
                                        className="nav-item btn-link"
                                        style={{ marginRight: '1.2em' }}
                                    >
                                        {"S'inscrire"}
                                    </Nav.Link>
                                    <SignInContainer />
                                </>
                            )}
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

Header.propTypes = headerPropsTypes;

const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
};

const connectedHeader = connect(mapStateToProps)(Header);

export default connectedHeader;
