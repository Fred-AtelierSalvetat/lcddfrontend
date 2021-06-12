import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Validator } from '~/util/validator';
import PasswordFormGroup from '../shared/form/PasswordFormGroup';

const ModifyPasswordForm: FC = () => {
    const { register, handleSubmit, errors, trigger } = useForm({
        criteriaMode: 'all',
    });

    const onSubmit = () => {
        return false;
    };

    const onHandleChange = (e) => {
        trigger(e.target.name);
    };

    return (
        <>
            <div className="form-title">
                <h3>Modifier votre mot de passe</h3>
            </div>
            <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                <PasswordFormGroup controlId="myProfileCurrentPassword" label="Mot de passe actuel" />

                <PasswordFormGroup
                    id="newPasswordGroup"
                    controlId="myProfileNewPassword"
                    label="Nouveau mot de passe"
                    name="password"
                    onChange={onHandleChange}
                    ref={register(Validator.password)}
                    isInvalid={errors.password}
                    errors={errors}
                    errorColumns={2}
                />

                {/* <Form.Group controlId="myProfileNewPassword">
                    <Form.Label>Nouveau mot de passe</Form.Label>
                    <InputGroup>
                        <Form.Control
                            type={showNewPassword ? "text" : "password"}
                            name="password"
                            ref={register(Validator.password)}
                            onChange={onHandleChange}
                            isInvalid={errors.password}
                        />
                        <i onClick={handleEyeIconNewPassword}>{npwdEye}</i>
                    </InputGroup>
                    <FormFeedback field={errors.password}></FormFeedback>
                </Form.Group> */}
                <Form.Group className="submit-group">
                    <Button type="submit" className="submit-btn">
                        Modifier
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default ModifyPasswordForm;
