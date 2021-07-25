import React, { FC } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Icon1 from '~/assets/home/atelier/1.svg';
import Icon2 from '~/assets/home/atelier/2.svg';
import Icon3 from '~/assets/home/atelier/3.svg';
import Icon4 from '~/assets/home/atelier/4.svg';
import './Ateliers.css';
import 'aos/dist/aos.css';

const AteliersComponent: FC = () => {
    return (
        <div data-aos="slide-up" className="container-atelier">
            <div className="row">
                <div className="col-lg-6 col-sm-12 col-xs-12  background-transparency-atelier">
                    <div>
                        <Row>
                            <Col xs="6" className="display-4 mt-4" style={{ color: '#F2F2F2' }}>
                                Les Ateliers
                            </Col>
                            <Col xs="3" className="mt-5 ml-5" style={{ textDecoration: 'underline' }}>
                                <a href="/" className="link">
                                    Voir plus
                                </a>
                            </Col>
                        </Row>
                        <h2 className="ml-5" style={{ textAlign: 'left', color: '#FFFFFF', opacity: '0.8' }}>
                            En direct
                        </h2>
                    </div>
                    <Container>
                        <Row className="mb-4">
                            <img className="icon-questions mr-5 mt-3" src={Icon1} alt="icon1" />
                            <div className="display-1 mr-3" style={{ color: '#F2F2F2' }}>
                                1.
                            </div>
                            <h4 className="text-atelier">
                                Chaque mois, la Chaine du Droit proposera une conférence web diffusée en direct et
                                accessible à tous.
                            </h4>
                        </Row>
                        <Row className="mb-4">
                            <div className="display-1 mr-4" style={{ color: '#F2F2F2' }}>
                                2.
                            </div>
                            <h4 className="text-atelier mr-5 mt-3">
                                {"Un thème ou un domaine juridique sera mis à l'honneur avec un intervenant qui répond " +
                                    'aux interrogations.'}
                            </h4>
                            <img className="icon-questions mt-3" src={Icon2} alt="icon2" />
                        </Row>
                        <Row className="mb-4">
                            <img className="icon-questions mr-5 mt-3" src={Icon3} alt="icon3" />
                            <div className="display-1 mr-5" style={{ color: '#F2F2F2' }}>
                                3.
                            </div>
                            <h4 className="text-atelier mt-3">
                                Les internautes pourront ainsi interragir avec le plateau en posant des questions
                                écrites.
                            </h4>
                        </Row>
                        <Row className="mb-4">
                            <div className="display-1 mr-5" style={{ color: '#F2F2F2' }}>
                                4.
                            </div>
                            <h4 className="text-atelier mr-4 mt-3">
                                {"Une fois le direct terminé, l'atelier sera prédécoupé, chapitré puis mis en ligne."}
                            </h4>
                            <img className="icon-questions mt-3" src={Icon4} alt="icon4" />
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
};

export default AteliersComponent;
