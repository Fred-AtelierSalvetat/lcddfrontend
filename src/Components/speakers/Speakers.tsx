import React from 'react';
import styled from 'styled-components';
import { Speaker } from './Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../state/reducers';
import { fetchSpeakers } from '../../api/fetchSperkers';
import { Wrapper } from '../shared/wrapper/Wrapper';

// eslint-disable-next-line @typescript-eslint/ban-types
const Speakers: React.FC<{}> = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [isHome, setIsHome] = React.useState(false);
    const dispatch = useDispatch();

    const { speakers } = useSelector((state: AppState) => state.speakers);

    React.useEffect(() => {
        if (speakers.length === 0) {
            dispatch(fetchSpeakers());
        }
    }, [dispatch, speakers]);

    return (
        <div>
            <Wrapper>
                <h4>Nos intervenants</h4>
                <p>Chercher directement la réponse à vore question parmi les 27 thèmes traités par nos intervenants </p>
            </Wrapper>
            <div className="d-flex justify-content-center flex-wrap">
                {speakers &&
                    !isHome &&
                    speakers.map((speaker, key: number) => (
                        <Speaker id={speaker.id} name={speaker.name} rool={speaker.rool} description={speaker.description} key={key} />
                    ))}
                {speakers && isHome && <div>Speakers home componenet </div>}
            </div>
        </div>
    );
};

export default Speakers;
Speakers.displayName = 'Speakers';
