import React, { FC } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import DatePicker from '~/Components/shared/form/DatePicker';
//import LcddDatePicker from '~/Components/shared/form/LcddDatePicker/LcddDatePicker';
import Select from '~/Components/shared/form/Select';

import { FormFeedback } from '~/Components/shared/form/FormFeedBack';
import { Validator } from '~/util/validator';
import Keywords from './Keywords';
import Links from './Links';
import Uploads from './Uploads';
import defaultValues from './defaultValues';
import './NewWorkshop.scss';

import { useDispatch } from 'react-redux';
import { newWorkshop } from '~/state/workshops/actions';

//Temp to be removed after redux implementation
import topics from '~/Components/shared/thematiques';

const NewWorkshop: FC = () => {
    const { register, watch, handleSubmit, trigger, setValue, errors, control, reset } = useForm({
        mode: 'all',
        defaultValues,
    });

    const dispatch = useDispatch();
    const history = useHistory();

    register('workshopKeywords');
    register('workshopUploads');
    register('workshopLinks');

    //TODO get real data from redux when backend// MDD ready
    const intervenants = [
        { value: 'Ambroise ARMAND', label: 'Ambroise ARMAND' },
        { value: 'Julien GENOVA', label: 'Julien GENOVA' },
    ];
    const refLegifrance = [
        { value: 'Ref 1', label: 'Ref 1' },
        { value: 'Ref 2', label: 'Ref 2' },
        { value: 'Ref 3', label: 'Ref 3' },
    ];
    const topicsList = topics.map((topic) => {
        return {
            value: topic.title,
            label: topic.title,
        };
    });

    const onSubmit = (data) => {
        dispatch(
            newWorkshop({
                title: data.workshopTitle,
                startingdate: data.workshopTimestamp,
                // endingdate, //TODO
                speakers: data.workshopSpeakers.map((obj) => obj.value),
                topics: data.workshopTopics.map((obj) => obj.value),
                refsLegifrance: data.workshopRefsLegifrance.map((obj) => obj.value),
                description: data.workshopDescription,
                keywords: data.workshopKeywords.map((obj) => obj.value),
                files: data.workshopUploads,
                links: data.workshopLinks, //TODO check value
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
                    <Form.Row>
                        <Col xs={12} md={7} lg={9}>
                            <Form.Group>
                                <Form.Label>{"Titre d'atelier (obligatoire)"}</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="workshopTitle"
                                    placeholder="Ajouter un titre"
                                    ref={register(Validator.workshopTitle)}
                                    isInvalid={!!errors.workshopTitle}
                                    onChange={({ target }) => trigger(target.name)}
                                />
                                <FormFeedback field={errors.workshopTitle}></FormFeedback>
                            </Form.Group>
                        </Col>
                        <Col xs={12} md={5} lg={3}>
                            <Form.Group>
                                <Form.Label>Date & Heure (obligatoire)</Form.Label>
                                <Controller
                                    name="workshopTimestamp"
                                    control={control}
                                    rules={Validator.workshopTimestamp}
                                    render={(field) => (
                                        <DatePicker
                                            {...field}
                                            isInvalid={!!errors.workshopTimestamp}
                                            placeholder="DD/MM/YYYY HH:mm"
                                            dateFormat="dd/MM/yyyy HH:mm"
                                        />
                                    )}
                                />
                                <FormFeedback field={errors.workshopTimestamp}></FormFeedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Form.Group>
                                <Form.Label>Intervenants (obligatoire)</Form.Label>
                                <Controller
                                    name="workshopSpeakers"
                                    control={control}
                                    rules={Validator.workshopSpeakers}
                                    render={(field) => (
                                        <Select
                                            {...field}
                                            isMulti
                                            options={intervenants}
                                            isSearchable
                                            closeMenuOnSelect={false}
                                            placeholder="Sélectionner les intervenants"
                                            isInvalid={!!errors.workshopSpeakers}
                                        />
                                    )}
                                />
                                <FormFeedback field={errors.workshopSpeakers}></FormFeedback>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="fullheight-flex-col" xs={12} md={8}>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Thématiques (obligatoire)</Form.Label>
                                    <Controller
                                        name="workshopTopics"
                                        control={control}
                                        rules={Validator.workshopTopics}
                                        render={(field) => (
                                            <Select
                                                {...field}
                                                isMulti
                                                options={topicsList}
                                                isSearchable
                                                closeMenuOnSelect={false}
                                                placeholder="Sélectionner les thématiques"
                                                isInvalid={!!errors.workshopTopics}
                                            />
                                        )}
                                    />
                                    <FormFeedback field={errors.workshopTopics}></FormFeedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <Form.Label>Références Légifrance</Form.Label>
                                    <Controller
                                        name="workshopRefsLegifrance"
                                        control={control}
                                        rules={Validator.workshopRefsLegifrance}
                                        render={(field) => (
                                            <Select
                                                {...field}
                                                isMulti
                                                options={refLegifrance}
                                                isSearchable
                                                closeMenuOnSelect={false}
                                                placeholder="Sélectionner les références Légifrance"
                                                isInvalid={!!errors.workshopRefsLegifrance}
                                            />
                                        )}
                                    />
                                    <FormFeedback field={errors.workshopRefsLegifrance}></FormFeedback>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row className="no-margin">
                                <Form.Group>
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="workshopDescription"
                                        placeholder="Ajouter une description"
                                        ref={register(Validator.workshopDescription)}
                                        isInvalid={!!errors.workshopDescription}
                                        onChange={({ target }) => trigger(target.name)}
                                    />
                                    <FormFeedback field={errors.workshopDescription}></FormFeedback>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                        <Col className="fullheight-flex-col" xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Mots-clés</Form.Label>
                                <fieldset>
                                    <Keywords
                                        value={watch('workshopKeywords')}
                                        setValue={(newValue) =>
                                            setValue('workshopKeywords', newValue, {
                                                shouldValidate: true,
                                                //    shouldDirty: true
                                            })
                                        }
                                    />
                                </fieldset>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col className="fullheight-flex-col" xs={12} md={8}>
                            <Form.Group>
                                <Form.Label>Téléchargements</Form.Label>
                                <fieldset className="workshopUploads">
                                    <Uploads
                                        value={watch('workshopUploads')}
                                        setValue={(newValue) =>
                                            setValue('workshopUploads', newValue, {
                                                shouldValidate: true,
                                                //    shouldDirty: true
                                            })
                                        }
                                    />
                                </fieldset>
                            </Form.Group>
                        </Col>
                        <Col className="fullheight-flex-col" xs={12} md={4}>
                            <Form.Group>
                                <Form.Label>Liens</Form.Label>
                                <fieldset>
                                    <Links
                                        value={watch('workshopLinks')}
                                        setValue={(newValue) =>
                                            setValue('workshopLinks', newValue, {
                                                shouldValidate: true,
                                                //    shouldDirty: true
                                            })
                                        }
                                    />
                                </fieldset>
                            </Form.Group>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <div className="right-floating-buttonbox">
                                <Button
                                    type="reset"
                                    variant="secondary-outline"
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
