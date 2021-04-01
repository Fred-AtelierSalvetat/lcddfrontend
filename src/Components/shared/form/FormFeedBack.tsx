import React from 'react';
import { Form } from "react-bootstrap"

export const FormFeedback = (props) => {
    return (
        <Form.Control.Feedback type="invalid">
            {props.field && props.field.message}
        </Form.Control.Feedback>
    )
}