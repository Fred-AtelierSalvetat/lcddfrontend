import React, { FC, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Overlay, Tooltip } from 'react-bootstrap';
import copy from 'copy-to-clipboard';

import { getWorkshopById, isWorkshopStoreInialized } from '~/state/reducers';
import { fetchWorkshops, goLive, endLive } from '~/state/workshops/actions';
import * as status from '~/state/workshops/constants/status';
import { ReactComponent as ArrowBackIcon } from '~/assets/icons/arrow_back_24px.svg';
import { ReactComponent as CopyIcon } from '~/assets/icons/copy_24px.svg';

import './GoLive.scss';

const TOOLTIP_DURATION = 1000;

const GoLive: FC = () => {
    const { id } = useParams() as {
        id: Workshop.id;
    };
    const dispatch = useDispatch();
    const workshop = useSelector(getWorkshopById(id));

    //Allow direct call to page
    const needFetching = !useSelector(isWorkshopStoreInialized);
    useEffect(() => {
        if (needFetching) dispatch(fetchWorkshops);
    }, []);

    const broadcastBoxAction =
        workshop &&
        {
            [status.INCOMING]: (
                <Button variant="success" onClick={() => dispatch(goLive(workshop.id))}>
                    Commencer la diffusion
                </Button>
            ),
            [status.LIVE]: (
                <Button variant="danger" onClick={() => dispatch(endLive(workshop.id))}>
                    Terminer la diffusion
                </Button>
            ),
            [status.UNPUBLISHED]: (
                <Link to="TODO">
                    Publier atelier
                    <ArrowBackIcon />
                </Link>
            ),
        }[workshop.status];

    //TODO Fetch RTMP value/key
    const rtmpAddress = 'https://www.figma.com/file/rMePFUqQqTNHj22bA6NgmO/?node-id=3528%3A760';
    const streamKey = '3528%3A760';
    const rtmpAddressRef = useRef();
    const streamKeyRef = useRef();
    const [showRtmpTooltip, setShowRtmpTooltip] = useState(false);
    const [showKeyTooltip, setShowKeyTooltip] = useState(false);

    return needFetching ? null : (
        <div id="goLivePage">
            <h1>{workshop.title}</h1>
            <Container>
                <Row>
                    <Link className="backLink" to="/dashboard/workshops">
                        <ArrowBackIcon />
                        {'Retourner aux ateliers'}
                    </Link>
                </Row>
                <Row>
                    <div className="broadCastBox">
                        <div className="broadCastData">
                            <div className="dataLine">
                                <p className="label">Adresse RTMP</p>
                                <p className="value">{` : ${rtmpAddress}`}</p>
                                <CopyIcon
                                    ref={rtmpAddressRef}
                                    onClick={() => {
                                        copy(rtmpAddress);
                                        setShowRtmpTooltip(true);
                                        setTimeout(() => setShowRtmpTooltip(false), TOOLTIP_DURATION);
                                    }}
                                />
                                <Overlay target={rtmpAddressRef.current} show={showRtmpTooltip} placement="top">
                                    {(props) => (
                                        <Tooltip id="rtmpAddressCopied" {...props}>
                                            Copied!
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </div>
                            <div className="dataLine">
                                <p className="label">Clé</p>
                                <p className="value">{`: ${streamKey}`} </p>
                                <CopyIcon
                                    ref={streamKeyRef}
                                    onClick={() => {
                                        copy(streamKey);
                                        setShowKeyTooltip(true);
                                        setTimeout(() => setShowKeyTooltip(false), TOOLTIP_DURATION);
                                    }}
                                />
                                <Overlay target={streamKeyRef.current} show={showKeyTooltip} placement="top">
                                    {(props) => (
                                        <Tooltip id="streamKeyCopied" {...props}>
                                            Copied!
                                        </Tooltip>
                                    )}
                                </Overlay>
                            </div>
                        </div>
                        <div className="broadCastAction">{broadcastBoxAction}</div>
                    </div>
                </Row>
                <Row>
                    <Col md={6}>
                        <p>video frame</p>
                    </Col>
                    <Col md={6}>
                        <p>chat frame</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={8}>
                        <p>A propos</p>
                    </Col>
                    <Col md={4}>
                        <p>{'Telechargements & Liens'}</p>
                    </Col>
                    <Col md={4}>{workshop.description}</Col>
                    <Col md={4}>{workshop.speakers}</Col>

                    <Col md={4}>
                        <p>Files list + download icon</p>
                        <p>Link list + link</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GoLive;
