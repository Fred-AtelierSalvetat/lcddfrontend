import React from 'react';
import { Speaker } from '../../speakers/Speaker';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../state/reducers';
import { fetchSpeakers } from '../../../api/fetchSperkers';
import "./Intervenants.css";



const title = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '42px',
    align: 'center',

};

const subtitle = {
    fontFamily: 'Segoe UI',
    fontStyle: 'normal',
    fontWeight: 200,
    fontSize: '20px',
    align: 'center',
};


// eslint-disable-next-line @typescript-eslint/ban-types
const IntervenantsComponent: React.FC<{}> = () => {
    const [isHome, setIsHome] = React.useState(false);
    const dispatch = useDispatch();

    const { speakers } = useSelector((state: AppState) => state.speakers);

    React.useEffect(() => {
        if (speakers.length === 0) {
            dispatch(fetchSpeakers());
        }
    }, [dispatch, speakers]);
    return (
        <div style={{ marginTop: '50px' }}>
            <div>
                <div>
                    <h4 className="intervenants-title">Nos intervenants</h4>
                </div>
                <div>
                    <h2 className="intervenants-subtitle mb-4">
                        Chercher directement la réponse à votre question parmi les 27 thèmes traités par nos intervenants{' '}
                    </h2>
                </div>
            </div>
            <div className="d-flex justify-content-center flex-wrap mx-5 mt-2">
                {speakers &&
                    !isHome &&
                    speakers.map((speaker, key: number) => (
                        <Speaker id={speaker.id} name={speaker.name} rool={speaker.rool} key={key} />
                    ))}
                {speakers && isHome && <div>Speakers home componenet </div>}
            </div>
        </div>
    );
};

export default IntervenantsComponent;
