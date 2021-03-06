import React, { FC, useState } from 'react';
import { Jumbotron, Container, Row, Col, Spinner, InputGroup, Button, Form } from 'react-bootstrap';
import { useLocation, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Icon1 from '~/assets/home/2.jpg';
import Icon5 from '~/assets/home/a.png';
import Concept from '~/assets/home/question.jpg';
import validator from '../../util/validator';

const MESSAGE_SENT_SUCCESS = 'Votre message a été bien envoyé';
const MESSAGE_SENT_ERROR_NETWORK = 'Mauvaise réponse du réseau';
const MESSAGE_SENT_FAILED = "Votre message n'a pas été bien envoyé";

const SEND_EMAIL_URL = 'https://y5lwlij6yh.execute-api.eu-west-3.amazonaws.com/prod//intervenantmail';

const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,
};

const RoundSpinner: FC = () => (
    <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
    </Spinner>
);

const alertPropTypes = {
    show: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};

const AlertSuccess: FC<PropTypes.InferProps<typeof alertPropTypes>> = ({ show, message, onClick }) => (
    <div className={`alert alert-success ${show ? 'alert-shown' : 'alert-hidden'}`}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
        </button>
        <strong>OK</strong> :<span> {message} </span>
    </div>
);
AlertSuccess.propTypes = alertPropTypes;

const AlertError: FC<PropTypes.InferProps<typeof alertPropTypes>> = ({ show, message, onClick }) => (
    <div className={`alert alert-danger ${show ? 'alert-shown' : 'alert-hidden'}`}>
        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={onClick}>
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
        </button>
        <strong>Erreur</strong> :<span> {message} </span>
    </div>
);
AlertError.propTypes = alertPropTypes;

const backgroundTransparency = {
    backgroundColor: 'rgba(255,255,255,0.9)',
};

const formFeedbackPropTypes = { field: PropTypes.shape({ message: PropTypes.string }) };
const FormFeedback: FC<PropTypes.InferProps<typeof formFeedbackPropTypes>> = (props) => (
    <Form.Control.Feedback type="invalid">{props.field && props.field.message}</Form.Control.Feedback>
);
FormFeedback.propTypes = formFeedbackPropTypes;

