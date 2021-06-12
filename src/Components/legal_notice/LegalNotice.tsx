import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import { Wrapper } from '../shared/wrapper';
import './LegalNotice.scss';

const LegalNotice: FC = () => {
    return (
        <div>
            <Wrapper>
                <Container>
                    <h1 className="primary">Mentions légales</h1>
                    <div className="lead">
                        {'Conformément aux dispositions des articles 6-III et 19 de la Loi n° 2004-575 du 21 juin 2004 ' +
                            "pour la Confiance dans l'économie numérique, dite LCEN, nous portons à la connaissance des utilisateurs " +
                            'et visiteurs du site '}
                        <a href="https://lachainedudroit.fr" className="link" title="Visiter ce site">
                            lachainedudroit.fr
                        </a>{' '}
                        les informations suivantes:
                    </div>
                </Container>
            </Wrapper>
            <Container className="container-large-space">
                <h2 className="primary">L’EDITEUR</h2>
                <p>
                    Le site{' '}
                    <a href="https://lachainedudroit.fr" className="link" title="Visiter ce site">
                        lachainedudroit.fr
                    </a>{' '}
                    est la propriété exclusive de l’association LA CHAINE DU DROIT, qui l’édite.
                </p>

                <h2 className="primary">LA CHAINE DU DROIT</h2>

                <p>Association à but non lucratif dont le siège est sis 60, Boulevard des Dames – 13002 MARSEILLE.</p>

                <p>Téléphone : 04 84 25 50 60</p>

                <p>Ladite association est immatriculée à l’INSEE sous le numéro SIRET 820 598 357 00011</p>

                <p>
                    Adresse de courrier électronique:{' '}
                    <a href="mailto:contact@lachainedudroit.fr" className="link" title="Envoyer un message">
                        contact@lachainedudroit.fr
                    </a>
                </p>

                <p>
                    Le directeur de la publication est Ambroise ARMAND en sa qualité de Président de LA CHAINE DU DROIT.
                </p>

                <h2 className="primary">L’HÉBERGEUR</h2>
                <p>
                    Le site de LA CHAINE DU DROIT est hébergé par la société INFOMANIAK dont le siège social est sis Rue
                    Eugène MARZIANO 25 à 1227 GENEVE (SUISSE).
                </p>
                <div style={{ minHeight: '100px' }}></div>
            </Container>
        </div>
    );
};

export default LegalNotice;
