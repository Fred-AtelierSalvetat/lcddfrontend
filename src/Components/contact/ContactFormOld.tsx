import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReCAPTCHA from "react-google-recaptcha";
import loadReCaptcha from "react-google-recaptcha"

import "./ContactForm.css";
import { Wrapper } from '../wrapper/Wrapper';

const FormStyle = {
    name: {
        width: "357px",
        height: '38px',
        marginBottom: "5%",
    },
    email: {
        width: "750px",
        height: '38px',
        marginBottom: "5%",
    },
    objet: {
        width: "555px",
        height: '38px',
        marginBottom: "5%",
    },
    message: {
        width: "750px",
        height: "135px",
        marginBottom: "5%",
    },
    errorMessage: {
        marginTop: -45,
        marginBottom: 20,
        color: "red",
    },
    buttonConfirm: {
        marginLeft: "60%",
        marginBottom: "5%",
    },
};

var contactTitle = {
    position: 'absolute',
    Height: '33px',
    width: '204px',
    top: '138px',
    left: '618px',
    color: '113F59'
};

const ContactForm = (props: any) => {
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = (data: any) => { console.log(data); }

    function onChange(value: any) {
        console.log("Will be available when domain will be ready", value);
    }


    return (
        <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-class">
                    <label>Prénom</label>
                    <input
                        style={FormStyle.name}
                        name="firstName"
                        placeholder="Entrer votre Prénom"
                        ref={register({ required: true })}
                    />
                    <div style={FormStyle.errorMessage}>
                        {errors.firstName && <span> ⚠ Le Prénom est requis</span>}
                    </div>
                </div>
                <label>Nom</label>
                <input
                    style={FormStyle.name}
                    name="lastName"
                    placeholder="Entrer votre Nom"
                    ref={register({ required: true })}
                />
                <div style={FormStyle.errorMessage}>
                    {errors.lastName && <span> ⚠ Le Nom est requis</span>}
                </div>
                <label>Adresse e-mail</label>
                <input
                    name="eMail"
                    style={FormStyle.email}
                    placeholder="Entrer votre adresse e-mail"
                    ref={register({ required: true })}
                />
                <div style={FormStyle.errorMessage}>
                    {errors.eMail && <span>⚠ Votre adresse e-Mail est requise</span>}
                </div>
                <div>
                    {/* <label for="Name">Objet</label> */}
                    <label>Objet</label>

                </div>
                <input
                    style={FormStyle.objet}
                    name="objet"
                    ref={register({ required: true })}
                />
                <div style={FormStyle.errorMessage}>
                    {errors.objet && <span>⚠ un objet est requis</span>}
                </div>
                <div>
                    <label>Message</label>
                </div>
                <textarea
                    style={FormStyle.message}
                    name="Message"
                    ref={register({ required: true })}
                />
                <div style={FormStyle.errorMessage}>
                    {errors.Message && <span>⚠ un message est requis</span>}
                </div>
                {/* <ReCAPTCHA
                    sitekey="6LfaOQAVAAAAAOPDe-FAz7j1JhI5oUJPCAzb5PJG"
                    onChange={onChange}
                /> */}
                <div style={FormStyle.buttonConfirm}>
                    <Button variant="primary" type="submit">Envoyer</Button>{' '}


                </div>
            </form>
        </Container>
    );
};

export default ContactForm;
