import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InterestCard from './InterestCard';
import thematiques from './thematiques';

const thematiques_mobile_plus = thematiques.slice(0, 6);
const thematiques_tablet_plus = thematiques.slice(0, 9);
const MOBILE_VIEW_BREAKPOINT = 402;
const TABLET_VIEW_BREAKPOINT = 768;

// Step 3 UI
const Interests = ({ step, setStep, user, setUser }) => {

    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
    const [isTablet, setIsTablet] = useState(window.innerWidth < TABLET_VIEW_BREAKPOINT);
    const [isDesktop, setIsDesktop] = useState(!isMobile && !isTablet);
    const [fullDisplay, setFullDisplay] = useState(!isMobile && !isTablet);
    const getThematiquesToDisplay = () => {
        if (fullDisplay) return thematiques;
        if (isMobile) return thematiques_mobile_plus;
        else if (isTablet) return thematiques_tablet_plus;
        else return thematiques;
    }
    const [thematiquesToDisplay, setThematiquesToDisplay] = useState(getThematiquesToDisplay());

    const handleSubmit = () => {
        alert("C'est presque fini ! Allez dans votre boîte mail pour confirmer votre inscription")
    }

    useEffect(() => {
        window.addEventListener("resize", updatePredicate);
        setThematiquesToDisplay(getThematiquesToDisplay());
    });

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
        setIsTablet(window.innerWidth < TABLET_VIEW_BREAKPOINT);
        setIsDesktop(!isMobile && !isTablet);
    }

    const plusIconClick = () => {
        setFullDisplay(true);
    }

    const moinsIconClick = () => {
        setFullDisplay(false);
    }

    const PlusIcon = () => {
        const [hover, setHover] = useState(false);

        const toggleHover = () => {
            setHover(true);
        }

        return (
            <Row style={{ justifyContent: "center", alignItems: "flex-end", color: "var(--teal)", marginBottom: "72px" }}>
                <div onClick={plusIconClick}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    style={{ cursor: hover ? "pointer" : "" }}
                >
                    Plus&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-down" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
                    </svg>
                </div>
            </Row>
        )
    }

    const MoinsIcon = () => {
        const [hover, setHover] = useState(false);

        const toggleHover = () => {
            setHover(true);
        }

        return (
            <Row style={{ justifyContent: "center", alignItems: "flex-end", color: "var(--teal)", marginBottom: "72px" }}>
                <div onClick={moinsIconClick}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    style={{ cursor: hover ? "pointer" : "" }}
                >
                    Moins&nbsp;
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
                    </svg>
                </div>
            </Row>
        )
    }

    return (
        <Form onSubmit={handleSubmit}>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6" style={{ justifyContent: "center" }}>
                {thematiquesToDisplay.map(thematique =>
                    <InterestCard
                        key={thematique.id}
                        src={thematique.src}
                        title={thematique.title}
                    />
                )}
            </div>

            {!isDesktop && (fullDisplay && <MoinsIcon /> || <PlusIcon />)}

            <Form.Group controlId="helloAsso" style={{ marginBottom: "0" }}>
                <label className="label-check">
                    <input type="checkbox" name="helloAsso" className="form-check-input" tabIndex={50} />
                    Je souhaite m'inscrire à&nbsp;
                    <a className="link" target="_blank" rel="noopener noreferrer" href='https://www.helloasso.com/'>HelloAsso</a>
                </label>
            </Form.Group>
            <Form.Group controlId="mentionsLegales">
                <label className="label-check">
                    <input
                        type="checkbox"
                        name="mlAgreed"
                        className="form-check-input"
                        id="mentionsLegales"
                        tabIndex={50}
                        required />
                    J'ai lu et j'accepte les&nbsp;
                    <a className="link" target="_blank" rel="noopener noreferrer" href="#/mentions-legales">mentions légales</a>&nbsp;
                    <span>*</span>
                </label>
            </Form.Group>

            <Button
                id="submit-btn-final"
                type="submit"
                tabIndex={50}
                style={{ width: "100%" }}>
                Finaliser l'inscription
            </Button>

        </Form>
    )
}

Interests.propsType = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func
}

export default Interests;