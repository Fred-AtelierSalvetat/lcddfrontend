import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { Wrapper } from '../../wrapper/Wrapper';


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

// eslint-disable-next-line @typescript-eslint/ban-types
const DomainesExpertiseComponent: React.FC<{}> = () => {
    return (
            <Wrapper>
                <h4>Nos domaines d'expertise</h4>
                <p>Chercher directement la réponse à vore question parmi les 27 thèmes traités par nos intervenants </p>
            </Wrapper>
           
    );
};

export default DomainesExpertiseComponent;
