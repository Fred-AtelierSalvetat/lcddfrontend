import React, { FC } from 'react';
import { BsBell } from 'react-icons/bs';

import PropTypes from 'prop-types';

const notificationsPropsTypes = {
  number: PropTypes.number.isRequired,
};

const Notifications: FC<PropTypes.InferProps<typeof notificationsPropsTypes>> = ({ number }) => (
    <div id="header-notifications">
        <div className="noti-bell">
            <BsBell />
            <div className="notifications-number">{number}</div>
        </div>
        <div className="profile-name">Notifications</div>
    </div>
);

Notifications.propTypes = notificationsPropsTypes;

export default Notifications;
