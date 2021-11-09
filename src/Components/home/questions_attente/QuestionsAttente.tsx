/* eslint-disable */
//FIRST DEV MOFYING THIS FILE, MUST FIX WARNINGS (too many for a single dev, then boyscout rule!)

import React, { useState } from 'react';
import Cards from '../../questions/Cards';
import '../intervenants/Intervenants.css';
import { Nav } from 'react-bootstrap';

function QuestionsAttente(props) {
    const [isHome, setIsHome] = useState(true);
    return (
        <div className="intervenant__container" data-aos="slide-up">
            <div>
                <div className="intervenantHeader">
                    <div className="display-4 mb-3" style={{ color: '#113F59', flex: 1 }}>
                        Question en videos
                    </div>
                    <div className="voirplus">
                        <Nav.Link href="/questions" className="link">
                            Voir plus
                        </Nav.Link>
                    </div>
                </div>
            </div>
            <div className="speaker">
                <Cards isHome={isHome} />
            </div>
        </div>
    );
}

export default QuestionsAttente;
