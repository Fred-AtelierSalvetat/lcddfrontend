import React, { useReducer, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Link as SrollLink } from 'react-scroll';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Concept from '~/assets/home/question.jpg';
import ConfirmDialog from '../dialogs/ConfirmDialog';
import FormSteps from './form-steps';
import classNames from 'classnames';

import './SignUp.css';
import { UserReducer, DefaultUser } from './user-reducer';

const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
    padding: '0px !important',
};

const getClassesForContainer = (step: number) => {
    return classNames({
        'container-transparent': true,
        'container-transparent-large': step + 1 === 3,
    });
};

const SignUp = (props) => {
    const [step, setStep] = useState(0);
    const [user, setUser] = useReducer(UserReducer, DefaultUser);
    const [showDialog, setShowDialog] = useState(false);
    let steps = FormSteps(step, setStep, user, setUser);

    const handleCancelDialog = () => {
        setShowDialog(false);
    };

    const handleConfirmDialog = () => {
        setShowDialog(false);
        props.history.push('/'); // Redirect to homepage
    };

    const handleShowDialog = () => {
        setShowDialog(true);
        console.log('clicked', showDialog);
    };

    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <ConfirmDialog
                show={showDialog}
                title="Retourner à l'accueil"
                body="En retournant à la page d'accueil, vous perderez toute votre progression."
                cancelButton="Annuler"
                okButton="Annuler inscription"
                handleClose={handleCancelDialog}
                handleConfirm={handleConfirmDialog}
            />
            <Container className={getClassesForContainer(step)}>
                <div className="container-header pt-md-5">
                    <Row style={{ justifyContent: 'space-between', alignItems: 'baseline' }}>
                        <div>
                            <h1 className="display-4">{steps[`${step}`].title}</h1>
                        </div>
                        <div>
                            <p style={{ textAlign: 'center' }}>Étape {step + 1}/3</p>
                        </div>
                    </Row>

                    <Row style={{ margin: '40px auto', justifyContent: 'space-between' }}>
                        <div onClick={handleShowDialog} className="link" tabIndex={1}>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                fill="currentColor"
                                className="bi bi-arrow-left-short"
                                viewBox="0 0 16 16"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"
                                />
                            </svg>
                            Retourner à l'accueil
                        </div>
                        {step + 1 === 3 ? (
                            <div className="link" tabIndex={1}>
                                <SrollLink
                                    to="submit-button"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    activeClass="active"
                                >
                                    Selectionner plus tard
                                </SrollLink>
                            </div>
                        ) : null}
                    </Row>

                    {steps[`${step}`].content}
                </div>
            </Container>
        </Jumbotron>
    );
};

export default SignUp;
