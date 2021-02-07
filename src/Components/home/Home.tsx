import React from 'react';
import ConceptComponent from './concept/Concept';
import QuestionsComponent from './questions/Questions';
import AteliersComponent from './ateliers/Ateliers';

// eslint-disable-next-line @typescript-eslint/ban-types
const Home: React.FC<{}> = () => {
    return (
        <div>
            <ConceptComponent />
            <QuestionsComponent />
            <AteliersComponent />
        </div>
    );
};

export default Home;
