import React, { FC, useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import InterestCard from '../shared/cards/InterestCard';
import { userActions } from '~/state/user/user.actions';

import { useGetAllTopicsQuery } from '~/api/lcddbackend-api.generated';

const MOBILE_VIEW_BREAKPOINT = 402;
const TABLET_VIEW_BREAKPOINT = 768;

// Step 3 UI

const interestsPropTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired,
};
const Interests: FC<PropTypes.InferProps<typeof interestsPropTypes>> = ({ user }) => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
    const [isTablet, setIsTablet] = useState(window.innerWidth < TABLET_VIEW_BREAKPOINT);
    const [isDesktop, setIsDesktop] = useState(!isMobile && !isTablet);
    const [fullDisplay, setFullDisplay] = useState(!isMobile && !isTablet);

    const { data: topics, error } = useGetAllTopicsQuery();
    if (error) {
        console.error(error);
        return <div>{"Domaines d'expertise, erreur de chargement"}</div>;
    }
    // TODOFSA Mng loading

    let checkboxRef;

    const dispatch = useDispatch();

    const getTopicsToDisplay = () => {
        if (fullDisplay) return topics;
        if (isMobile) return topics.slice(0, 6);
        if (isTablet) return topics.slice(0, 9);
        return topics;
    };
    const [topicsToDisplay, setTopicsToDisplay] = useState(getTopicsToDisplay());

    const handleSubmit = (e) => {
        e.preventDefault();

        if (checkboxRef) {
            if (!checkboxRef.checked) {
                checkboxRef.setCustomValidity('Veuillez cocher cette case pour continuer');
            } else {
                checkboxRef.setCustomValidity('');
                // TODO
                // Handle the submit action here

                dispatch(userActions.register(user));

                // alert("C'est presque fini ! Allez dans votre bo??te mail pour confirmer votre inscription")
            }
        }

        return false;
    };

    useEffect(() => {
        window.addEventListener('resize', updatePredicate);
        setTopicsToDisplay(getTopicsToDisplay());
    });

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
        setIsTablet(window.innerWidth < TABLET_VIEW_BREAKPOINT);
        setIsDesktop(!isMobile && !isTablet);
    };

    const plusIconClick = () => {
        setFullDisplay(true);
    };

    const moinsIconClick = () => {
        setFullDisplay(false);
    };

    const PlusIcon = () => {
        const [hover, setHover] = useState(false);

        const toggleHover = () => {
            setHover(true);
        };

        return (
            <Row style={{ justifyContent: 'center', alignItems: 'flex-end', color: 'var(--teal)' }}>
                <div
                    onClick={plusIconClick}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    style={{ cursor: hover ? 'pointer' : '' }}
                >
                    Plus&nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-down"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                        />
                    </svg>
                </div>
            </Row>
        );
    };

    const MoinsIcon = () => {
        const [hover, setHover] = useState(false);

        const toggleHover = () => {
            setHover(true);
        };

        return (
            <Row style={{ justifyContent: 'center', alignItems: 'flex-end', color: 'var(--teal)' }}>
                <div
                    onClick={moinsIconClick}
                    onMouseEnter={toggleHover}
                    onMouseLeave={toggleHover}
                    style={{ cursor: hover ? 'pointer' : '' }}
                >
                    Moins&nbsp;
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-chevron-up"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                        />
                    </svg>
                </div>
            </Row>
        );
    };

    return (
        <Form>
            <div
                className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6"
                style={{ justifyContent: 'center' }}
            >
                {topicsToDisplay &&
                    topicsToDisplay.map((topic) => (
                        <InterestCard key={topic.id} src={topic.file} title={topic.topic} />
                    ))}
            </div>

            {!isDesktop && ((fullDisplay && <MoinsIcon />) || <PlusIcon />)}

            <div className="checkbox-zone">
                <Form.Group controlId="helloAsso" style={{ marginBottom: '0.6rem' }}>
                    <label className="label-check">
                        <input type="checkbox" name="helloAsso" className="form-check-input" tabIndex={50} />
                        {"Je souhaite m'inscrire ?? "}
                        <a className="link" target="_blank" rel="noopener noreferrer" href="https://www.helloasso.com/">
                            HelloAsso
                        </a>{' '}
                        (facultatif)
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
                            ref={(r) => (checkboxRef = r)}
                            required
                        />
                        {"J'ai lu et j'accepte les "}
                        <a className="link" target="_blank" rel="noopener noreferrer" href="#/mentions-legales">
                            mentions l??gales
                        </a>
                        &nbsp;
                    </label>
                </Form.Group>
            </div>

            <Button id="submit-btn-final" type="submit" tabIndex={50} style={{ width: '100%' }} onClick={handleSubmit}>
                {"Finaliser l'inscription"}
            </Button>
        </Form>
    );
};
Interests.propTypes = interestsPropTypes;

const mapState = (state) => {
    const { registering } = state.registration;
    return { registering };
};

const actionCreators = {
    register: userActions.register,
};

const connectedInterestsPage = connect(mapState, actionCreators)(Interests);

export default connectedInterestsPage;
