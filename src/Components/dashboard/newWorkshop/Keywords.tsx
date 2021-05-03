import React, { FC, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { ReactComponent as DeleteIcon } from '../../../assets/icons/delete_24px.svg';

const Keywords: FC<{
    value: string[];
    setValue: (newValue: string[]) => void;
}> = ({ value, setValue }) => {
    const [inputKeyword, setInputKeyword] = useState('');

    const addKeyword = () => {
        if (!inputKeyword) return;
        setValue([...value, inputKeyword]);
        setInputKeyword('');
    };
    const deleteKeyword = (toDelete) => {
        setValue(value.filter((keyword) => keyword !== toDelete));
    };
    const handleKeyDown = (event) => {
        if (!inputKeyword) return;
        switch (event.key) {
            case 'Enter':
            case 'Tab':
                addKeyword();
                event.preventDefault();
        }
    };

    return (
        <>
            <Form.Control
                type="text"
                placeholder="Ajouter un mot-clé"
                onChange={(event) => setInputKeyword(event.target.value)}
                onKeyDown={(event) => handleKeyDown(event)}
                value={inputKeyword}
            />
            <Button variant="outline-primary" onClick={() => addKeyword()}>
                Ajouter
            </Button>
            <div className="list">
                {value.map((keyword) => (
                    <div className="item flex-shrink-1">
                        <div className="flex-shrink-1 wrap-anywhere">{keyword}</div>
                        <DeleteIcon className="action-icon" onClick={() => deleteKeyword(keyword)} />
                    </div>
                ))}
            </div>
        </>
    );
};

export default Keywords;
