import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import defaultValues from '../shared/defaultValues';

import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import WkspFormBody from '../shared/WkspFormBody';
import { ReactComponent as ArrowBackIcon } from '~/assets/icons/arrow_back_24px.svg';

import { useDispatch, useSelector } from 'react-redux';
import { getWorkshopById, idWorkshopStoreInialized } from '~/state/reducers';
import { fetchWorkshops, updateWorkshop, cancelWorkshop } from '~/state/workshops/actions';
import ConfirmDialog from '~/Components/shared/modals/ConfirmDialog';
import { refLegifrance, intervenants } from '~/Components/dashboard/shared/WkspFormBody';
import topics from '~/Components/shared/thematiques';
import type { Workshop } from '~/state/workshops/model';
import * as status from '~/state/workshops/constants/status';

const topicsList = topics.map((topic) => {
    return {
        value: topic.title,
        label: topic.title,
    };
});

const EditWorkshop: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const worshopId = '0'; //TODO
    const workshop = useSelector(getWorkshopById(worshopId));
    const needFetching = !useSelector(idWorkshopStoreInialized); //Allow direct call to page

    //Covering the case of direct access to edit page
    useEffect(() => {
        if (needFetching) dispatch(fetchWorkshops);
    }, []);

    const { handleSubmit, ...othersFormProp } = useForm({
        mode: 'all',
        defaultValues: workshop || defaultValues,
    });

    //TODO Relocate below fcts in dedicated facilities mng
    // OR (BETTER) update selector once backend will be ready to return option instead of value.
    const refLegifranceMapValueToOptions: (
        listOfValues: Workshop.refLegifrance,
    ) => { value: string; label: string }[] = (listOfValues) =>
        listOfValues.map((value) => ({ value, label: refLegifrance.find((ref) => ref.value === value).label }));
    const topicsToOptions: (listOfValues: Workshop.topics) => { value: string; label: string }[] = (listOfValues) =>
        listOfValues.map((value) => ({ value, label: topicsList.find((ref) => ref.value === value).label }));
    const speakersToOptions: (listOfValues: Workshop.speakers) => { value: string; label: string }[] = (listOfValues) =>
        listOfValues.map((value) => ({ value, label: intervenants.find((ref) => ref.value === value).label }));

    //Once workshops are fetch, edited workshop will be returned by selector
    // => apply it's values to the form
    const [reset, setReset] = useState(false);

    useEffect(() => {
        if (!!workshop) {
            setReset(false);
            othersFormProp.setValue('title', workshop.title, { shouldValidate: true, shouldDirty: true });
            othersFormProp.setValue('startingdate', workshop.startingdate, { shouldValidate: true });
            othersFormProp.setValue('speakers', speakersToOptions(workshop.speakers), { shouldValidate: true });
            othersFormProp.setValue('topics', topicsToOptions(workshop.topics), { shouldValidate: true });
            othersFormProp.setValue('refsLegifrance', refLegifranceMapValueToOptions(workshop.refsLegifrance), {
                shouldValidate: true,
            });
            othersFormProp.setValue('description', workshop.description, { shouldValidate: true });
            othersFormProp.setValue('keywords', workshop.keywords, { shouldValidate: true });
            othersFormProp.setValue('files', workshop.files, { shouldValidate: true });
            othersFormProp.setValue('links', workshop.links, { shouldValidate: true });
        }
    }, [workshop, reset]);

    const onSubmit = (data) => {
        console.log('data =', data);
        dispatch(
            updateWorkshop({
                id: workshop.id,
                status: workshop.status,
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

    const [showCancelDialog, setShowCancelDialog] = useState(false);

    //TODO REfactor scss of page
    if (!workshop) return null;
    return (
        <div id="newWorkshopPage">
            {workshop.status === status.INCOMING ? (
                <ErrorBoundary>
                    <ConfirmDialog
                        show={showCancelDialog}
                        title="Annuler cet atelier"
                        body="Cette action n'est pas réversible"
                        cancelButton="Annuler"
                        okButton="Annuler l'atelier"
                        handleClose={() => setShowCancelDialog(false)}
                        handleConfirm={() => {
                            dispatch(cancelWorkshop(workshop.id));
                            history.push('/dashboard/workshops'); //TODO Add sort by status
                        }}
                    />
                    <Form className="new-workshop-form" onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                        <h1>Modifier atelier</h1>
                        <Form.Row>
                            <Col>
                                <Link to="/dashboard/workshops" className="left-floating-box">
                                    <ArrowBackIcon />
                                    {'Retourner aux ateliers'}
                                </Link>
                            </Col>
                            <Col>
                                <div className="right-floating-buttonbox">
                                    <Button variant="danger" onClick={() => setShowCancelDialog(true)}>
                                        {"Annuler l'atelier"}
                                    </Button>
                                    <Button type="submit" variant="primary">
                                        {"Modifier l'atelier"}
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
                                            setReset(true);
                                        }}
                                    >
                                        Annuler
                                    </Button>
                                    <Button type="submit" variant="primary">
                                        {"Modifier l'atelier"}
                                    </Button>
                                </div>
                            </Col>
                        </Form.Row>
                    </Form>
                </ErrorBoundary>
            ) : (
                'Not yet implemented'
            )}
        </div>
    );
};

export default EditWorkshop;
