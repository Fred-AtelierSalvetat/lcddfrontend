import React from 'react';
import { Controller } from 'react-hook-form';

import DatePicker from '~/Components/shared/form/DatePicker';
//import LcddDatePicker from '~/Components/shared/form/LcddDatePicker/LcddDatePicker';
import Select from '~/Components/shared/form/Select';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

import { FormFeedback } from '~/Components/shared/form/FormFeedBack';
import { validator } from '~/util/validator';
import Keywords from './Keywords';
import Links from './Links';
import Uploads from './Uploads';

//Temp to be removed after redux implementation
import topics from '~/Components/shared/thematiques';

import PropTypes from 'prop-types';

const propTypes = {
    register: PropTypes.func.isRequired,
    watch: PropTypes.func.isRequired,
    trigger: PropTypes.func.isRequired,
    setValue: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    control: PropTypes.object.isRequired,
};

//TODO get real data from redux when backend// MDD ready
export const refLegifrance = [
    { value: 'Ref 1', label: 'Ref 1' },
    { value: 'Ref 2', label: 'Ref 2' },
    { value: 'Ref 3', label: 'Ref 3' },
];
export const intervenants = [
    { value: 'Ambroise ARMAND', label: 'Ambroise ARMAND' },
    { value: 'Julien GENOVA', label: 'Julien GENOVA' },
];

const WkspFormBody: FC<PropsTypes.InferProps<typeof propTypes>> = ({
    register,
    watch,
    trigger,
    setValue,
    errors,
    control,
}) => {
    register('keywords');
    register('files');
    register('links');

    const topicsList = topics.map((topic) => {
        return {
            value: topic.title,
            label: topic.title,
        };
    });

    return (
        <>
            <Form.Row>
                <Col xs={12} md={7} lg={9}>
                    <Form.Group>
                        <Form.Label>{"Titre d'atelier (obligatoire)"}</Form.Label>
                        <Form.Control
                            type="text"
                            name="title"
                            placeholder="Ajouter un titre"
                            ref={register(validator.workshopTitle)}
                            isInvalid={!!errors.title}
                            value={watch('title')}
                            onChange={({ target }) => trigger(target.name)}
                        />
                        <FormFeedback field={errors.title}></FormFeedback>
                    </Form.Group>
                </Col>
                <Col xs={12} md={5} lg={3}>
                    <Form.Group>
                        <Form.Label>Date & Heure (obligatoire)</Form.Label>
                        <Controller
                            name="startingdate"
                            control={control}
                            rules={validator.workshopTimestamp}
                            render={(field) => (
                                <DatePicker
                                    {...field}
                                    isInvalid={!!errors.startingdate}
                                    placeholder="DD/MM/YYYY HH:mm"
                                    dateFormat="dd/MM/yyyy HH:mm"
                                />
                            )}
                        />
                        <FormFeedback field={errors.startingdate}></FormFeedback>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col>
                    <Form.Group>
                        <Form.Label>Intervenants (obligatoire)</Form.Label>
                        <Controller
                            name="speakers"
                            control={control}
                            rules={validator.workshopSpeakers}
                            render={(field) => (
                                <Select
                                    {...field}
                                    isMulti
                                    options={intervenants}
                                    isSearchable
                                    closeMenuOnSelect={false}
                                    placeholder="Sélectionner les intervenants"
                                    isInvalid={!!errors.speakers}
                                />
                            )}
                        />
                        <FormFeedback field={errors.speakers}></FormFeedback>
                    </Form.Group>
                </Col>
            </Form.Row>
            <Form.Row>
                <Col className="fullheight-flex-col" xs={12} md={8}>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Thématiques (obligatoire)</Form.Label>
                            <Controller
                                name="topics"
                                control={control}
                                rules={validator.workshopTopics}
                                render={(field) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={topicsList}
                                        value={watch('topics')}
                                        isSearchable
                                        closeMenuOnSelect={false}
                                        placeholder="Sélectionner les thématiques"
                                        isInvalid={!!errors.topics}
                                    />
                                )}
                            />
                            <FormFeedback field={errors.topics}></FormFeedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row>
                        <Form.Group>
                            <Form.Label>Références Légifrance</Form.Label>
                            <Controller
                                name="refsLegifrance"
                                control={control}
                                rules={validator.workshopRefsLegifrance}
                                render={(field) => (
                                    <Select
                                        {...field}
                                        isMulti
                                        options={refLegifrance}
                                        isSearchable
                                        closeMenuOnSelect={false}
                                        placeholder="Sélectionner les références Légifrance"
                                        isInvalid={!!errors.refsLegifrance}
                                    />
                                )}
                            />
                            <FormFeedback field={errors.refsLegifrance}></FormFeedback>
                        </Form.Group>
                    </Form.Row>
                    <Form.Row className="no-margin">
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                name="description"
                                placeholder="Ajouter une description"
                                ref={register(validator.workshopDescription)}
                                isInvalid={!!errors.description}
                                value={watch('description')}
                                onChange={({ target }) => trigger(target.name)}
                            />
                            <FormFeedback field={errors.description}></FormFeedback>
                        </Form.Group>
                    </Form.Row>
                </Col>
                <Col className="fullheight-flex-col" xs={12} md={4}>
                    <Form.Group>
                        <Form.Label>Mots-clés</Form.Label>
                        <fieldset>
                            <Keywords
                                value={watch('keywords')}
                                setValue={(newValue) =>
                                    setValue('keywords', newValue, {
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
                                value={watch('files')}
                                setValue={(newValue) =>
                                    setValue('files', newValue, {
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
                                value={watch('links')}
                                setValue={(newValue) =>
                                    setValue('links', newValue, {
                                        shouldValidate: true,
                                        //    shouldDirty: true
                                    })
                                }
                            />
                        </fieldset>
                    </Form.Group>
                </Col>
            </Form.Row>
        </>
    );
};

WkspFormBody.propTypes = propTypes;

export default WkspFormBody;
