import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '~/state/user/user.actions';
import { BsPerson } from 'react-icons/bs';
import settings from '../../assets/profile/settings.svg';

import PropTypes from 'prop-types';

const profilePropsTypes = {
    user: PropTypes.exact({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
    }),
};

const namePropsTypes = {
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
};

const Profile = (props) => {
    const history = useHistory();

    const Name = ({ firstName, lastName }) => {
        const text = `${firstName} ${lastName.length > 0 ? lastName[0] + '.' : ''}`;
        return <div className="profile-name">{text}</div>;
    };
    Name.propTypes = namePropsTypes;

    const AvatarImg = () => {
        return (
            <div className="profile-avatar">
                <BsPerson />
                <img className="settings-img" src={settings} alt="settings" />
            </div>
        );
    };

    const ProfileDropdown = (
        <ul id="settingsList">
            <li className="dropdown-item" onClick={() => history.push('/my-profile')}>
                Mon profil
            </li>
            <li className="dropdown-item" onClick={() => history.push('/my-profile/modify-password')}>
                Modifier le mot de passe
            </li>
            <li className="dropdown-item" onClick={() => history.push('/logout')}>
                Déconnexion
            </li>
        </ul>
    );

    return (
        <div id="header-profile" className="dropdown">
            <div className="data-toggle" data-toggle="dropdown">
                <AvatarImg />
                <Name firstName={props.user.firstName} lastName={props.user.lastName} />
            </div>

            <div className="dropdown-menu dropdown-menu-right dropdown-menu-profile">{ProfileDropdown}</div>
        </div>
    );
};

const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
};

const actionCreators = {
    logout: userActions.logout,
};

const connectedProfile = connect(mapStateToProps, actionCreators)(Profile);

Profile.propTypes = profilePropsTypes;

export default connectedProfile;
