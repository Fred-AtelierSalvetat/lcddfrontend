import React, { FC, useEffect } from 'react';
import ConceptComponent from './concept/Concept';
import VosQuestionsComponent from './vos_questions/VosQuestions';
import AteliersComponent from './ateliers/Ateliers';
import IntervenantsComponent from './intervenants/Intervenants';
import DomainesExpertiseComponent from './domaines_expertise/DomainesExpertise';
import ProchainAtelierComponent from './prochain_atelier/ProchainAtelier';
import QuestionsVideoComponent from './questions_video/QuestionsVideo';
import QuestionsAttente from './questions_attente/QuestionsAttente';
import AOS from 'aos';

const Home: FC = () => {
    useEffect(() => {
        AOS.init({ duration: 700 });
    }, []);
    return (
        <div>
            <ConceptComponent />
            <VosQuestionsComponent />
            <AteliersComponent />
            <QuestionsAttente />
            <QuestionsVideoComponent />
            <ProchainAtelierComponent />
            <IntervenantsComponent />
            <DomainesExpertiseComponent />
        </div>
    );
};

export default Home;
