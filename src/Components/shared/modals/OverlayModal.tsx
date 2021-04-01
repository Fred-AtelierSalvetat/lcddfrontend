import React from 'react';
import { Modal } from 'react-bootstrap';

const OverlayModal = (props) => {

    return (
        <Modal show={props.show} onHide={props.onHide}>
            {props.header &&
                <Modal.Header closeButton>
                    {props.header}
                </Modal.Header>
            }
            {props.body &&
                <Modal.Body>
                    {props.body}
                </Modal.Body>
            }
            {props.footer &&
                <Modal.Footer>
                    {props.footer}
                </Modal.Footer>
            }
        </Modal>
    )
}

export default OverlayModal;