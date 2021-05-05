import React, { FC, useState } from 'react';

const Action: FC<{ icon: JSX.Element; label: string; action?: () => void; modalConfirmation?: JSX.Element }> = ({
    icon,
    label,
    action,
    modalConfirmation,
}) => {
    const [insertModal, setInsertModal] = useState(false);
    return (
        <div className="actionButton">
            <div
                className="actionButtonPanel"
                onClick={() => (modalConfirmation ? setInsertModal(true) : action ? action() : null)}
            >
                {insertModal ? modalConfirmation : null}
                {icon}
                <span>{label}</span>
            </div>
        </div>
    );
};

export default Action;
