import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '~/state/user/user.actions';

import RoundSpinner from '../shared/RoundSpinner';

const LogoutPage = (props) => {
    const history = useHistory();

    useEffect(() => {
        props.dispatch(userActions.logout());
        history.push('/');
    });

    return (
        <div>
            <RoundSpinner />
        </div>
    );
};

export default connect()(LogoutPage);
