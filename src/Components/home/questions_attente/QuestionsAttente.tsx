import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { BiLike } from 'react-icons/bi';



const backgroundTransparency = {
    backgroundColor: '#FFFFFF',
    align: 'center',
};

const textContainer = {
    Width: '268px',
    height: '33px',
    color: '#113F59',
    size: '30px',
    style: 'normal',
    marginLeft: '185px',
    marginBottom: '30px',
    marginTop: '20px',
    font: 'Segoe UI'
};

const styledCard = {
    width: '1140px',
    height: '53px',
    marginLeft: '170px',
    marginBottom: '50px',
    border: '2px solid #BDBDBD',
    borderRadius: '3px',
    backgroundColor: '#FFFFFF'

};

const likes = {
    size: '21px',
    weight: '350',
    fontStyle: 'normal',
    innerHeight: '23px',
    width: '76px',
    height: '49px',
    color: '#113F59',
    backgroundColor: '#113F59',
    borderRadius: '0px 1px 1px 0px',
    flex: '0 0 7.1%'

};

const questions = {
    width: '826px',
    height: '24px',
    font: 'Segoe UI',
    style: 'normal',
    size: '16px',
    margin: '10px'
}

const icon = {
    color: 'black'
}

const numberLikes = {
    margin: '10px',
    color: '#FFFFFF',
    width: '14px',
    height: '20.3px',
    fontStyle: 'normal',
    fontFamily: 'Roboto',
    size: '16px',
    Weight: 'bold'

}



// eslint-disable-next-line @typescript-eslint/ban-types
const QuestionsAttenteComponent: React.FC<{}> = () => {
    return (
        <div>
            <Card>
                <div style={backgroundTransparency}>
                    <Row>
                        <h4 style={textContainer}>Questions en attente</h4>
                    </Row>
                    <div>
                        <Card style={styledCard}>
                            <div>
                                <Row>
                                    <Col xs="11">
                                        <Row style={questions}>Question 1  Question 2  Question 3  Question 4  Question 5  Question 6  Question 7  Question 8  Question 9</Row>
                                    </Col>
                                    <Col xs="1" style={likes}>
                                        <p style={numberLikes}>9</p>
                                        <i style={icon} className="far fa-thumbs-up"></i>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </div>
            </Card>
        </div>
    );
};



export default QuestionsAttenteComponent;
