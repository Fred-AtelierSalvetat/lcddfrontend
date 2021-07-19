import React, { FC, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { Container, Button, Form } from 'react-bootstrap';
import { validator } from '~/util/validator';
import { FormFeedback } from '../shared/form/FormFeedBack';
import './SignIn.scss';

const Header = () => {
    return (
        <div className="login-header">
            <h1>Réinitialiser votre mot de passe</h1>
            <h4>Remplir votre nouveau mot de passe</h4>
        </div>
    );
};

const SignInResetPassword: FC = () => {
    const { register, handleSubmit, errors, watch } = useForm();
    const password = useRef({});
    password.current = watch('password', '');

    const onHandleSummit = async (data) => {
        alert(JSON.stringify(data));
    };

    return (
        <div className="lcdd-body-bg">
            <Container fluid className="container-login">
                <div>
                    <Header></Header>
                    <div className="login-body">
                        <div className="login-form">
                            <Form className="login-form" onSubmit={handleSubmit(onHandleSummit)}>
                                <Form.Group controlId="loginFormEmail">
                                    <Form.Label>Mot de passe</Form.Label>
                                    <Form.Control
                                        autoFocus
                                        type="password"
                                        name="password"
                                        ref={register(validator.password)}
                                        isInvalid={!!errors.password}
                                        aria-invalid={!!errors.password}
                                    />
                                    <FormFeedback field={errors.password}></FormFeedback>
                                </Form.Group>

                                <Form.Group controlId="loginFormPassword" style={{ marginBottom: '60px' }}>
                                    <Form.Label>Confirmer mot de passe</Form.Label>
                                    <Form.Control
                                        type="password"
                                        name="passwordConfirmed"
                                        ref={register({
                                            validate: (value) =>
                                                value === password.current || 'Les mots de passe ne correspondent pas',
                                        })}
                                        isInvalid={!!errors.passwordConfirmed}
                                        aria-invalid={!!errors.passwordConfirmed}
                                    />
                                    <FormFeedback field={errors.passwordConfirmed}></FormFeedback>
                                </Form.Group>

                                <Button variant="primary" type="submit" style={{ width: '100%' }}>
                                    Confirmer
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default SignInResetPassword;
