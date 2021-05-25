// @ts-nocheck

import React, { FC, forwardRef } from 'react';
import ErrorBoundary from '../ErrorBoundary';

import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';

import { ReactComponent as CalendarIcon } from '../../../assets/icons/date_range_24px.svg';
//Temp to be removed after redux implementation
import topics from '../../shared/thematiques';

import { useForm, Controller } from 'react-hook-form';
import Keywords from './Keywords';
import Links from './Links';
import Uploads from './Uploads';
import './NewWorkshop.scss';

import DatePicker, { registerLocale } from 'react-datepicker';
import { fr, enUS } from 'date-fns/locale';
import 'react-datepicker/dist/react-datepicker.css';
registerLocale('fr', fr);
registerLocale('enUS', enUS);

const NewWorkshop: FC = () => {
    const defaultValues = {
        title: '',
        timestamp: '',
        speakers: '',
        topics: '',
        refsLegifrance: '',
        description: '',
        keywords: [],
        uploads: [],
        links: [],
    };

    const { register, watch, handleSubmit, trigger, getValues, setValue, errors, control, reset } = useForm({
        mode: 'all',
        defaultValues,
    });

    register('keywords');
    register('uploads');
    register('links');

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

    const onSubmit = (data) => {
        console.log('onSubmit, createNewWorkshop action call with data =', data);
    };
    const onSubmitError = (errors) => console.error('onSubmitError :', errors);

    const validator = {
        title: {
            required: 'Champ obligatoire',
            maxLength: {
                value: 255,
                message: 'Le titre ne doit pas dépasser 255 caractères.',
            },
        },
        timestamp: {
            required: 'Champ obligatoire',
        },
        speakers: {
            validate: (list) => (list && !!list.length) || 'Champ obligatoire',
        },
        topics: {
            validate: (list) => (list && !!list.length) || 'Champ obligatoire',
        },
        refsLegifrance: {
            validate: (list) => true,
        },
        description: {
            required: 'Champ obligatoire',
        },
        keywords: {
            validate: (list) => true,
        },
        uploads: {
            validate: (uploads) => true,
        },
        links: {
            validate: (links) => true,
        },
    };

    const DatePickerCustomInput = forwardRef(({ value, className, placeholder, onClick, onChange, onBlur }, ref) => (
        <div className="datepicker-custom-input" onClick={onClick} onChange={onChange} onBlur={onBlur} ref={ref}>
            <input className={className} type="text" name="timestamp" placeholder={placeholder} value={value} />
            <CalendarIcon />
        </div>
    ));

    return (
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
                            <Form.Label>Titre d'atelier</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Ajouter un titre"
                                ref={register(validator.title)}
                                isInvalid={!!errors.title}
                                isValid={!errors.title && !!watch('title')}
                                onChange={({ target }) => trigger(target.name)}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title && errors.title.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                    <Col xs={12} md={5} lg={3}>
                        <Form.Group>
                            <Form.Label>Date & Heure</Form.Label>
                            <Controller
                                name="timestamp"
                                control={control}
                                rules={validator.timestamp}
                                render={(field) => {
                                    return (
                                        <DatePicker
                                            id="datepicker"
                                            wrapperClassName={` ${errors.timestamp ? 'is-invalid' : watch('timestamp') ? 'is-valid' : ''
                                                }`}
                                            className={`form-control ${errors.timestamp ? 'is-invalid' : watch('timestamp') ? 'is-valid' : ''
                                                }`}
                                            {...field}
                                            selected={field.value}
                                            locale="fr"
                                            timeCaption="Heure"
                                            showTimeSelect
                                            popperPlacement="left-start"
                                            placeholderText="DD/MM/YYYY HH:mm"
                                            dateFormat="dd/MM/yyyy HH:mm"
                                            filterDate={(d) => {
                                                return new Date() < d;
                                            }}
                                            //customInput={<Button>{field.value}</Button>}
                                            customInput={<DatePickerCustomInput />}
                                        />
                                    );
                                }}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.timestamp && errors.timestamp.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Intervenants</Form.Label>
                            <Controller
                                name="speakers"
                                control={control}
                                rules={validator.speakers}
                                render={(field) => (
                                    <Select
                                        className={`select ${errors.speakers ? 'is-invalid' : watch('speakers').length ? 'is-valid' : ''
                                            }`}
                                        classNamePrefix={
                                            errors.speakers
                                                ? 'select-invalid'
                                                : watch('speakers').length
                                                    ? 'select-valid'
                                                    : 'select'
                                        }
                                        {...field}
                                        components={animatedComponents}
                                        placeholder="Sélectionner les intervenants"
                                        isMulti
                                        closeMenuOnSelect={false}
                                        isSearchable
                                        options={intervenants}
                                        styles={getOneColorMultiValueStyle('#029eF8')}
                                    />
                                )}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.speakers && errors.speakers.message}
                            </Form.Control.Feedback>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Form.Row>
                    <Col className="fullheight-flex-col" xs={12} md={8}>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Thématiques</Form.Label>

                                <Controller
                                    name="topics"
                                    control={control}
                                    rules={validator.topics}
                                    render={(field) => (
                                        <Select
                                            className={`select ${errors.topics ? 'is-invalid' : watch('topics').length ? 'is-valid' : ''
                                                }`}
                                            classNamePrefix={
                                                errors.topics
                                                    ? 'select-invalid'
                                                    : watch('topics').length
                                                        ? 'select-valid'
                                                        : 'select'
                                            }
                                            {...field}
                                            components={animatedComponents}
                                            placeholder="Sélectionner les thématiques"
                                            isMulti
                                            closeMenuOnSelect={false}
                                            isSearchable
                                            options={topicsList}
                                            styles={getOneColorMultiValueStyle('#745696')}
                                        />
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.topics && errors.topics.message}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Form.Row>
                        <Form.Row>
                            <Form.Group>
                                <Form.Label>Références Légifrance</Form.Label>
                                <Controller
                                    name="refsLegifrance"
                                    control={control}
                                    rules={validator.refsLegifrance}
                                    render={(field) => (
                                        <Select
                                            className={`select ${errors.refsLegifrance
                                                    ? 'is-invalid'
                                                    : watch('refsLegifrance').length
                                                        ? 'is-valid'
                                                        : ''
                                                }`}
                                            classNamePrefix={
                                                errors.refsLegifrance
                                                    ? 'select-invalid'
                                                    : watch('refsLegifrance').length
                                                        ? 'select-valid'
                                                        : 'select'
                                            }
                                            {...field}
                                            components={animatedComponents}
                                            placeholder="Sélectionner les références Légifrance"
                                            isMulti
                                            closeMenuOnSelect={false}
                                            isSearchable
                                            options={refLegifrance}
                                            styles={getOneColorMultiValueStyle('#19bec0')}
                                        />
                                    )}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.refsLegifrance && errors.refsLegifrance.message}
                                </Form.Control.Feedback>
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
                                    ref={register(validator.description)}
                                    isInvalid={!!errors.description}
                                    isValid={!errors.description && !!watch('description')}
                                    onChange={({ target }) => trigger(target.name)}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.description && errors.description.message}
                                </Form.Control.Feedback>
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
                            <fieldset className="uploads">
                                <Uploads
                                    value={watch('uploads')}
                                    setValue={(newValue) =>
                                        setValue('uploads', newValue, {
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
    );
};

export default NewWorkshop;
