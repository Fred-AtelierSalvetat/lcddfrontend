import React from 'react';
import ConceptComponent from './concept/Concept';
import QuestionsComponent from './questions/Questions';
import AteliersComponent from './ateliers/Ateliers';
import IntervenantsComponent from './intervenants/Intervenants';
import DomainesExpertiseComponent from './domaines_expertise/DomainesExpertise';
import ProchainAtelierComponent from './prochain_atelier/ProchainAtelier';
import { Wrapper } from '../wrapper/Wrapper';



// eslint-disable-next-line @typescript-eslint/ban-types
const Home: React.FC<{}> = () => {
    return (
        <div>
            <ConceptComponent />
            <QuestionsComponent />
            <AteliersComponent />
            <ProchainAtelierComponent />
            <IntervenantsComponent />
            <DomainesExpertiseComponent />
        </div>
    );
};

export default Home;
