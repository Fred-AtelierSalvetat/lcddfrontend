import React, { FC, useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import WkspFormBody from '../shared/WkspFormBody';

import { useDispatch, useSelector } from 'react-redux';
import { getWorkshopById, idWorkshopStoreInialized } from '~/state/reducers';
import { fetchWorkshops, cancelWorkshop } from '~/state/workshops/actions';
import ConfirmDialog from '~/Components/shared/modals/ConfirmDialog';

const EditWorkshop: FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const workshop = useSelector(getWorkshopById('2'));
    const needFetching = !useSelector(idWorkshopStoreInialized);

    //Covering the case of direct access to edit page
    useEffect(() => {
        if (needFetching) dispatch(fetchWorkshops);
    }, []);

    const { handleSubmit, reset, ...othersFormProp } = useForm({
        mode: 'all',
        workshop, //case of navigation from workshops page, workshop is initialized by previous fetch
    });

    //Once workshops are fetch, edited workshop will be returned by selector
    // => apply it's values to the form
    useEffect(() => {
        if (!!workshop) {
            othersFormProp.setValue('title', workshop.title, { shouldValidate: true });
            othersFormProp.setValue('startingdate', workshop.startingdate, { shouldValidate: true });
            othersFormProp.setValue('speakers', workshop.speakers, { shouldValidate: true });
            othersFormProp.setValue('topics', workshop.topics, { shouldValidate: true });
            othersFormProp.setValue('refsLegifrance', workshop.refsLegifrance, { shouldValidate: true });
            othersFormProp.setValue('description', workshop.description, { shouldValidate: true });
            othersFormProp.setValue('keywords', workshop.keywords, { shouldValidate: true });
            othersFormProp.setValue('files', workshop.files, { shouldValidate: true });
            othersFormProp.setValue('links', workshop.links, { shouldValidate: true });
        }
    }, [workshop]);

    const onSubmit = (data) => {
        // dispatch(
        //     newWorkshop({
        //         title: data.workshopTitle,
        //         startingdate: data.workshopTimestamp,
        //         // endingdate, //TODO
        //         speakers: data.workshopSpeakers.map((obj) => obj.value),
        //         topics: data.workshopTopics.map((obj) => obj.value),
        //         refsLegifrance: data.workshopRefsLegifrance.map((obj) => obj.value),
        //         description: data.workshopDescription,
        //         keywords: data.workshopKeywords.map((obj) => obj.value),
        //         files: data.workshopUploads,
        //         links: data.workshopLinks, //TODO check value
        //     }),
        // );
        history.push('/dashboard/workshops'); //TODO Add sort by status
    };

    const onSubmitError = (errors) => console.error('onSubmitError :', errors);

    const [showCancelDialog, setShowCancelDialog] = useState(false);

    return (
        <div id="newWorkshopPage">
            <ErrorBoundary>
                <ConfirmDialog
                    show={showCancelDialog}
                    title="Annuler cet atelier"
                    body="Cette action n'est pas réversible"
                    cancelButton="Annuler"
                    okButton="Annuler l'atelier"
                    handleClose={() => setShowCancelDialog(false)}
                    handleConfirm={() => dispatch(cancelWorkshop(workshop.id))} //TODO PB workshop undefined...
                />
                <Form className="new-workshop-form" onSubmit={handleSubmit(onSubmit, onSubmitError)}>
                    {/* TODO Add title */}
                    <Form.Row>
                        {/* TODO Add link back to workshops */}
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
                                        reset(workshop); //TODO Fix annuler
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
        </div>
    );
};

export default EditWorkshop;
