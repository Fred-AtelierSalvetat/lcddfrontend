import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";

import "./ContactForm.css";
import { Wrapper } from '../wrapper/Wrapper';

const NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:(\s|.|-|.\s)[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const SITE_KEY = "6LdORCwaAAAAAOe_439Ng6N51SVAlhW2cgPrm5zZ";

const FormFeedback = (props: any) => {
    return (
        <Form.Control.Feedback type="invalid">
            {props.field && props.field.message}
        </Form.Control.Feedback>
    )
}

const ContactForm = (props: any) => {
    const { register, handleSubmit, setValue, errors } = useForm();
    const [recaptchaValue, setRecaptchaValue] = useState(false);
    let captcha: { reset: () => void; };

    const onSubmit = (data: any) => {
        if (recaptchaValue) {

            fetch('http://localhost:8089/api/contact/sendMail', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // We convert the React state to JSON and send it as the POST body
                body: JSON.stringify({
                    "firstName": data.firstName,
                    "lastName": data.lastName,
                    "email": data.email,
                    "subject": data.subject,
                    "message": data.message
                })
            }).then(function(response) {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                }
                else {
                    console.log('Mauvaise réponse du réseau');
                }
            }).catch(function(error) {
                console.log("Il y a eu un problème avec l'opération fetch: " + error.message);
            });

            alert("Votre message a bien été envoyé");
            resetForm();
        } else {
            alert("Veuillez valider la vérification avant d'Envoyer votre message !");
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
        setRecaptchaValue(false);
    }

    const setReCAPTCHAVerified = () => {
        setRecaptchaValue(true);
    }

    const handleChange = () => {
        setReCAPTCHAVerified();
    };

    return (
        <div>
            <Wrapper>
                <h4>Contactez-nous</h4>
            </Wrapper>
            <Container>
                <Form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="contactFormFirstName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            placeholder="Entrer votre prénom"
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Le prénom est requis"
                                },
                                pattern: {
                                    value: NAME_PATTERN,
                                    message: "Le prénom ne doit pas contenir des numéros et des caractères spéciaux"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Le prénom doit contenir au moins 2 caractères"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Le prénom ne doit pas dépasser 30 caractères"
                                }
                            })}
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
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Le nom est requis"
                                },
                                pattern: {
                                    value: NAME_PATTERN,
                                    message: "Le nom ne doit pas contenir des numéros et des caractères spéciaux"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Le nom doit contenir au moins 2 caractères"
                                },
                                maxLength: {
                                    value: 30,
                                    message: "Le nom ne doit pas dépasser 30 caractères"
                                }
                            })}
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
                            ref={register({
                                required: {
                                    value: true,
                                    message: "L'adresse e-mail est requise"
                                },
                                pattern: {
                                    value: EMAIL_PATTERN,
                                    message: "Entrer une addresse e-mail valide",
                                }
                            })}
                            isInvalid={errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormSujet">
                        <Form.Label>Sujet</Form.Label>
                        <Form.Control
                            type="text"
                            name="subject"
                            placeholder="Entrer un sujet"
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Le sujet est requis"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Le sujet doit contenir au moins 2 caractères"
                                },
                                maxLength: {
                                    value: 100,
                                    message: "Le sujet ne doit pas dépasser 100 caractères"
                                }
                            })}
                            isInvalid={errors.subject}
                        />
                        <FormFeedback field={errors.subject}></FormFeedback>
                    </Form.Group>

                    <Form.Group controlId="contactFormMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="message"
                            rows={3}
                            placeholder="Entrer votre message"
                            ref={register({
                                required: {
                                    value: true,
                                    message: "Le message est requis"
                                },
                                minLength: {
                                    value: 2,
                                    message: "Le message doit contenir au moins 2 caractères"
                                },
                                maxLength: {
                                    value: 300,
                                    message: "Le message ne doit pas dépasser 300 caractères"
                                }
                            })}
                            isInvalid={errors.message}
                        />
                        <FormFeedback field={errors.message}></FormFeedback>
                    </Form.Group>

                    <Form.Group>
                        <Row>
                            <Col>
                                <ReCAPTCHA
                                    ref={(r) => setCaptchaRef(r)}
                                    sitekey={SITE_KEY}
                                    onChange={handleChange}
                                />
                            </Col>
                            <Col lg="2" style={{ right: "15px" }}>
                                <Button variant="primary" type="submit" style={{ right: 0, position: "absolute" }}>
                                    Envoyer
                                </Button>
                            </Col>
                        </Row>
                    </Form.Group>
                </Form>
            </Container>
        </div>
    );
};

export default ContactForm;
