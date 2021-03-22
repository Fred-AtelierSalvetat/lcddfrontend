import React from 'react';
import { Card, Image, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Avatar from './../../assets/shared/julien.jpg';


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
            <div className="justify-content-center d-flex flex-column">
                <Image
                    src={Avatar}
                    className="mb-4"
                    roundedCircle
                    width="263"
                    height="263"
                    style={{ filter: 'grayscale(100%)', border: '2px solid #0B2534', boxSizing: "border-box" }}
                    onClick={Redirection}
                />
                <Container>
                    <p className="speaker-name" style={{ textAlign: 'center' }}>{name}</p>
                    <p className="speaker-rool" style={{ textAlign: 'center' }}>{rool}</p>
                    <p className="speaker-description" style={{ textAlign: 'center' }}>{description}</p>
                </Container>
            </div>
        </Card>
    );
};
