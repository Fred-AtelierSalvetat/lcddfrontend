import React from 'react';
import { connect } from 'react-redux';
import { userActions } from '~/state/user/user.actions';
import { BsPerson } from 'react-icons/bs';
import settings from '../../assets/profile/settings.svg';
import history from '../../util/history';

const Profile = (props) => {

    const handleLogout = () => {
        history.push('/logout');
    }

    const Name = ({ firstName, lastName }) => {
        const text = `${firstName} ${lastName.length > 0 ? (lastName[0] + '.') : ''}`;
        return <div className="profile-name">{text}</div>
    }

    const AvatarImg = () => {
        return (
            <div className="profile-avatar">
                <BsPerson />
                <img className="settings-img" src={settings} alt="settings" />
            </div>
        )
    }

    const ProfileDropdown =
        <ul id="settingsList" className="dropdown-menu dropdown-menu-right dropdown-menu-profile">
            <li className="dropdown-item">Mon profil</li>
            <li className="dropdown-item" onClick={handleLogout}>Déconnexion</li>
        </ul>

    return (
        <div id="header-profile" className="dropdown">
            <div className="data-toggle" data-toggle="dropdown">
                <AvatarImg />
                <Name firstName={props.user.firstName} lastName={props.user.lastName} />
            </div>

            {ProfileDropdown}
        </div>
    )
}

const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
}

const actionCreators = {
    logout: userActions.logout
}

const connectedProfile = connect(mapStateToProps, actionCreators)(Profile);

export default connectedProfile;
