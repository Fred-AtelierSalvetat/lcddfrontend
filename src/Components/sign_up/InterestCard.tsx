import React, { useEffect, useState } from 'react';
import { ReactComponent as Selected } from '~/assets/icons/Selected.svg';
import styled from 'styled-components';

const MOBILE_VIEW_BREAKPOINT = 402;

const Card = ({ className, onClick, onKeyDown, isMobile, children }) => (
    <div className={className} tabIndex={1} onClick={onClick} onKeyUp={onKeyDown}>{children}</div>
);

const CardImage = ({ className, src, alt }) => (
    <img className={className} src={src} alt={alt}></img>
);

const CardText = ({ className, isMobile, children }) => (
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
    height: ${props => props.isMobile ? '165px' : '170px'};
    width: ${props => props.isMobile ? '165px' : '170px'};
    border: 1px solid #113F59;
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
    font-size: ${props => props.isMobile ? '0.6rem' : '0.7rem'};
    vertical-align: bottom;
`;

const InterestCard = (props) => {
    const [selected, setSelected] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < MOBILE_VIEW_BREAKPOINT);

    useEffect(() => {
        window.addEventListener("resize", updatePredicate);
    })

    const updatePredicate = () => {
        setIsMobile(window.innerWidth < MOBILE_VIEW_BREAKPOINT);
    }

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
        <div
            className="col mb-4"
            style={{ paddingLeft: isMobile ? "1px" : "", paddingRight: isMobile ? "1px" : "", display: "flex", justifyContent: "center" }}>
            <InterestCardStyled className="hover-shadow" onClick={handleClick} onKeyDown={handleOnKeyDown} isMobile={isMobile}>
                <SelectedStyled display={selected ? "block" : "none"} />
                <CardImageStyled className="card-img-top" src={require(`~/assets/thematiques/${props.src}`)} alt={props.title} />
                <CardBodyStyled className="card-body">
                    <CardTextStyled className="card-text" isMobile={isMobile}>{props.title}</CardTextStyled>
                </CardBodyStyled>
            </InterestCardStyled>
        </div>
    )
}

export default InterestCard;