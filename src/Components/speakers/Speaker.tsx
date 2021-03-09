import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Avatar from './../../assets/shared/avatar.jpg';

type SpeakerProps = {
    id: number;
    name: string;
    rool: string;
    description?: string;
};

export const Speaker: React.FC<SpeakerProps> = ({ id, name, rool, description }) => {
    const history = useHistory();

    // TO DO - Add components with params
    const Redirection = React.useCallback(() => {
        return history.push(`/profile/${id}`);
    }, [id, history]);

    return (
        <Card className="border-0 m-3">
            <Image
                src={Avatar}
                roundedCircle
                className="border border-dark"
                width="230"
                height="230"
                style={{ filter: 'grayscale(100%)', border: '2px' }}
                onClick={Redirection}
            />
            <p>{name}</p>
            <p>{rool}</p>
            <p>{description}</p>
        </Card>
    );
};
