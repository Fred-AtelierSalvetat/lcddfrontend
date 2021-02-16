import React from 'react';
import ConceptComponent from './concept/Concept';
import QuestionsComponent from './questions/Questions';
import AteliersComponent from './ateliers/Ateliers';
import SpeakersComponent from './../speakers/Speakers';
import DomainesExpertiseComponent from './domaines_expertise/DomainesExpertise';


// eslint-disable-next-line @typescript-eslint/ban-types
const Home: React.FC<{}> = () => {
    return (
        <div>
            <ConceptComponent />
            <QuestionsComponent />
            <AteliersComponent />
            <SpeakersComponent />
            <DomainesExpertiseComponent />
        </div>
    );
};

export default Home;
