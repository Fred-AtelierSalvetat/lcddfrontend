import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { ReactComponent as Social0 } from "~/assets/icons/Social-0.svg";
import { ReactComponent as Social1 } from "~/assets/icons/Social-1.svg";
import { ReactComponent as Social2 } from "~/assets/icons/Social-2.svg";
import { ReactComponent as Social3 } from "~/assets/icons/Social-3.svg";
import "./Footer.scss";

const Footer: React.FC<{}> = () => {

  return (
    <div id="lcdd-footer">

      <Navbar bg="lcdd-primary" expand="sm">
        <div id="footer-contact">
          {/* Disponible que pour les professionnels */}
          {/* <a href="#/speakers">Devenir intervenant</a> | */}
          <a href="/contact-us">Contact</a> |
          <a href="/legal-notice">Mentions Légales</a>
        </div>

        <div id="footer-right">
          <Row id="footer-social" style={{ flexWrap: "nowrap" }}>
            <div><a href="https://facebook.com/lachainedudroit"><Social0 /></a></div>
            <div><a href="https://www.linkedin.com/company/la-cha%C3%AEne-du-droit"><Social1 /></a></div>
            <div><a href="https://twitter.com/lachainedudroit"><Social2 /></a></div>
            <div><a href="https://www.instagram.com/lachainedudroit/"><Social3 /></a></div>
          </Row>

          <div id="footer-condition" style={{ color: "white" }}>
            © 2020 La Chaine du Droit. Tous droits réservés.
          </div>
        </div>
      </Navbar>

    </div >
  );
};

export default Footer;

Footer.displayName = "Footer";
