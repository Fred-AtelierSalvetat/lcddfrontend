import React, { FC, useCallback } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Avatar from './../../assets/shared/avatar.jpg';
import './Speaker.css';

import PropTypes from 'prop-types';

const speakerPropTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    rool: PropTypes.string.isRequired,
    description: PropTypes.string,
};

export const Speaker: FC<PropTypes.InferProps<typeof speakerPropTypes>> = ({ id, name, rool, description }) => {
    const history = useHistory();

    // TO DO - Add components with params
    const Redirection = useCallback(() => {
        return history.push(`/profile/${id}`);
    }, [id, history]);

    return (
        <Card className="border-0 m-3 ">
            <div className="justify-content-center d-flex flex-column">
                <img src={Avatar} className="mb-4 speaker-image" width="263" height="263" onClick={Redirection} />
                <Container>
                    <h3 style={{ textAlign: 'center', color: '#333333' }}>{name}</h3>
                    <p style={{ textAlign: 'center', color: '#4F4F4F' }}>{rool}</p>
                    <em style={{ textAlign: 'center', color: '#4F4F4F' }}>{description}</em>
                </Container>
            </div>
        </Card>
    );
};
Speaker.propTypes = speakerPropTypes;
