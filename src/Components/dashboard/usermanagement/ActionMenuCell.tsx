import React, { FC } from 'react';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { ReactComponent as DotsIcon } from '~/assets/icons/more_horiz_24px.svg';

const ActionMenuCell: FC = ({ children = [] }) => {
    const popover = (
        <Popover id="ActionMenu">
            <Popover.Content>{React.Children.map(children, (child) => child)}</Popover.Content>
        </Popover>
    );
    return (
        <OverlayTrigger rootClose={true} trigger="click" placement="bottom" overlay={popover}>
            <div className="ActionMenuIcon">
                <DotsIcon title="openUserActionMenu" />
            </div>
        </OverlayTrigger>
    );
};

export default ActionMenuCell;
