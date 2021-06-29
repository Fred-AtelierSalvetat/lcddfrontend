import React, { FC, useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { validator } from '../../util/validator';
import PropTypes from 'prop-types';
import { FormFeedback } from '../shared/form/FormFeedBack';
import PasswordFormGroup from '../shared/form/PasswordFormGroup';

// Step 2 UI
const userDetailsPropTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
    user: PropTypes.shape({
        role: PropTypes.string.isRequired,
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        password: PropTypes.string.isRequired,
    }).isRequired,
    setUser: PropTypes.func.isRequired,
};
const UserDetails: FC<PropTypes.InferProps<typeof userDetailsPropTypes>> = ({ step, setStep, user, setUser }) => {
    const { register, handleSubmit, setValue, trigger, watch, errors } = useForm({
        criteriaMode: 'all',
    });

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        trigger(name);
        setUser({
            type: 'UPDATE_PERSONAL_INFO',
            payload: { [name]: value },
        });

        // setTimeout(() => {
        //     console.log("error", errors);
        // }, 100)
    };

    // useEffect(() => {
    //     trigger("password");
    // });

    // useEffect(() => {
    //     console.log(errors);
    // });

    const handleContinue = () => {
        setStep(step + 1);
    };

    useEffect(() => {
        setValue('firstName', user.firstName);
        setValue('lastName', user.lastName);
        setValue('city', user.city);
        setValue('email', user.email);
        setValue('password', user.password);
    }, [user]);

    return (
        <Form id="user-detail-form" onSubmit={handleSubmit(handleContinue)} noValidate>
            <Form.Group controlId="inscriptionLastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control
                    type="text"
                    name="lastName"
                    onChange={onHandleChange}
                    ref={register(validator.lastName)}
                    isInvalid={errors.lastName}
                    isValid={!errors.lastName && !!watch('lastName')}
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
                    ref={register(validator.firstName)}
                    isInvalid={errors.firstName}
                    isValid={!errors.firstName && !!watch('firstName')}
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
                    ref={register}
                    isInvalid={errors.city}
                    isValid={!errors.city && !!watch('city')}
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
                    ref={register(validator.email)}
                    isInvalid={errors.email}
                    isValid={!errors.email && watch('email')}
                    tabIndex={1}
                />
                <FormFeedback field={errors.email}></FormFeedback>
            </Form.Group>

            <PasswordFormGroup
                id="passwordGroup"
                controlId="inscriptionPassword"
                label="Mot de passe"
                name="password"
                errors={errors}
                onChange={onHandleChange}
                ref={register(validator.password)}
                isInvalid={errors.password}
                isValid={!errors.password && !!watch('password')}
                errorColumns={2}
            />

            <Button id="submit-btn" type="submit" tabIndex={1} style={{ width: '100%' }}>
                Soumettre
            </Button>
        </Form>
    );
};

UserDetails.propTypes = userDetailsPropTypes;

export default UserDetails;
