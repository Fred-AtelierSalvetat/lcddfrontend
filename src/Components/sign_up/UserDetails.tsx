import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Validator } from './validator';
import PropTypes from 'prop-types';

const FormFeedback = (props: any) => {
    return (
        <Form.Control.Feedback type="invalid">
            {props.field && props.field.message}
        </Form.Control.Feedback>
    )
}

// Step 2 UI
const UserDetails = ({ step, setStep, user, setUser }) => {
    const { register, handleSubmit, setValue, getValues, errors } = useForm();

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        setUser({
            type: 'UPDATE_PERSONAL_INFO',
            payload: { [name]: value },
        });
    }

    const handleContinue = () => {
        setStep(step + 1);
    }

    useEffect(() => {
        setValue("firstName", user.firstName);
        setValue("lastName", user.lastName);
        setValue("city", user.city);
        setValue("email", user.email);
        setValue("password", user.password);
    }, [user]);

    return (
        <Form onSubmit={handleSubmit(handleContinue)} noValidate>
            <Form.Group controlId="inscriptionFirstName">
                <Form.Label>Prénom *</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Entrer votre prénom"
                    onChange={onHandleChange}
                    value={getValues("firstName")}
                    ref={register(Validator.firstName)}
                    isInvalid={errors.firstName}
                    tabIndex={1}
                />
                <FormFeedback field={errors.firstName}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionLastName">
                <Form.Label>Nom *</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Entrer votre nom"
                    onChange={onHandleChange}
                    value={getValues("lastName")}
                    ref={register(Validator.lastName)}
                    isInvalid={errors.lastName}
                    tabIndex={1}
                />
                <FormFeedback field={errors.lastName}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionCity">
                <Form.Label>Ville (facultatif)</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    placeholder="Ex: Nice"
                    onChange={onHandleChange}
                    value={getValues("city")}
                    ref={register}
                    isInvalid={errors.city}
                    tabIndex={1}
                />
                <FormFeedback field={errors.city}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionEmail">
                <Form.Label>Email *</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    placeholder="Entrer votre adresse e-mail"
                    onChange={onHandleChange}
                    value={getValues("email")}
                    ref={register(Validator.email)}
                    isInvalid={errors.email}
                    tabIndex={1}
                />
                <FormFeedback field={errors.email}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionPassword">
                <Form.Label>Mot de passe *</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    placeholder="Entrer le mot de passe"
                    onChange={onHandleChange}
                    value={getValues("password")}
                    ref={register(Validator.password)}
                    isInvalid={errors.password}
                    tabIndex={1}
                />
                <FormFeedback field={errors.password}></FormFeedback>
            </Form.Group>

            <Form.Group>
                <Button
                    className="btn btn-secondary float-left"
                    type="button"
                    onClick={e => setStep(step - 1)}
                    tabIndex={1}>
                    Précédent
                </Button>
                <Button
                    className="btn btn-primary float-right"
                    type="submit"
                    tabIndex={1}>
                    Suivant
            </Button>
            </Form.Group>
        </Form>
    )
}

UserDetails.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}

export default UserDetails;