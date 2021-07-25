import React, { FC, useState, useEffect } from 'react';
import { Speaker } from '../../speakers/Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/reducers';
import { fetchSpeakers } from '../../../api/fetchSperkers';
import './Intervenants.css';
import 'aos/dist/aos.css';

const IntervenantsComponent: FC = () => {
    const [isHome, _setIsHome] = useState(false); //TODO search intended purpose and implement
    const dispatch = useDispatch();

    const { speakers } = useSelector((state: AppState) => state.speakers);

    useEffect(() => {
        if (speakers.length === 0) {
            dispatch(fetchSpeakers());
        }
    }, [dispatch, speakers]);
    console.log(speakers);
    return (
        <div className="intervenant__container" data-aos="slide-up">
            <div>
                <div className="intervenantHeader">
                    <div className="display-4 mb-3" style={{ color: '#113F59', flex: 1 }}>
                        Nos intervenants
                    </div>
                    <div className="voirplus">
                        <a href="/" className="link">
                            Voir plus
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="mb-4" style={{ color: '#333333', opacity: '0.8' }}>
                        Chercher directement la réponse à votre question parmi les 27 thèmes traités par nos
                        intervenants{' '}
                    </h3>
                </div>
            </div>
            <div className="speaker">
                {speakers &&
                    !isHome &&
                    speakers.map((speaker, key: number) => (
                        <Speaker
                            id={speaker.id}
                            name={speaker.name}
                            rool={speaker.rool}
                            description={speaker.description}
                            key={key}
                        />
                    ))}
                {speakers && isHome && <div>Speakers home componenet </div>}
            </div>
        </div>
    );
};

export default IntervenantsComponent;
