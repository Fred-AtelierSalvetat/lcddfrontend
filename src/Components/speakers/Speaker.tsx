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
                    <h3 style={{ textAlign: 'center', color: '#333333' }}>{name}</h3>
                    <p style={{ textAlign: 'center', color: '#4F4F4F' }}>{rool}</p>
                    <em style={{ textAlign: 'center', color: '#4F4F4F' }}>{description}</em>
                </Container>
            </div>
        </Card>
    );
};