type DevenirIntervenantFormData = {
    email: string;
    phone_number: string;
};
const DevenirintervenantComponent: FC = () => {
    const history = useHistory();
    const location = useLocation();
    const { register, handleSubmit, errors } = useForm<DevenirIntervenantFormData>();
    const [showAlertMessage, setShowAlertMessage] = useState(false);
    const [messageSuccessfullySent, setMessageSuccessfullySent] = useState(false);
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const onSubmit: (data: DevenirIntervenantFormData) => void = (data) => {
        console.log('onSubmit, createNewWorkshop action call with data =', data);
        setMessage('');
        setLoading(true);

        fetch(SEND_EMAIL_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    // Response was successful
                    if (response.status === 200) {
                        console.log(MESSAGE_SENT_SUCCESS);
                        setMessageSuccessfullySent(true);
                        setMessage(MESSAGE_SENT_SUCCESS);
                        RedirectionDevenirIntervenantEnvoyee();
                    } else {
                        console.log(MESSAGE_SENT_FAILED);
                        setMessageSuccessfullySent(false);
                        setMessage(MESSAGE_SENT_FAILED);
                    }
                } else {
                    // Network problem
                    setMessage(MESSAGE_SENT_ERROR_NETWORK);
                }
                setLoading(false);
            })
            .catch(() => {
                setMessage(MESSAGE_SENT_FAILED);
                setLoading(false);
            });

        setShowAlertMessage(true);
    };

    const RedirectionDevenirIntervenantEnvoyee = () => {
        history.push('/devenirintervenantenvoyee'); // Redirect to DevenirIntervenantEnvoyee
    };

    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container fluid>
                <Row>
                    <Col xs="12" sm="12" md="6" style={backgroundTransparency}>
                        <div className=" mt-md-5 pt-md-5 mx-xl-4 px-md-5 p-2">
                            <div>
                                <h1 className="text-left mb-3 font-weight-normal">Devenir intervenant</h1>
                                <br />
                                <p>
                                    Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in debitis
                                    iusto accusantium impedit excepturi reprehenderit recusandae ipsa repudiandae, vitae
                                    fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in debitis
                                    iusto accusantium impedit excepturi reprehenderit recusandae
                                </p>
                            </div>
                            <br />

                            <div className="mt-md-5 mt-3">
                                <Row>
                                    <Col xs="12" md="10">
                                        <div className="d-flex justify-content-between">
                                            <h3 className="text-left">Creer des ateliers</h3>
                                            <img width="100px" src={Icon1} alt="icon1" className="d-block d-md-none" />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit
                                            natus ad minima voluptatum
                                        </p>
                                    </Col>
                                    <Col xs="2" className="pl-0 d-none d-md-block">
                                        <img className="w-100" src={Icon1} alt="icon1" />
                                    </Col>
                                </Row>
                            </div>
                            <br />
                            <div className="mt-md-5 mt-3">
                                <Row>
                                    <Col xs="2" className="pr-0 d-none d-md-block">
                                        <img className="w-100" src={Icon1} alt="icon1" />
                                    </Col>
                                    <Col xs="12" md="10">
                                        <div className="d-flex justify-content-between">
                                            <img width="100px" src={Icon1} alt="icon1" className="d-block d-md-none" />
                                            <h3 className="text-left">Repondre aux questions des citoyens</h3>
                                        </div>

                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit
                                            natus ad minima voluptatum
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                            <br />

                            <div className="mt-md-5 mt-3">
                                <Row>
                                    <Col xs="12" md="10">
                                        <div className="d-flex justify-content-between">
                                            <h3 className="text-left">Creer des ateliers</h3>
                                            <img width="100px" src={Icon1} alt="icon1" className="d-block d-md-none" />
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit
                                            natus ad minima voluptatum
                                        </p>
                                    </Col>
                                    <Col xs="2" className="pl-0 d-none d-md-block">
                                        <img className="w-100" src={Icon1} alt="icon1" />
                                    </Col>
                                </Row>
                            </div>
                            <br />

                            <div className="my-md-5 pb-md-5 my-3">
                                <Row>
                                    <Col xs="2" className="pr-0 d-none d-md-block">
                                        <img className="w-100" src={Icon1} alt="icon1" />
                                    </Col>

                                    <Col xs="12" md="10">
                                        <div className="d-flex justify-content-between">
                                            <img width="100px" src={Icon1} alt="icon1" className="d-block d-md-none" />
                                            <h3 className="text-left">Repondre aux questions des citoyens</h3>
                                        </div>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit
                                            natus ad minima voluptatum
                                        </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm="12" md="6">
                        <div className="intervenir mt-5 pb-5 mx-auto pt-md-5">
                            <div className="bg-white mb-5">
                                {location.pathname === '/devenirintervenant' ? (
                                    <div className="py-4 px-3 py-md-5 px-md-4">
                                        <h2 className="text-left font-weight-normal" style={{ lineHeight: '150%' }}>
                                            Je souhaiterai intervenir
                                        </h2>
                                        <h5 className="text-left font-weight-normal" style={{ lineHeight: '300%' }}>
                                            Nous vous contacterons
                                        </h5>
                                        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                                            <div>
                                                {message !== '' ? (
                                                    !messageSuccessfullySent ? (
                                                        <AlertError
                                                            show={showAlertMessage}
                                                            message={message}
                                                            onClick={() => setShowAlertMessage(false)}
                                                        />
                                                    ) : (
                                                        <AlertSuccess
                                                            show={showAlertMessage}
                                                            message={message}
                                                            onClick={() => setShowAlertMessage(false)}
                                                        />
                                                    )
                                                ) : (
                                                    loading && <RoundSpinner />
                                                )}
                                            </div>
                                            <Form.Group controlId="inscriptionEmail">
                                                <Form.Label>Adresse email professionelle </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Entrer votre adresse e-mail"
                                                    ref={register(validator.email)}
                                                    isInvalid={!!errors.email}
                                                    aria-invalid={!!errors.email}
                                                    tabIndex={1}
                                                />
                                                <FormFeedback field={errors.email} />
                                                <Form.Text className="text-muted">
                                                    {"We'll never share your email with anyone else."}
                                                </Form.Text>
                                            </Form.Group>
                                            <Form.Group controlId="Numero de télephone">
                                                <Form.Label>Numéro de téléphone</Form.Label>
                                                <InputGroup>
                                                    <InputGroup.Prepend>
                                                        <InputGroup.Text>+33</InputGroup.Text>
                                                    </InputGroup.Prepend>
                                                    <Form.Control
                                                        type="text"
                                                        name="phone_number"
                                                        placeholder="Entrer votre numéro de téléphone"
                                                        ref={register(validator.phone_number)}
                                                        isInvalid={errors.phone_number}
                                                        aria-invalid={!!errors.phone_number}
                                                        tabIndex={1}
                                                    />
                                                    <FormFeedback field={errors.phone_number} />
                                                    <Form.Text className="text-muted">
                                                        {"We'll never share your phone number with anyone else."}
                                                    </Form.Text>
                                                </InputGroup>
                                            </Form.Group>
                                            <Form.Group>
                                                <div className="text-right">
                                                    <Button className="btn btn-primary" type="submit" tabIndex={4}>
                                                        Envoyer
                                                    </Button>
                                                </div>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                ) : (
                                    <div className="py-4 px-3 py-md-5 px-md-4">
                                        <Row>
                                            <Col />
                                            <Col>
                                                {' '}
                                                <img className="w-100" src={Icon5} alt="a" />
                                            </Col>
                                            <Col />
                                        </Row>
                                        <br /> <br />
                                        <Row>
                                            <div className="row h-100 justify-content-center align-items-center">
                                                <h2>Votre requête a été envoyée avec succès</h2>
                                                <br /> <br /> <br /> <br />
                                                <p className="">Nous vous contacterons bientôt</p>
                                            </div>
                                        </Row>
                                    </div>
                                )}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );
};

export default DevenirintervenantComponent;
