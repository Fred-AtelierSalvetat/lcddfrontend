import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import WkspFormBody from '../shared/WkspFormBody';
import defaultValues from '../shared/defaultValues';
import './NewWorkshop.scss';

import { useDispatch } from 'react-redux';
import { newWorkshop } from '~/state/workshops/actions';

const NewWorkshop: FC = () => {
    const { handleSubmit, reset, ...othersFormProp } = useForm({
        mode: 'all',
        defaultValues,
    });

    const dispatch = useDispatch();
    const history = useHistory();

    const onSubmit = (data) => {
        dispatch(
            newWorkshop({
                title: data.title,
                startingdate: data.startingdate,
                // endingdate, //TODO
                speakers: data.speakers.map((obj) => obj.value),
                topics: data.topics.map((obj) => obj.value),
                refsLegifrance: data.refsLegifrance.map((obj) => obj.value),
                description: data.description,
                keywords: data.keywords,
                files: data.files,
                links: data.links,
            }),
        );
        history.push('/dashboard/workshops'); //TODO Add sort by status
    };

    const onSubmitError = (errors) => console.error('onSubmitError :', errors);

    return (
        <div id="newWorkshopPage">
            <ErrorBoundary>
                <Form className="new-workshop-form" onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                    <Form.Row>
                        <Col>
                            <div className="right-floating-buttonbox">
                                <Button type="submit" variant="primary">
                                    Créer atelier
                                </Button>
                            </div>
                        </Col>
                    </Form.Row>
                    <WkspFormBody {...othersFormProp} />
                    <Form.Row>
                        <Col>
                            <div className="right-floating-buttonbox">
                                <Button
                                    type="reset"
                                    variant="outline-primary"
                                    onClick={() => {
                                        reset(defaultValues);
                                    }}
                                >
                                    Annuler
                                </Button>
                                <Button type="submit" variant="primary">
                                    Créer atelier
                                </Button>
                            </div>
                        </Col>
                    </Form.Row>
                </Form>
            </ErrorBoundary>
        </div>
    );
};

export default NewWorkshop;
