import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form';
import InterestCard from '../shared/cards/InterestCard';
import thematiques from '../shared/thematiques';

const ModifyInterestsForm = () => {

    const { handleSubmit } = useForm();

    const onSubmit = () => {
        return false;
    }

    return (
        <>
            <div className="form-title">
                <h3>Modifier vos intérêts</h3>
            </div>
            <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6" style={{ justifyContent: "center" }}>
                    {thematiques.map(thematique =>
                        <InterestCard
                            key={thematique.id}
                            src={thematique.src}
                            title={thematique.title}
                        />
                    )}
                </div>

                <Form.Group className="submit-group">
                    <Button type="submit" className="submit-btn">
                        Modifier
                    </Button>
                </Form.Group>
            </Form>
        </>
    )
}

export default ModifyInterestsForm
