import React from 'react';
import {Card} from 'react-bootstrap';

function Cards() {
    const CardData=[
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },
        {
            img:'/cardImage.svg',
            title:'Video title',
            backside:'Some quick example text to build on the card title and make up the bulk ' +
                'of the cards content.'
        },


    ];
    return (
        <div className='row row-cols-1  row-cols-md-4 '>
        {CardData.map((props)=>{
                    return(
                        <div className='col mb-4'>

                        <Card >
                            <Card.Img variant='top' src={props.img} />
                            <Card.Body>
                                <Card.Title style={{ fontSize: '18px' }}>{props.title}</Card.Title>
                                <Card.Text style={{ fontSize: '16px' }}>
                                    {props.backside}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        </div>
                    );
                }
            )
            }
        </div>
    );
}

export default Cards;