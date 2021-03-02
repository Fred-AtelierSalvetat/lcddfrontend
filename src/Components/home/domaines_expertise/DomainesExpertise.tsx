import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import thematiques from './../../sign_up/thematiques';
import InterestCard from './../../sign_up/InterestCard';




const textContainer = {
    color: 'white',
    fontFamily: 'Segoe UI',
    textShadow: '1px 1px 2px black',
};

const title = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '42px',
    align: 'center',
};


// eslint-disable-next-line @typescript-eslint/ban-types
const DomainesExpertiseComponent: React.FC<{}> = () => {
    return (
        <div>
            <div >
                <Row style={{ textAlign: 'center' }}>
                    <h4 style={title}>Nos domaines d'expertise</h4>
                </Row>
                <Row>
                    <p>
                        Chercher directement la réponse à vore question parmi les 27 thèmes traités par nos intervenants{' '}
                    </p>
                </Row>
            </div>
            <div className="card-deck" style={{ justifyContent: "center" }}>
                {thematiques.map(thematique =>
                    <InterestCard
                        key={thematique.id}
                        src={thematique.src}
                        title={thematique.title}
                    />
                )}
            </div>
        </div>
    );
};

export default DomainesExpertiseComponent;
