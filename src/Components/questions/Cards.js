/* eslint-disable */
//FIRST DEV MOFYING THIS FILE, MUST FIX WARNINGS (too many for a single dev, then boyscout rule!)

import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

function Cards(props) {
    const [cards, setCards] = useState(true);
    const CardData = [
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
        {
            img: '/cardImage.svg',
            title: 'Video title',
            backside:
                'Some quick example text to build on the card title and make up the bulk ' + 'of the cards content.',
        },
    ];
    return (
        <div className="row row-cols-1  row-cols-md-4 ">
            {!props.isHome &&
                cards &&
                CardData.map((props) => {
                    return (
                        <div className="col mb-4">
                            <Card>
                                <Card.Img variant="top" src={props.img} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>{props.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>{props.backside}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
            {props.isHome &&
                CardData.slice(0, 4).map((props) => {
                    return (
                        <div className="col mb-4">
                            <Card>
                                <Card.Img variant="top" src={props.img} />
                                <Card.Body>
                                    <Card.Title style={{ fontSize: '18px' }}>{props.title}</Card.Title>
                                    <Card.Text style={{ fontSize: '16px' }}>{props.backside}</Card.Text>
                                </Card.Body>
                            </Card>
                        </div>
                    );
                })}
        </div>
    );
}

export default Cards;
