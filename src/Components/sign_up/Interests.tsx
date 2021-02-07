import React from 'react';
import { Button, Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import InterestCard from './InterestCard';
import thematiques from './thematiques';

// Step 3 UI
const Interests = ({ step, setStep, user, setUser }) => {

    const handleSubmit = () => {
        alert("C'est presque fini ! Allez dans votre boîte mail pour confirmer votre inscription")
    }

    return (
        <Form onSubmit={handleSubmit}>

            <div className="card-deck" style={{ justifyContent: "center" }}>
                {thematiques.map(thematique =>
                    <InterestCard
                        key={thematique.id}
                        src={thematique.src}
                        title={thematique.title}
                    />
                )}
            </div>

            <Form.Group controlId="helloAsso" style={{ marginBottom: "0" }}>
                <input type="checkbox" name="helloAsso" className="form-check-input" tabIndex={50}></input>
                <label className="label-check">Je souhaite m'inscrire à&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href='https://www.helloasso.com/'>HelloAsso</a>
                </label>
            </Form.Group>
            <Form.Group controlId="mentionsLegales">
                <input
                    type="checkbox"
                    name="mlAgreed"
                    className="form-check-input"
                    id="mentionsLegales"
                    tabIndex={50}
                    required
                ></input>
                <label className="label-check">J'ai lu et j'accepte les&nbsp;
                    <a target="_blank" rel="noopener noreferrer" href="#/mentions-legales">mentions légales</a>&nbsp;
                    <span>*</span>
                </label>
            </Form.Group>

            <Button className="btn btn-secondary float-left" tabIndex={50} type="button" onClick={e => setStep(step - 1)}>
                Précédent
            </Button>

            <Button id="submit-button" className="btn btn-primary float-right" tabIndex={50} type="submit">
                Soumettre
            </Button>


        </Form>
    )
}

Interests.propsType = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func
}

export default Interests;