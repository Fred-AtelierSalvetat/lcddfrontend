import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Validator } from '../../util/validator';
import PropTypes from 'prop-types';
import { FormFeedback } from '../shared/form/FormFeedBack';

// Step 2 UI
const UserDetails = ({ step, setStep, user, setUser }) => {
    const { register, handleSubmit, setValue, getValues, trigger, errors } = useForm();

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        trigger(name);
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
        <Form id="user-detail-form" onSubmit={handleSubmit(handleContinue)} noValidate>
            <Form.Group controlId="inscriptionLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    onChange={onHandleChange}
                    value={getValues("lastName")}
                    ref={register(Validator.lastName)}
                    isInvalid={errors.lastName}
                    tabIndex={1}
                />
                <FormFeedback field={errors.lastName}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionFirstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control
                    type="text"
                    name="firstName"
                    onChange={onHandleChange}
                    value={getValues("firstName")}
                    ref={register(Validator.firstName)}
                    isInvalid={errors.firstName}
                    tabIndex={1}
                />
                <FormFeedback field={errors.firstName}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionCity">
                <Form.Label>Ville (facultatif)</Form.Label>
                <Form.Control
                    type="text"
                    name="city"
                    onChange={onHandleChange}
                    value={getValues("city")}
                    ref={register}
                    isInvalid={errors.city}
                    tabIndex={1}
                />
                <FormFeedback field={errors.city}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="email"
                    name="email"
                    onChange={onHandleChange}
                    value={getValues("email")}
                    ref={register(Validator.email)}
                    isInvalid={errors.email}
                    tabIndex={1}
                />
                <FormFeedback field={errors.email}></FormFeedback>
            </Form.Group>

            <Form.Group controlId="inscriptionPassword">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control
                    type="password"
                    name="password"
                    onChange={onHandleChange}
                    value={getValues("password")}
                    ref={register(Validator.password)}
                    isInvalid={errors.password}
                    tabIndex={1}
                />
                <FormFeedback field={errors.password}></FormFeedback>
            </Form.Group>

            <Button
                id="submit-btn"
                type="submit"
                tabIndex={1}
                style={{ width: "100%" }}>
                Soumettre
            </Button>
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