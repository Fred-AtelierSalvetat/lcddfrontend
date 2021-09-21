import React, { FC } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import InterestCard from '../shared/cards/InterestCard';
import { useGetAllTopicsQuery } from '~/api/lcddbackend-api.generated';

const ModifyInterestsForm: FC = () => {
    const { handleSubmit } = useForm();

    const { data: topics, error, isLoading } = useGetAllTopicsQuery();
    if (error) {
        console.error(error);
        return <div>{"Domaines d'expertise, erreur de chargement"}</div>;
    }

    const onSubmit = () => false;
    // TODOFSA Add spinner
    return isLoading ? (
        <p>{"Domaines d'expertises, chargement en cours"}</p>
    ) : (
        <>
            <div className="form-title">
                <h3>Modifier vos intérêts</h3>
            </div>
            <Form className="lcdd-form" onSubmit={handleSubmit(onSubmit)}>
                <div
                    className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-4 row-cols-xl-6"
                    style={{ justifyContent: 'center' }}
                >
                    {topics.map((topic) => (
                        <InterestCard key={topic.id} src={topic.file} title={topîc.topic} />
                    ))}
                </div>

                <Form.Group className="submit-group">
                    <Button type="submit" className="submit-btn">
                        Modifier
                    </Button>
                </Form.Group>
            </Form>
        </>
    );
};

export default ModifyInterestsForm;
