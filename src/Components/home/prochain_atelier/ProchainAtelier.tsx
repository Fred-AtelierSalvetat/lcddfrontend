import React, { FC } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';
import './ProchainAtelier.css';
import 'aos/dist/aos.css';

const ProchainAtelierComponent: FC = () => {
    return (
        <div data-aos="slide-up" id="prochain-atelier-container">
            <Container className="atelier">
                <h1 className=" mb-4 mt-3" style={{ color: '#FFFFFF', textAlign: 'left' }}>
                    Prochain Atelier
                </h1>
                <div style={{ textDecoration: 'underline' }}>
                    <a href="/" className="link">
                        Voir plus
                    </a>
                </div>
            </Container>

            <div className="styled-card">
                <div style={{ marginLeft: '10px' }}>
                    <h3 className="titreAtelier">Atelier titre</h3>
                    <p className="date">20 Mai 2020 | 15:30 - 18:30</p>
                </div>
                <div style={{ borderLeft: '1px solid #113F59', height: '83px', marginLeft: 'auto' }}></div>
                <div>
                    <div>
                        <a href="/">
                            <img className="icon-reserve" src={Calendar} alt="calendar" />
                        </a>
                        <div className="reserver">
                            <h5 className="link-to-reserve ml-3">Reserver</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProchainAtelierComponent;
