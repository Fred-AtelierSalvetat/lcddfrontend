import React from 'react';
import { Form } from "react-bootstrap"

export const FormFeedback = (props) => {
    
    if (props.field == 'password') {
        return (
            <>
                {
                    props.field.types.map((err, ind) =>
                        <Form.Control.Feedback type="invalid">
                            {props.field.types}
                        </Form.Control.Feedback>
                    )
                }
            </>
        )
    }
    else {
        return (
            <Form.Control.Feedback type="invalid">
                {props.field && props.field.message}
            </Form.Control.Feedback>
        )
    }
}