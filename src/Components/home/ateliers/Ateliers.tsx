import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Icon1 from '~/assets/home/atelier/1.svg';
import Icon2 from '~/assets/home/atelier/2.svg';
import Icon3 from '~/assets/home/atelier/3.svg';
import Icon4 from '~/assets/home/atelier/4.svg';
import "./Ateliers.css";


// eslint-disable-next-line @typescript-eslint/ban-types
const AteliersComponent: React.FC<{}> = () => {
    return (
        <div className="container-atelier">
            <div className="row">
                <div className="col-6 background-transparency-atelier" >
                    <div style={{ marginBottom: '50px' }}>
                        <Row className="flex">
                            <p className="title-atelier">Les Ateliers</p>
                            <a href="/" className="voir-plus">Voir plus</a>
                        </Row>
                        <p className="subtitle-atelier">En direct</p>
                    </div>
                    <Container fluid style={{ marginLeft: '150px' }} >
                        <Row className="mb-5">
                            <img className="icon-questions mr-5" src={Icon1} alt="icon1" />
                            <p className="enumeration-atelier mr-5">1.</p>
                            <p className="text-atelier mt-2">Chaque mois, la Chaine du Droit proposera une conférence web diffusée en direct et accessible à tous</p>
                        </Row>
                        <Row className="mb-5">
                            <p className="enumeration-atelier mr-5">2.</p>
                            <p className="text-atelier mr-5 mt-2">Un thème ou un domaine juridique sera mis à l'honneur avec un intervenant qui répond aux interrogations</p>
                            <img className="icon-questions" src={Icon2} alt="icon2" />

                        </Row>
                        <Row className="mb-5">
                            <img className="icon-questions mr-5" src={Icon3} alt="icon3" />
                            <p className="enumeration-atelier mr-5">3.</p>
                            <p className="text-atelier mt-2">Les internautes pourront ainsi interragir avec le plateau en posant des questions écrites</p>

                        </Row>
                        <Row>
                            <p className="enumeration-atelier mr-5" >4.</p>
                            <p className="text-atelier mr-5 mt-2">Une fois le direct terminé, l'atelier sera prédécoupé, chapitré puis mis en ligne</p>
                            <img className="icon-questions" src={Icon4} alt="icon4" />

                        </Row>
                    </Container>
                </div>
                <div className="col-6"></div>

            </div>

        </div>
    );
};

export default AteliersComponent;
