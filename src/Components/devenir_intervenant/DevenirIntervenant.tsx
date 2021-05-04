import React, { useEffect, useState } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import Icon1 from '~/assets/home/2.jpg';
import Icon5 from '~/assets/home/a.png';
import Concept from '~/assets/home/question.jpg';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Validator } from '../../util/validator';


const jumbotron = {
    backgroundImage: `url(${Concept})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'top',
    minHeight: '50vw',
    marginBottom: 0,


};

const backgroundTransparency = {
    backgroundColor: 'rgba(255,255,255,0.9)',

}

const FormFeedback = (props: any) => {
    return (
        <Form.Control.Feedback type="invalid">
            {props.field && props.field.message}
        </Form.Control.Feedback>
    )
}

const DevenirintervenantComponent = (props) => {
    const { register, handleSubmit, setValue, getValues, errors } = useForm();
    const [email, setEmail] = useState(null);

    const onHandleChange = ({ target }) => {
        const { name, value } = target;

    }

    const onSubmit = () => {

    }


    return (
        <Jumbotron fluid style={jumbotron} className="d-flex flex-column justify-content-center">
            <Container fluid >

                <Row>
                    <Col xs="12" sm='12' md='6' style={backgroundTransparency} >
                        <div className=' mt-md-5 pt-md-5 mx-xl-4 px-md-5 p-2'>
                            <div>
                                <h1 className='text-left mb-3 font-weight-normal'>
                                    Devenir intervenant
                                </h1>
                                <br />
                                <p>
                                    Lorem  Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in debitis iusto accusantium impedit excepturi reprehenderit recusandae ipsa repudiandae, vitae fugit,Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem in debitis iusto accusantium impedit excepturi reprehenderit recusandae
                                </p>
                            </div>
                            <br />

                            <div className='mt-md-5 mt-3'>
                                <Row>
                                    <Col xs='12' md='10'>
                                        <div className="d-flex justify-content-between">
                                            <h3 className='text-left'>Creer des ateliers</h3>
                                            <img width='100px' src={Icon1} alt="icon1" className='d-block d-md-none' />

                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit natus ad minima voluptatum
                            </p>
                                    </Col>
                                    <Col xs='2' className='pl-0 d-none d-md-block' >
                                        <img className='w-100' src={Icon1} alt="icon1" />
                                    </Col>
                                </Row>
                            </div>
                            <br />
                            <div className='mt-md-5 mt-3'>
                                <Row>
                                    <Col xs='2' className='pr-0 d-none d-md-block' >
                                        <img className='w-100' src={Icon1} alt="icon1" />
                                    </Col>
                                    <Col xs='12' md='10'>
                                        <div className="d-flex justify-content-between">
                                            <img width='100px' src={Icon1} alt="icon1" className='d-block d-md-none' />
                                            <h3 className='text-left'>
                                                Repondre aux questions des citoyens</h3>
                                        </div>

                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit natus ad minima voluptatum
                                    </p>
                                    </Col>
                                </Row>
                            </div>
                            <br />

                            <div className='mt-md-5 mt-3'>
                                <Row>
                                    <Col xs='12' md='10'>
                                        <div className="d-flex justify-content-between">
                                            <h3 className='text-left'>
                                                Creer des ateliers
                                            </h3>
                                            <img width='100px' src={Icon1} alt="icon1" className='d-block d-md-none' />
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit natus ad minima voluptatum
                                    </p>
                                    </Col>
                                    <Col xs='2' className='pl-0 d-none d-md-block' >
                                        <img className='w-100' src={Icon1} alt="icon1" />
                                    </Col>
                                </Row>
                            </div>
                            <br />

                            <div className='my-md-5 pb-md-5 my-3'>
                                <Row>
                                    <Col xs='2' className='pr-0 d-none d-md-block' >
                                        <img className='w-100' src={Icon1} alt="icon1" />
                                    </Col>

                                    <Col xs='12' md='10'>
                                        <div className="d-flex justify-content-between">
                                            <img width='100px' src={Icon1} alt="icon1" className='d-block d-md-none' />
                                            <h3 className='text-left'>
                                                Repondre aux questions des citoyens
                                            </h3>
                                        </div>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet totam velit natus ad minima voluptatum
                                    </p>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Col>
                    <Col xs="12" sm='12' md='6'   >
                        <div className="intervenir mt-5 pb-5 mx-auto pt-md-5">
                            <div className="bg-white mb-5">
                                {props.location.pathname === "/devenirintervenant" ? (
                                    <div className='py-4 px-3 py-md-5 px-md-4'>
                                        <h2 className='text-left font-weight-normal'>
                                            Je souhaiterai intervenir
                                        </h2>
                                        <h5 className='text-left font-weight-normal'>
                                            Nous vous contacterons</h5>
                                        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
                                            <Form.Group controlId="inscriptionEmail" >
                                                <Form.Label >Adresse email professionelle </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    name="email"
                                                    placeholder="Entrer votre adresse e-mail"
                                                    ref={register(Validator.email)}
                                                    isInvalid={errors.email}
                                                    tabIndex={1}
                                                />
                                                <FormFeedback field={errors.email}></FormFeedback>
                                            </Form.Group>
                                            <Form.Group controlId="Numero de télephone" >
                                                <Form.Label >Numéro de téléphone</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="phone_number"
                                                    placeholder="Entrer votre numéro de téléphone"

                                                    ref={register(Validator.phone_number)}
                                                    isInvalid={errors.phone_number}
                                                    tabIndex={1}
                                                />
                                                <FormFeedback field={errors.phone_number}></FormFeedback>
                                            </Form.Group>
                                            <Form.Group>
                                                <div className="text-right">
                                                    <Button
                                                        className="btn btn-primary"
                                                        type="submit"
                                                        tabIndex={4}>
                                                        Envoyer
                                                </Button>
                                                </div>
                                            </Form.Group>
                                        </Form>
                                    </div>
                                ) : (
                                        <div className='py-4 px-3 py-md-5 px-md-4'>
                                            <Row>
                                                <Col></Col>
                                                <Col> <img className='w-100' src={Icon5} alt="a" /></Col>
                                                <Col></Col>


                                            </Row>
                                            <br /> <br />

                                            <Row>
                                                <div className="row h-100 justify-content-center align-items-center">
                                                    <h2>Votre requête a été envoyée avec succès</h2>
                                                    <br /> <br /> <br /> <br />

                                                    <p className=''>Nous vous contacterons bientôt</p>
                                                </div>
                                            </Row>
                                        </div>)
                                }
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>

        </Jumbotron>
    )
}

export default DevenirintervenantComponent;
