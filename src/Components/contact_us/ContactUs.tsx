import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import { Wrapper } from '../shared/wrapper';
import Expire from '../shared/utils/Expire';
import { FormFeedback } from '../shared/form/FormFeedBack';
import RoundSpinner from '../shared/RoundSpinner';
import { Validator } from '~/util/validator.js';
import scrollToTopSmoothly from '~/util/scrollToTopSmoothly';
import "./ContactUs.scss";

const SITE_KEY = process.env.REACT_APP_GOOGLE_CAPTCHA_SITE_KEY!;
const MESSAGE_SENT_SUCCESS = "Votre message a été bien envoyé";
const MESSAGE_SENT_ERROR_NETWORK = "Mauvaise réponse du réseau";
const MESSAGE_SENT_FAILED = "Votre message n'a pas été bien envoyé";
const SEND_EMAIL_URL = "http://lcdddevtestapp-env.eba-d22aejrz.eu-west-3.elasticbeanstalk.com/api/v1/sendMail";

const AlertSuccess = ({ show, message, onClick }) => {
    return (
        <div className={`alert alert-success ${show ? 'alert-shown' : 'alert-hidden'}`}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>OK</strong> : <span> {message} </span>
        </div>
    )
}

const AlertError = ({ show, message, onClick }) => {
    return (
        <div className={`alert alert-danger ${show ? 'alert-shown' : 'alert-hidden'}`}>
            <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
                <span aria-hidden="true">&times;</span>
                <span className="sr-only">Close</span>
            </button>
            <strong>Erreur</strong> : <span> {message} </span>
        </div>
    )
}

const ContactUs = () => {
    const { register, handleSubmit, setValue, trigger, errors, setError, clearErrors } = useForm();
    const [recaptchaValidated, setRecaptchaValidated] = useState(false);
    const [showAlertMessage, setShowAlertMessage] = useState(false);
    const [messageSuccessfullySent, setMessageSuccessfullySent] = useState(false);
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    let captcha: { reset: () => void; };

    const onHandleChange = ({ target }) => {
        console.log(target.name, target.value);

        trigger(target.name);
    }

    const onSubmit = (data: any) => {
        setMessage("");
        if (recaptchaValidated) {
            scrollToTopSmoothly();
            setLoading(true);

            fetch(SEND_EMAIL_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => {
                    if (response.ok) {
                        // Response was successful
                        if (response.status === 200) {
                            console.log(MESSAGE_SENT_SUCCESS);
                            setMessageSuccessfullySent(true);
                            setMessage(MESSAGE_SENT_SUCCESS);
                            resetForm()
                        } else {
                            console.log(MESSAGE_SENT_FAILED);
                            setMessageSuccessfullySent(false);
                            setMessage(MESSAGE_SENT_FAILED);
                        }
                    } else {
                        // Network problem
                        setMessage(MESSAGE_SENT_ERROR_NETWORK);
                    }
                    setLoading(false);

                })
                .catch(error => {
                    setMessage(MESSAGE_SENT_FAILED);
                    setLoading(false);
                })

            setShowAlertMessage(true);

        } else {
            setError("captcha", {
                type: "validate",
                message: "Veuillez vérifier que vous n'êtes pas un robot pour continuer !"
            });
        }
    }

    const resetForm = () => {
        setValue("subject", "");
        setValue("message", "");
        resetCaptcha();
    }

    const setCaptchaRef = (ref: any) => {
        if (ref) {
            return captcha = ref;
        }
    };

    const resetCaptcha = () => {
        captcha.reset();
        setRecaptchaValidated(false);
    }

    const setReCAPTCHAVerified = () => {
        setRecaptchaValidated(true);
    }

    const onRecaptchaExpired = () => {
        setRecaptchaValidated(false);
    }

    const handleChangeCaptcha = () => {
        setReCAPTCHAVerified();
        clearErrors("captcha");
    };

    return (
        <div>
            <Wrapper>
                <h1>Contactez-nous</h1>
                <p className="lead">
                    Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle Subtitle
                </p>
            </Wrapper>
            <Container>

                <Form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        {message !== "" ? (
                            !messageSuccessfullySent ?
                                <Expire delay="5000">
                                    <AlertError show={showAlertMessage} message={message} onClick={() => setShowAlertMessage(false)} />
                                </Expire>
                                :
                                <Expire delay="5000">
                                    <AlertSuccess show={showAlertMessage} message={message} onClick={() => setShowAlertMessage(false)} />
                                </Expire>
                        ) : (loading &&
                            <RoundSpinner />)
                        }
                    </div>

                    <Form.Group controlId="contactFormFirstName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Entrer votre prénom"
                            ref={register(Validator.firstName)}
                            onChange={onHandleChange}
                            isInvalid={errors.firstName}
                        />
                        <FormFeedback field={errors.firstName}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormLastName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            placeholder="Entrer votre nom"
                            ref={register(Validator.lastName)}
                            onChange={onHandleChange}
                            isInvalid={errors.lastName}
                        />
                        <FormFeedback field={errors.lastName}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            placeholder="Entrer votre adresse e-mail"
                            ref={register(Validator.email)}
                            onChange={onHandleChange}
                            isInvalid={errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormSubject">
                        <Form.Label>Sujet</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            placeholder="Entrer un sujet"
                            ref={register(Validator.contactSubject)}
                            onChange={onHandleChange}
                            isInvalid={errors.subject}
                        />
                        <FormFeedback field={errors.subject}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows={5}
                            placeholder="Entrer votre message"
                            ref={register(Validator.contactMessage)}
                            onChange={onHandleChange}
                            isInvalid={errors.message}
                        />
                        <FormFeedback field={errors.message}></FormFeedback>
                    </Form.Group>

                    <Form.Group>
                        <Row className="flex-row-space">
                            <ReCAPTCHA
                                ref={(r) => setCaptchaRef(r)}
                                sitekey={SITE_KEY}
                                onChange={handleChangeCaptcha}
                                onExpired={onRecaptchaExpired}
                            />

                            <Button id="submit-contact-btn" variant="primary" type="submit">
                                Envoyer
                            </Button>
                        </Row>
                        {!recaptchaValidated && <FormFeedback field={errors.captcha}></FormFeedback>}
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default ContactUs;
