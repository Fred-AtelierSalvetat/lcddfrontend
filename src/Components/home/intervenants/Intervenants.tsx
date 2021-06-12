import React, { FC, useState, useEffect } from 'react';
import { Speaker } from '../../speakers/Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/reducers';
import { fetchSpeakers } from '../../../api/fetchSperkers';
import './Intervenants.css';

const IntervenantsComponent: FC = () => {
    const [isHome, _setIsHome] = useState(false); //TODO search intended purpose and implement
    const dispatch = useDispatch();

    const { speakers } = useSelector((state: AppState) => state.speakers);

    useEffect(() => {
        if (speakers.length === 0) {
            dispatch(fetchSpeakers());
        }
    }, [dispatch, speakers]);
    return (
        <div style={{ marginTop: '50px' }}>
            <div>
                <div className="display-4 mb-3" style={{ color: '#113F59', textAlign: 'center' }}>
                    Nos intervenants
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
