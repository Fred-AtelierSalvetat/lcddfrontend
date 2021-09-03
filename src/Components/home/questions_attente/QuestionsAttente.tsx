import React , {useState} from 'react';
import Cards from '../../questions/Cards'
import '../intervenants/Intervenants.css';


function QuestionsAttente(props) {
    const [isHome, setIsHome]=useState(true)
    return (
        <div className="intervenant__container" data-aos="slide-up" >
            <div>
                <div className="intervenantHeader">
                    <div className="display-4 mb-3" style={{ color: '#113F59', flex: 1 }}>
                        Question en videos
                    </div>
                    <div className="voirplus">
                        <a href="/" className="link">
                            Voir plus
                        </a>
                    </div>
                </div>
            </div>
            <div className="speaker">
                    <Cards isHome={isHome}/>
            </div>
        </div>
    );
}

export default QuestionsAttente;