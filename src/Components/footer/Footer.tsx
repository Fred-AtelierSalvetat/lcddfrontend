import React from "react";
import { Navbar, Row, Col } from "react-bootstrap";
import { ReactComponent as Social0 } from "~/assets/icons/Social-0.svg";
import { ReactComponent as Social1 } from "~/assets/icons/Social-1.svg";
import { ReactComponent as Social2 } from "~/assets/icons/Social-2.svg";
import { ReactComponent as Social3 } from "~/assets/icons/Social-3.svg";
import "./Footer.css";

const Footer: React.FC<{}> = () => {

  return (
    <Navbar bg="lcdd-primary" expand="sm" id="footer">
      <Row style={{ width: "100%", margin: "unset" }}>
        <Col lg={4} id="footer-contact">
          <a href="#/speakers">Devenir intervenant</a> |
          <a href="#/contact">Contact</a> |
          <a href="#/mentions-legales">Mentions Légales</a>
        </Col>

        <Col lg={4} style={{ color: "white" }}>
          © 2020 La Chaine du Droit. Tous droits réservés.
        </Col>

        <Col lg={2}>
        </Col>

        <Col lg="auto">
          <Row id="social" style={{ flexWrap: "nowrap" }}>
            <Col sm="auto"><a href="https://facebook.com/lachainedudroit"><Social0 /></a></Col>
            <Col sm="auto"><a href="https://www.linkedin.com/company/la-cha%C3%AEne-du-droit"><Social1 /></a></Col>
            <Col sm="auto"><a href="https://twitter.com/lachainedudroit"><Social2 /></a></Col>
            <Col sm="auto"><a href="https://www.instagram.com/lachainedudroit/"><Social3 /></a></Col>
          </Row>
        </Col>
      </Row>
    </Navbar>
  );
};

export default Footer;

Footer.displayName = "Footer";
