import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import Arbitrage from './../../../assets/thematiques/image01.svg';
import Asso from './../../../assets/thematiques/image02.svg';
import Assurance from './../../../assets/thematiques/image03.svg';
import Banque from './../../../assets/thematiques/image04.svg';
import Commercial from './../../../assets/thematiques/image05.svg';
import Credit from './../../../assets/thematiques/image06.svg';
import Dommage from './../../../assets/thematiques/image07.svg';
import DroitInternational from './../../../assets/thematiques/image08.svg';
import DroitPublic from './../../../assets/thematiques/image09.svg';
import DroitRural from './../../../assets/thematiques/image10.svg';
import Environnement from './../../../assets/thematiques/image11.svg';
import Etrangers from './../../../assets/thematiques/image12.svg';
import Famille from './../../../assets/thematiques/image13.svg';
import Fiducie from './../../../assets/thematiques/image14.svg';
import Fiscalite from './../../../assets/thematiques/image15.svg';
import Garantie from './../../../assets/thematiques/image16.svg';
import Immobilier from './../../../assets/thematiques/image17.svg';
import Penal from './../../../assets/thematiques/image18.svg';
import ProcedureAppel from './../../../assets/thematiques/image19.svg';
import ProprieteIntellectuelle from './../../../assets/thematiques/image20.svg';
import Sante from './../../../assets/thematiques/image21.svg';
import SecuriteSociale from './../../../assets/thematiques/image22.svg';
import Societe from './../../../assets/thematiques/image23.svg';
import Sport from './../../../assets/thematiques/image24.svg';
import TechnoInfo from './../../../assets/thematiques/image25.svg';
import Transports from './../../../assets/thematiques/image26.svg';
import Travail from './../../../assets/thematiques/image27.svg';

const textContainer = {
    color: 'white',
    fontFamily: 'Segoe UI',
    textShadow: '1px 1px 2px black',
};

const title = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '7vw',
};

const icon = {
    Width: 140,
    height: 140,
    margin: 10,
    border: 'solid 1px',
};

// eslint-disable-next-line @typescript-eslint/ban-types
const DomainesExpertiseComponent: React.FC<{}> = () => {
    return (
        <div>
            <div style={{ margin: '50px' }}>
                <Row>
                    <h4>Nos domaines d'expertise</h4>
                </Row>
                <Row>
                    <p>
                        Chercher directement la réponse à vore question parmi les 27 thèmes traités par nos intervenants{' '}
                    </p>
                </Row>
            </div>
            <div>
                <Row>
                    <Col xs="2">
                        <img style={icon} src={Arbitrage} alt="Arbitrage" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Asso} alt="Asso" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Assurance} alt="Assurance" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Banque} alt="Banque" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Commercial} alt="Commercial" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Credit} alt="Credit" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                        <img style={icon} src={Dommage} alt="Dommage" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={DroitInternational} alt="DroitInternational" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={DroitPublic} alt="DroitPublic" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={DroitRural} alt="DroitRural" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Environnement} alt="Environnement" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Etrangers} alt="Etrangers" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                        <img style={icon} src={Famille} alt="Famille" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Fiducie} alt="Fiducie" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Fiscalite} alt="Fiscalite" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Garantie} alt="Garantie" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Societe} alt="Societe" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Penal} alt="Penal" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                        <img style={icon} src={ProcedureAppel} alt="ProcedureAppel" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={ProprieteIntellectuelle} alt="ProprieteIntellectuelle" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Sante} alt="Sante" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={SecuriteSociale} alt="SecuriteSociale" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Immobilier} alt="Immobilier" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Sport} alt="Sport" />
                    </Col>
                </Row>
                <Row>
                    <Col xs="2">
                        <img style={icon} src={TechnoInfo} alt="TechnoInfo" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Transports} alt="Transports" />
                    </Col>
                    <Col xs="2">
                        <img style={icon} src={Travail} alt="Travail" />
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default DomainesExpertiseComponent;
