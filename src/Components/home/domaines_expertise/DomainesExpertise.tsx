import React, { FC } from 'react';
import thematiques from '../../shared/thematiques';
import InterestCard from '../../shared/cards/InterestCard';
import './DomainesExpertise.css';

const DomainesExpertiseComponent: FC = () => {
    return (
        <div>
            <div>
                <div className="display-4 mb-2" style={{ color: '#113F59', textAlign: 'center' }}>
                    {"Nos domaines d'expertise"}
                </div>
                <div>
                    <h3 className="mb-5" style={{ color: '#333333', opacity: '0.8' }}>
                        {'Chercher directement la réponse à votre question parmi les 27 thèmes traités par nos ' +
                            'intervenants '}
                    </h3>
                </div>
            </div>
            <div
                className="cards-container row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6"
                style={{ justifyContent: 'center' }}
            >
                {thematiques.map((thematique) => (
                    <InterestCard key={thematique.id} src={thematique.src} title={thematique.title} />
                ))}
            </div>
        </div>
    );
};

export default DomainesExpertiseComponent;
