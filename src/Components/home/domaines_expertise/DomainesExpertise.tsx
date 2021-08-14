import React, { FC } from 'react';
import InterestCard from '../../shared/cards/InterestCard';
import './DomainesExpertise.css';
import 'aos/dist/aos.css';

import { useTopicsListQuery } from '~/api/lcddbackend-api.generated';

const DomainesExpertiseComponent: FC = () => {
    const { data: topics, error, isLoading } = useTopicsListQuery();
    if (error) {
        console.error(error);
        return <div className="loadingError">{"Domaines d'expertise, erreur de chargement"}</div>;
    }
    //TODOFSA Add spinner
    return isLoading ? (
        <p>{"Domaines d'expertises, chargement en cours"}</p>
    ) : (
        <div data-aos="slide-up" className="domaineexpretise__container">
            <div>
                <div className="display-4 mb-2" style={{ color: '#113F59', textAlign: 'center' }}>
                    {"Nos domaines d'expertise"}
                </div>
                <div>
                    <h3 className="mb-5" style={{ color: '#333333', opacity: '0.8' }}>
                        {`Chercher directement la réponse à votre question parmi les ${topics.length} thèmes traités par nos intervenants`}
                    </h3>
                </div>
            </div>
            <div
                className="cards-container row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6"
                style={{ justifyContent: 'center' }}
            >
                {topics.map((topic) => (
                    <InterestCard key={topic.id} src={topic.thumbnail} title={topic.title} readOnly />
                ))}
            </div>
        </div>
    );
};

export default DomainesExpertiseComponent;
