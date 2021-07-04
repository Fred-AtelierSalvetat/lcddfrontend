import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import WkspFormBody from '../shared/WkspFormBody';
import defaultValues from '../shared/defaultValues';

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
        console.log('Submit');
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
        <ErrorBoundary>
            <WkspFormBody
                headerButtonLine={
                    <Form.Row>
                        <Col>
                            <div className="right-floating-buttonbox">
                                <Button type="submit" variant="primary">
                                    Créer atelier
                                </Button>
                            </div>
                        </Col>
                    </Form.Row>
                }
                {...othersFormProp}
                footerButtonLine={
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
                }
                handleSubmit={handleSubmit(onSubmit, onSubmitError)}
            />
        </ErrorBoundary>
    );
};

export default NewWorkshop;
