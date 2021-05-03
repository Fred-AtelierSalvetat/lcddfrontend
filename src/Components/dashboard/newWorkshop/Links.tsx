import React, { FC, useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete_24px.svg';

const Links: FC<{
    value: { title: string; url: string }[];
    setValue: (newValue: { title: string; url: string }[]) => void;
}> = ({ value, setValue }) => {
    const [inputLinkURL, setInputLinkURL] = useState('');
    const [inputLinkTitle, setInputLinkTitle] = useState('');
    const refUrlInput = useRef<HTMLInputElement>(null);
    const refTitleInput = useRef<HTMLInputElement>(null);

    const addLink = () => {
        if (!inputLinkURL) {
            refUrlInput && refUrlInput.current && refUrlInput.current.focus();
            return;
        }
        if (!inputLinkTitle) {
            refTitleInput && refTitleInput.current && refTitleInput.current.focus();
            return;
        }
        setValue([...value, { title: inputLinkTitle, url: inputLinkURL }]);
        setInputLinkURL('');
        setInputLinkTitle('');
        refUrlInput && refUrlInput.current && refUrlInput.current.focus();
    };

    const deleteLink = (toDelete) => {
        setValue(value.filter((link) => link !== toDelete));
    };

    const handleKeyDownTitle = (event) => {
        if (!inputLinkTitle) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                addLink();
                event.preventDefault();
        }
    };
    const handleKeyDownURL = (event) => {
        if (!inputLinkURL) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                addLink();
                event.preventDefault();
        }
    };

    return (
        <>
            <Form.Label>Lien URL</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ajouter un URL"
                onChange={(event) => setInputLinkURL(event.target.value)}
                onKeyDown={(event) => handleKeyDownURL(event)}
                value={inputLinkURL}
                ref={refUrlInput}
            />
            <Form.Label>Lien titre</Form.Label>
            <Form.Control
                type="text"
                placeholder="Ajouter un titre"
                onChange={(event) => setInputLinkTitle(event.target.value)}
                onKeyDown={(event) => handleKeyDownTitle(event)}
                value={inputLinkTitle}
                ref={refTitleInput}
            />

            <Button variant="outline-primary" onClick={() => addLink()}>
                Ajouter
            </Button>

            <div className="list">
                {value.map((link) => (
                    <div className="item flex-shrink-1">
                        <div className="no-margin flex-shrink-1">
                            <div className="flex-shrink-1 wrap-anywhere">{link.title}</div>
                            <a className="flex-shrink-1 wrap-anywhere" href={link.url} target="_blank">
                                {link.url}
                            </a>
                        </div>
                        <DeleteIcon className="action-icon" onClick={() => deleteLink(link)} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Links;
