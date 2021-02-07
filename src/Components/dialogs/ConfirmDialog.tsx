import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
// import { Confirm } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

const ConfirmDialog = ({ show, title, body, cancelButton, okButton, handleClose, handleConfirm }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {body}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>{cancelButton}</Button>
                <Button variant="danger" onClick={handleConfirm}>{okButton}</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ConfirmDialog;