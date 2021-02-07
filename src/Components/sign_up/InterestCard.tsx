import React, { useState } from 'react';
import { ReactComponent as Selected } from '~/assets/icons/Selected.svg';
import styled from 'styled-components';

const Card = ({ className, onClick, onKeyDown, children }) => (
    <div className={className} tabIndex={1} onClick={onClick} onKeyUp={onKeyDown}>{children}</div>
);

const CardImage = ({ className, src, alt }) => (
    <img className={className} src={src} alt={alt}></img>
);

const CardText = ({ className, children }) => (
    <p className={className}>{children}</p>
);

const CardBody = ({ className, children }) => (
    <div className={className}>{children}</div>
);

const InterestCardStyled = styled(Card)`
    display: flex;
    flex-flow: column wrap;
    justify-content: space-between;
    align-items: center;
    height: 170px;
    width: 170px;
    border: 1px solid #113F59;
    margin: 12px;
    border-radius: 4px;
    background-color: white;
    
    &:hover {
        cursor: pointer;
        box-shadow: 0 0 6px rgba(35, 173, 278, 1);
        svg {
            display: block;
        }
        g {
            rect {
                fill: #bce3cc;
            }
        }
    }
`;

const SelectedStyled = styled(Selected)`
    align-self: flex-end;
    float:right;
    position: absolute;
`;

const CardImageStyled = styled(CardImage)`
    height: 70%;
`;

const CardBodyStyled = styled(CardBody)`
    display: flex;
    flex-flow: column;
    justify-content: flex-start;
    padding: 0.5rem;
    width: 100%;
    heigth: 30%;
`;

const CardTextStyled = styled(CardText)`
    text-align: center;
    font-size: 0.7rem;
    vertical-align: bottom;
`;

const InterestCard = (props) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        if (selected) setSelected(false);
        else setSelected(true);
    }

    const handleOnKeyDown = (e) => {
        if (e.keyCode === 32 || e.keyCode === 13) {
            e.preventDefault();
            e.target.click();
            return false;
        }
    }

    return (
        <InterestCardStyled className="hover-shadow" onClick={handleClick} onKeyDown={handleOnKeyDown}>
            <SelectedStyled display={selected ? "block" : "none"} />
            <CardImageStyled className="card-img-top" src={require(`~/assets/thematiques/${props.src}`)} alt={props.title} />
            <CardBodyStyled className="card-body">
                <CardTextStyled className="card-text">{props.title}</CardTextStyled>
            </CardBodyStyled>
        </InterestCardStyled>
    )
}

export default InterestCard;