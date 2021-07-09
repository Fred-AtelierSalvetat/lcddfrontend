import React, { FC, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Calendar from './../../../assets/icons/calendar.png';
import './ProchainAtelier.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProchainAtelierComponent: FC = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <div data-aos="slide-up" id="prochain-atelier-container" className="d-flex justify-content-center flex-wrap">
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
                            <a className="link-to-reserve ml-3" href="/">
                                Reserver
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProchainAtelierComponent;
