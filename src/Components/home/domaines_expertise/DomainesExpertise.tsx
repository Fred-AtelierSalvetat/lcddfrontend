import React from 'react';
import thematiques from './../../sign_up/thematiques';
import InterestCard from './../../sign_up/InterestCard';
import "./DomainesExpertise.css";



// eslint-disable-next-line @typescript-eslint/ban-types
const DomainesExpertiseComponent: React.FC<{}> = () => {
    return (
        <div>
            <div >
                <div>
                    <h4 className="title-thematiques">Nos domaines d'expertise</h4>
                </div>
                <div>
                    <h2 className="subtitle-thematiques">
                        Chercher directement la réponse à votre question parmi les 27 thèmes traités par nos intervenants{' '}
                    </h2>
                </div>
            </div>
            <div className="cards-container row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6" style={{ justifyContent: "center" }}>
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
