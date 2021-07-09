import React, { FC, useState, useEffect } from 'react';
import { Speaker } from '../../speakers/Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/reducers';
import { fetchSpeakers } from '../../../api/fetchSperkers';
import './Intervenants.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const IntervenantsComponent: FC = () => {
    const [isHome, _setIsHome] = useState(false); //TODO search intended purpose and implement
    const dispatch = useDispatch();

    const { speakers } = useSelector((state: AppState) => state.speakers);

    useEffect(() => {
        AOS.init({ duration: 2000 });
        if (speakers.length === 0) {
            dispatch(fetchSpeakers());
        }
    }, [dispatch, speakers]);
    console.log(speakers);
    return (
        <div data-aos="slide-up" style={{ marginTop: '50px' }}>
            <div>
                <div className="intervenantHeader">
                    <div className="display-4 mb-3" style={{ color: '#113F59', margin: '0px 290px' }}>
                        Nos intervenants
                    </div>
                    <div style={{ textDecoration: 'underline' }}>
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
            <div className="d-flex justify-content-center flex-wrap mx-5 mt-2 mb-5">
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
