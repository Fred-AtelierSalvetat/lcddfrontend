import React, { useReducer, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { UserReducer, DefaultUser } from './user-reducer';
import { Link as SrollLink } from 'react-scroll';
import ConfirmDialog from '../shared/modals/ConfirmDialog';
import classNames from 'classnames';
import styled from 'styled-components';
import FormSteps from './form-steps';
import "./SignUp.css";
import { connect } from 'react-redux';
import { userActions } from '~/state/user/user.actions';

const StepText = styled.p`
    text-align: center;
    color: var(--primary);
`

const getClassesForContainer = (step: number) => {
    return classNames({
        'container-transparent': true,
        'container-transparent-large': step + 1 === 3
    });
}

const SignUp = (props) => {
    const [step, setStep] = useState(0);
    const [user, setUser] = useReducer(UserReducer, DefaultUser);
    const [showDialog, setShowDialog] = useState(false);
    let steps = FormSteps(step, setStep, user, setUser);

    const handleCancelDialog = () => {
        setShowDialog(false);
    }

    const handleConfirmDialog = () => {
        setShowDialog(false);
        props.history.push('/'); // Redirect to homepage
    }

    const handleShowDialog = () => {
        setShowDialog(true);
        console.log("clicked", showDialog);
    }

    return (
        <div className="lcdd-body-bg">
            <ConfirmDialog
                show={showDialog}
                title="Retourner à l'accueil"
                body="En retournant à la page d'accueil, vous perderez toute votre progression."
                cancelButton="Continuer l'inscription"
                okButton="Annuler l'inscription"
                handleClose={handleCancelDialog}
                handleConfirm={handleConfirmDialog}
            />
            <Container className={getClassesForContainer(step)}>
                <div className="container-header pt-5">
                    <Row style={{ justifyContent: "space-between", alignItems: "baseline" }}>
                        <h1>{steps[`${step}`].title}</h1>
                        <StepText>Étape {step + 1}/3</StepText>
                    </Row>

                    <Row>
                        <div className="text-standard">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever.</div>
                    </Row>

                    <Row style={{ margin: "40px auto", justifyContent: "space-between" }}>
                        <div onClick={handleShowDialog} className="link" tabIndex={1}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z" />
                            </svg>
                            Retourner à l'accueil
                        </div>
                        {(step + 1 === 3) ?
                            <div className="link" tabIndex={1}>
                                <SrollLink
                                    to="submit-btn-final"
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    activeClass='active'
                                >
                                    Selectionner plus tard
                                </SrollLink>
                            </div>
                            : null
                        }
                    </Row>

                    {steps[`${step}`].content}

                </div>
            </Container>
        </div >
    );
};

const mapState = (state) => {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedSignUpPage = connect(mapState, actionCreators)(SignUp);

export default connectedSignUpPage;
