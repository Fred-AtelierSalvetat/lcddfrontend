import React from 'react';
import { Spinner } from "react-bootstrap";

const RoundSpinner = (props) => {
    return (
        <Spinner animation="border" role="status" size={props.size}>
            <span className="sr-only">Loading...</span>
        </Spinner>
    )
}

export default RoundSpinner;