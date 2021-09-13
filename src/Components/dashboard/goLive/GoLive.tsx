import React, { FC, useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { Button, Container, Row, Col, Overlay, Tooltip } from 'react-bootstrap';
// import copy from 'copy-to-clipboard';

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

    // Allow direct call to page
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
                // TODO Update url once implemented
                <Link to="/dashboard/workshops">
                    Publier atelier
                    <ArrowBackIcon />
                </Link>
            ),
        }[workshop.status];

    // TODO Fetch RTMP value/key
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
                        Retourner aux ateliers
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
                    <Col xs={12} lg={8}>
                        <div className="videoFrameContainer">
                            <div className="videoFrame" />
                        </div>
                    </Col>
                    <Col xs={12} lg={4}>
                        <div className="chatFrame" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8} xs={12}>
                        <h3>A propos</h3>
                        <div className="aboutBox">
                            <div className="desc">
                                <p>{workshop.description}</p>
                                <p className="topics">{workshop.topics.join(', ')}</p>
                            </div>
                            <div className="speakers">
                                {workshop.speakers.map((speaker) => (
                                    <p key={speaker}>{speaker}</p>
                                ))}
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} xs={12}>
                        <h3>Téléchargements & liens</h3>
                        <div className="linksBox">
                            <p>Files list + download icon</p>
                            <p>Link list + link</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default GoLive;
