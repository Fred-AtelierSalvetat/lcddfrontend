import React from 'react';
import { Card } from 'react-bootstrap';

export type WorkshopProps = {
    id: number;
    title: string;
    description: string;
    videoLink: string;
};

const Workshop: React.FC<WorkshopProps> = ({ id, title, description, videoLink }) => {
    const onClick = React.useCallback(() => {
        console.log('Workshop > URL', videoLink);
    }, [videoLink]);

    return (
        <Card style={{ width: '18rem' }} key={id}>
            <Card.Img variant="top" src="holder.js/100px180" onClick={onClick} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>{description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default Workshop;
