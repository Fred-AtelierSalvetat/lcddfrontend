import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { connect } from 'react-redux';
import { Validator } from '~/util/validator';
import { TiPencil } from 'react-icons/ti';
import { FormFeedback } from '../shared/form/FormFeedBack';

const MyProfileForm = (props) => {

    const currentUser = props.user;
    const { register, handleSubmit, trigger, errors } = useForm();
    const [newUser, setNewUser] = useState(currentUser || {});

    const onSubmit = () => {
        return false;
    }

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        const validValue = value.trimStart().replace(/\s+/g, ' ');
        console.log(name, validValue);
        setNewUser({
            ...newUser,
            [name]: validValue,
        });
        trigger(name);
    }

    const handleModifyClick = (e) => {
        const parentElement = e.currentTarget.parentNode;
        const inputElement = parentElement.querySelector('input');
        inputElement.readOnly = false;
        inputElement.focus();
    }

    if (props.loggedIn) return (
        <>
            <div className="form-title">
                <h3>Mon profil</h3>
            </div>
            <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="myProfileLastName">
                    <Form.Label>Nom</Form.Label>
                    {/* <InputGroup id="lastNameInputGroup"> */}
                        <Form.Control
                            type="text"
                            name="lastName"
                            ref={register(Validator.lastName)}
                            value={newUser.lastName}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={errors.lastName}
                            readOnly
                        />
                        {/* <InputGroup.Append onClick={handleModifyClick}>
                            <InputGroup.Text><TiPencil /></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}
                    <FormFeedback field={errors.lastName}></FormFeedback>
                </Form.Group>
                <Form.Group controlId="myProfileFirstName">
                    <Form.Label>Prénom</Form.Label>
                    {/* <InputGroup id="firstNameInputGroup"> */}
                        <Form.Control
                            type="text"
                            name="firstName"
                            ref={register(Validator.firstName)}
                            value={newUser.firstName}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={errors.firstName}
                            readOnly
                        ></Form.Control>
                        {/* <InputGroup.Append onClick={handleModifyClick}>
                            <InputGroup.Text><TiPencil /></InputGroup.Text>
                        </InputGroup.Append> */}
                    {/* </InputGroup> */}
                    <FormFeedback field={errors.firstName}></FormFeedback>
                </Form.Group>
                <Form.Group controlId="myProfileEmail">
                    <Form.Label>Adresse e-mail</Form.Label>
                    {/* <InputGroup id="emailInputGroup"> */}
                        <Form.Control
                            type="email"
                            name="email"
                            ref={register(Validator.email)}
                            value={newUser.email}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={errors.email}
                            readOnly
                        />
                        {/* <InputGroup.Append onClick={handleModifyClick}>
                            <InputGroup.Text><TiPencil /></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}
                    <FormFeedback field={errors.email}></FormFeedback>
                </Form.Group>
                <Form.Group controlId="myProfileCity">
                    <Form.Label>Ville</Form.Label>
                    {/* <InputGroup id="cityInputGroup"> */}
                        <Form.Control
                            type="text"
                            name="city"
                            ref={register(Validator.city)}
                            value={newUser.city}
                            onChange={onHandleChange}
                            isInvalid={errors.city}
                            // readOnly
                        />
                        {/* <InputGroup.Append onClick={handleModifyClick}>
                            <InputGroup.Text><TiPencil /></InputGroup.Text>
                        </InputGroup.Append>
                    </InputGroup> */}
                    <FormFeedback field={errors.city}></FormFeedback>
                </Form.Group>
                <Form.Group className="submit-group">
                    <Button type="submit" className="submit-btn">
                        Modifier
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
    else return null;
}

const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
}

export default connect(mapStateToProps)(MyProfileForm)
