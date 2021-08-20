import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useForm, Controller } from 'react-hook-form';
import { connect } from 'react-redux';
import validator from '~/util/validator';
import { FormFeedback } from '../shared/form/FormFeedBack';
import * as api from '../../api/fetchUsers';
import * as userRoles from '../../state/users/constants/roles';
import chroma from 'chroma-js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import Uploadimage from './Uploadimage';
import Col from 'react-bootstrap/Col';

import { useProfessionsListQuery } from '~/api/lcddbackend-api.generated';

const MyProfileForm = (props) => {
    const currentUser = props.user;

    const currentUserRole = api.findUserByEmail(currentUser.email);

    const { register, handleSubmit, trigger, control, errors } = useForm({});
    const [newUser, setNewUser] = useState(currentUser || {});

    const { data: professions, error } = useProfessionsListQuery();
    error && console.error(error);
    const metiersList = professions.map((profession) => {
        return {
            value: profession.title,
            label: profession.title,
        };
    });

    const getOneColorMultiValueStyle = (multivalueColor) => {
        return {
            control: (styles) => ({ ...styles, backgroundColor: 'white' }),

            multiValue: (styles) => {
                const color = chroma(multivalueColor);
                return {
                    ...styles,
                    backgroundColor: color.alpha(0.1).css(),
                };
            },
            multiValueLabel: (styles) => ({
                ...styles,
                color: multivalueColor,
            }),
            multiValueRemove: (styles) => ({
                ...styles,
                color: multivalueColor,
                ':hover': {
                    backgroundColor: multivalueColor,
                    color: 'white',
                },
            }),
        };
    };

    const animatedComponents = makeAnimated();

    const onSubmit = () => {
        return false;
    };

    const onHandleChange = ({ target }) => {
        const { name, value } = target;
        const validValue = value.trimStart().replace(/\s+/g, ' ');
        setNewUser({
            ...newUser,
            [name]: validValue,
        });
        trigger(name);
    };

    const handleModifyClick = (e) => {
        const parentElement = e.currentTarget.parentNode;
        const inputElement = parentElement.querySelector('input');
        inputElement.readOnly = false;
        inputElement.focus();
    };

    const [value, setValue] = useState('');

    if (props.loggedIn && currentUserRole === userRoles.ROLE_SPEAKER_AWAITING_ANSWER)
        return (
            <>
                <div className="form-title">
                    <h3>Mon profil</h3>
                </div>
                <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Row>
                        <Col className="fullheight-flex-col" xs={12} md={5} lg={5}>
                            <Form.Group controlId="myIntenvenantProfileLastName">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastName"
                                    ref={register(validator.lastName)}
                                    value={newUser.lastName}
                                    onChange={onHandleChange}
                                    onClick={handleModifyClick}
                                    isInvalid={!!errors.lastName}
                                    aria-invalid={!!errors.lastName}
                                    readOnly
                                />
                                <FormFeedback field={errors.lastName}></FormFeedback>
                            </Form.Group>
                            <Form.Group controlId="myIntenvenantProfileFirstName">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstName"
                                    ref={register(validator.firstName)}
                                    value={newUser.firstName}
                                    onChange={onHandleChange}
                                    onClick={handleModifyClick}
                                    isInvalid={!!errors.firstName}
                                    aria-invalid={!!errors.firstName}
                                    readOnly
                                ></Form.Control>
                                <FormFeedback field={errors.firstName}></FormFeedback>
                            </Form.Group>
                            <Form.Group controlId="myProfileProfession">
                                <Form.Label>Profession</Form.Label>
                                <Controller
                                    name="metiers"
                                    control={control}
                                    ref={register(validator.metiers)}
                                    rules={validator.metiers}
                                    render={(field) => (
                                        <Select
                                            className={`select ${
                                                errors.metiers ? 'is-invalid' : metiersList.length ? 'is-valid' : ''
                                            }`}
                                            {...field}
                                            components={animatedComponents}
                                            placeholder="Selectioner votre profession"
                                            closeMenuOnSelect={true}
                                            options={metiersList}
                                            styles={getOneColorMultiValueStyle('#745696')}
                                        />
                                    )}
                                />
                                <FormFeedback field={errors.metiers}></FormFeedback>
                            </Form.Group>
                            <Form.Group controlId="myProfileNumeroTelephone">
                                <Form.Label>Numéro de téléphone</Form.Label>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text>+33</InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control
                                        type="text"
                                        name="phone_number"
                                        ref={register(validator.phone_number)}
                                        isInvalid={!!errors.phone_number}
                                        aria-invalid={!!errors.phone_number}
                                    />
                                    <FormFeedback field={errors.phone_number}></FormFeedback>
                                    <Form.Text className="text-muted">
                                        {"We'll never share your phone number with anyone else."}
                                    </Form.Text>
                                </InputGroup>
                            </Form.Group>
                        </Col>
                        <Col className="fullheight-flex-col" xs={12} md={2} lg={2}></Col>
                        <Col className="fullheight-flex-col" xs={12} md={5} lg={5}>
                            <Form.Group controlId="myProfilePhoto">
                                <Uploadimage />
                            </Form.Group>
                        </Col>
                    </Form.Row>

                    <Form.Group controlId="myProfileEmail">
                        <Form.Label>Adresse e-mail professionelle</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            ref={register(validator.email)}
                            value={newUser.email}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={!!errors.email}
                            aria-invalid={!!errors.email}
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                        <Form.Text className="text-muted">{"We'll never share your email with anyone else."}</Form.Text>
                    </Form.Group>
                    <Form.Group controlId="myProfileCity">
                        <Form.Label>Ville</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            ref={register(validator.city)}
                            value={newUser.city}
                            onChange={onHandleChange}
                            isInvalid={!!errors.city}
                            aria-invalid={!!errors.city}
                        />
                        <FormFeedback field={errors.city}></FormFeedback>
                    </Form.Group>
                    <Form.Group controlId="myProfileBio">
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="bio"
                            placeholder="Ajouter une biographie"
                            ref={register(validator.bio)}
                            isInvalid={!!errors.bio}
                            aria-invalid={!!errors.bio}
                            onChange={(e) => setValue(e.target.value)}
                        />
                        <FormFeedback field={errors.bio}></FormFeedback>
                        <div id="count">
                            <span id="cur_count">{value.length}</span>
                            <span id="maximum_count">/ 200</span>
                        </div>
                    </Form.Group>
                    <Form.Group className="submit-group">
                        <Button type="submit" className="submit-btn">
                            Devenir Intervenant
                        </Button>
                    </Form.Group>
                </Form>
            </>
        );
    else if (props.loggedIn)
        return (
            <>
                <div className="form-title">
                    <h3>Mon profil</h3>
                </div>
                <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group controlId="myProfileLastName">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control
                            type="text"
                            name="lastName"
                            ref={register(validator.lastName)}
                            value={newUser.lastName}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={!!errors.lastName}
                            aria-invalid={!!errors.lastName}
                            readOnly
                        />
                        <FormFeedback field={errors.lastName}></FormFeedback>
                    </Form.Group>
                    <Form.Group controlId="myProfileFirstName">
                        <Form.Label>Prénom</Form.Label>
                        <Form.Control
                            type="text"
                            name="firstName"
                            ref={register(validator.firstName)}
                            value={newUser.firstName}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={!!errors.firstName}
                            aria-invalid={!!errors.firstName}
                            readOnly
                        ></Form.Control>
                        <FormFeedback field={errors.firstName}></FormFeedback>
                    </Form.Group>
                    <Form.Group controlId="myProfileEmail">
                        <Form.Label>Adresse e-mail</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            ref={register(validator.email)}
                            value={newUser.email}
                            onChange={onHandleChange}
                            onClick={handleModifyClick}
                            isInvalid={!!errors.email}
                            aria-invalid={!!errors.email}
                            readOnly
                        />
                        <FormFeedback field={errors.email}></FormFeedback>
                    </Form.Group>
                    <Form.Group controlId="myProfileCity">
                        <Form.Label>Ville</Form.Label>
                        <Form.Control
                            type="text"
                            name="city"
                            ref={register(validator.city)}
                            value={newUser.city}
                            onChange={onHandleChange}
                            isInvalid={!!errors.city}
                            aria-invalid={!!errors.city}
                        />
                        <FormFeedback field={errors.city}></FormFeedback>
                    </Form.Group>
                    <Form.Group className="submit-group">
                        <Button type="submit" className="submit-btn">
                            Modifier
                        </Button>
                    </Form.Group>
                </Form>
            </>
        );
    else return null;
};

const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
};

export default connect(mapStateToProps)(MyProfileForm);
