import React, { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import Feedback from 'react-bootstrap/esm/Feedback';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import styled, { css } from 'styled-components';
import { BiCheckCircle } from 'react-icons/bi';

const hideEye = <AiOutlineEyeInvisible />;
const openEye = <AiOutlineEye />;

const passwordError = {
    required: "Le mot de passe est requis",
    oneLowerCase: "Un charactère minuscule",
    oneUpperCase: "Un charactère majuscule",
    oneDigit: "Un chiffre",
    oneSpecial: "Un charactère spécial",
    minLength: "Au moins 8 caractères"
}

const getValidityErrorOnType = (type, errors) => {
    if (errors) {
        if (errors.password) {
            if (errors.password.types) {
                if (errors.password.types[type]) {
                    console.log(type);
                    return "invalid";
                }
            }
        }
    }
    return "valid";
}

const FeedbackStyled = styled(Feedback)`
    ${props => !props.activatevalidation && css`
        color: unset;
    `}
`;

const AlertMessage = styled.div`
    position: absolute;
    font-size: 0.9em;
    color: var(--success);
    background-color: #d9eee1;
    border-radius: 2px;
    margin-top: 1em;
    padding: 0.5em;
`;

const BiCheckCircleStyled = styled(BiCheckCircle)`
    font-size: x-large;
    vertical-align: bottom;
    margin-right: 0.2em;
`;

const PasswordError = ({ errors, columns, className, activateValidation }) => {
    if (activateValidation && !errors.password) {
        return (
            <AlertMessage>
                <BiCheckCircleStyled />
                <span>Votre mot de passe est bien sécurisé !</span>
            </AlertMessage>
        );
    }
    else return (
        <div className={className}>
            {Object.keys(passwordError).map((type, index) => {
                const _type = getValidityErrorOnType(type, errors);
                const _color = activateValidation ? (_type === 'valid' ? 'var(--success)' : 'var(--danger)') : null;
                return (
                    <li key={index} style={{ color: _color }}>
                        <FeedbackStyled
                            type={_type}
                            activatevalidation={activateValidation ? 1 : 0}
                        >
                            {passwordError[type]}
                        </FeedbackStyled>
                    </li>

                );
            })}
        </div >
    );
};


const PasswordErrorStyled = styled(PasswordError)`
    column-count: ${props => props.columns};
    -moz-column-count: ${props => props.columns}
    -webkit-column-count: ${props => props.columns};
    position: absolute;
    width: 100%;
    list-style: inside;

    .valid-feedback,
    .invalid-feedback {
        display: contents;
        position: unset;
        margin-top: 0;
    }
`;

const PasswordFormGroup = ({ controlId, label, ...props }) => {

    const [showPass, setShowPass] = useState(false);
    const [activateValidation, setActivateValidation] = useState(false);
    // current password eye icon
    const pwdEye = showPass ? openEye : hideEye;

    const handleEyeIconCurrentPassword = () => {
        setShowPass(!showPass);
    }

    const handleChange = (e) => {
        if (props.onChange) {
            setActivateValidation(true);
            props.onChange(e);
        }
    }

    return (
        <Form.Group controlId={controlId} id={props.id} className={props.className}>
            <Form.Label>{label}</Form.Label>
            <InputGroup className="passwordInputGroup">
                <Form.Control
                    type={showPass ? "text" : "password"}
                    name={props.name}
                    onChange={e => handleChange(e)}
                    ref={props._ref}
                    isInvalid={props.isInvalid}
                    isValid={props.isValid}
                    autoComplete="new-password"
                    tabIndex={1}
                />
                <i onClick={handleEyeIconCurrentPassword}>{pwdEye}</i>
            </InputGroup>
            { props.errors &&
                <PasswordErrorStyled
                    errors={props.errors}
                    columns={props.errorColumns}
                    activateValidation={activateValidation}
                />
            }
        </Form.Group>
    );
}

export default PasswordFormGroup;