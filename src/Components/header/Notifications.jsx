import React from 'react';
import { BsBell } from 'react-icons/bs';

const Notifications = ({ number }) => {

    return (
        <div className="notifications">
            <div className="bell">
                <BsBell />
                <div className="notifications-number">{number}</div>
            </div>
            <div className="profile-name">Notifications</div>
        </div>
    )
}

export default Notifications;