import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { SideBarWrapper } from '../shared/wrapper';
import ModifyInterestsForm from './ModifyInterestsForm';
import ModifyPasswordForm from './ModifyPasswordForm';
import MyProfileForm from './MyProfileForm';
import SideBar from './SideBarNav';
import './MyProfile.scss';

const Profile = (props) => {
    const match = useRouteMatch();

    if (props.loggedIn)
        return (
            <div className="containerX">
                <SideBarWrapper>
                    <SideBar />
                </SideBarWrapper>

                <Container>
                    <div className="container-title">
                        <h1>Paramètres de profil</h1>
                    </div>
                    <Switch>
                        <Route exact path={match.url} component={MyProfileForm} />
                        <Route path={`${match.url}/modify-password`} component={ModifyPasswordForm} />
                        <Route path={`${match.url}/modify-interests`} component={ModifyInterestsForm} />
                        <Redirect from="*" to="/my-profile" />
                    </Switch>
                </Container>
            </div>
        );
    else return null;
};
const mapStateToProps = (state) => {
    const { loggedIn, user } = state.authentication;
    return { loggedIn, user };
};

export default connect(mapStateToProps)(Profile);
