import React from 'react';
import { Button } from 'react-bootstrap';
import { ReactComponent as FCLogo } from '~/assets/logos/FC-logo.svg';

export const FranceConnectButton = ({ text, style }) => {
    return (
        <Button variant="outline-primary" className="FC-btn" style={style}>
            <FCLogo></FCLogo>
            <div className="FC-text">
                {text}<br />
                <span className="FC-text-bold">FranceConnect</span>
            </div>
        </Button>
    )
}

export const FranceConnectButtonEmail = ({ text, style, onClick }) => {
    return (
        <Button className="FC-btn-email" style={style} onClick={onClick}>
            <div className="FC-text-email">
                {text}<br />
                <span className="FC-text-bold">Votre adresse e-mail</span>
            </div>
        </Button>
    )
}