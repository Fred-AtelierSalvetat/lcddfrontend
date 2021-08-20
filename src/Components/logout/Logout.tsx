import React, { FC, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { userActions } from '~/state/user/user.actions';

import RoundSpinner from '../shared/RoundSpinner';

const LogoutPage: FC = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userActions.logout());
    history.push('/');
  });

  return (
        <div>
            <RoundSpinner />
        </div>
  );
};

export default connect()(LogoutPage);
