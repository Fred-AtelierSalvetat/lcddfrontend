import React, { FC } from 'react';

const Action: FC<{ icon: JSX.Element; label: string; action: () => void }> = ({ icon, label, action }) => (
    <div className="actionButton">
        <div className="actionButtonPanel" onClick={() => action()}>
            {icon}
            <span>{label}</span>
        </div>
    </div>
);

export default Action;
