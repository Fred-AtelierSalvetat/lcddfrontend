import React from 'react';
import ConceptComponent from './concept/Concept';
import VosQuestionsComponent from './vos_questions/VosQuestions';
import AteliersComponent from './ateliers/Ateliers';
import IntervenantsComponent from './intervenants/Intervenants';
import DomainesExpertiseComponent from './domaines_expertise/DomainesExpertise';
import ProchainAtelierComponent from './prochain_atelier/ProchainAtelier';
import QuestionsAttenteComponent from './questions_attente/QuestionsAttente';



// eslint-disable-next-line @typescript-eslint/ban-types
const Home: React.FC<{}> = () => {
    return (
        <div>
            <ConceptComponent />
            <VosQuestionsComponent />
            <AteliersComponent />
            <QuestionsAttenteComponent />
            <ProchainAtelierComponent />
            <IntervenantsComponent />
            <DomainesExpertiseComponent />
        </div>
    );
};

export default Home;
