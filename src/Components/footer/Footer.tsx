import React, { FC } from 'react';
import { Navbar, Row } from 'react-bootstrap';
import { ReactComponent as Facebook } from '~/assets/icons/Facebook.svg';
import { ReactComponent as LinkedIn } from '~/assets/icons/LinkedIn.svg';
import { ReactComponent as Twitter } from '~/assets/icons/Twitter.svg';
import { ReactComponent as Instagram } from '~/assets/icons/Instagram.svg';
import './Footer.scss';

const Footer: FC = () => (
    <div id="lcdd-footer">
        <Navbar bg="lcdd-primary" expand="sm">
            <div id="footer-contact">
                {/* Disponible que pour les professionnels */}
                {/* <a href="#/speakers">Devenir intervenant</a> | */}
                <a href="/contact-us">Contact</a>
                {' '}
                |
                <a href="/legal-notice">Mentions Légales</a>
            </div>

            <div id="footer-right">
                <Row id="footer-social" style={{ flexWrap: 'nowrap' }}>
                    <div>
                        <a href="https://facebook.com/lachainedudroit">
                            <Facebook />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com/company/la-cha%C3%AEne-du-droit">
                            <LinkedIn />
                        </a>
                    </div>
                    <div>
                        <a href="https://twitter.com/lachainedudroit">
                            <Twitter />
                        </a>
                    </div>
                    <div>
                        <a href="https://www.instagram.com/lachainedudroit/">
                            <Instagram />
                        </a>
                    </div>
                </Row>

                <div id="footer-condition" style={{ color: 'white' }}>
                    © 2020 La Chaine du Droit. Tous droits réservés.
                </div>
            </div>
        </Navbar>
    </div>
);

export default Footer;

Footer.displayName = 'Footer';
