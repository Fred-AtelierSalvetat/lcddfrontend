import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { Validator } from '~/util/validator';
import { FormFeedback } from '../shared/form/FormFeedBack';

const hideEye = <AiOutlineEyeInvisible />;
const openEye = <AiOutlineEye />;

const ModifyPasswordForm = () => {

    const { register, handleSubmit, errors, trigger } = useForm();

    const [showCurrentPassword, setShowCurrentPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);

    // current password eye icon
    const cpwdEye = showCurrentPassword ? openEye : hideEye;
    // new password eye icon
    const npwdEye = showNewPassword ? openEye : hideEye;

    const handleEyeIconCurrentPassword = () => {
        setShowCurrentPassword(!showCurrentPassword);
    }

    const handleEyeIconNewPassword = () => {
        setShowNewPassword(!showNewPassword);
    }

    const onSubmit = () => {
        return false;
    }

    const onHandleChange = (e) => {
        trigger(e.target.name);
    }

    return (
        <>
            <div className="form-title">
                <h3>Modifier votre mot de passe</h3>
            </div>
            <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="myProfileCurrentPassword">
                    <Form.Label>Mot de passe actuel</Form.Label>
                    <InputGroup id="passwordInputGroup">
                        <Form.Control
                            type={showCurrentPassword ? "text" : "password"}
                        />
                        <i onClick={handleEyeIconCurrentPassword}>{cpwdEye}</i>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="myProfileNewPassword">
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
                </Form.Group>
                <Form.Group className="submit-group">
                    <Button type="submit" className="submit-btn">
                        Modifier
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default ModifyPasswordForm
