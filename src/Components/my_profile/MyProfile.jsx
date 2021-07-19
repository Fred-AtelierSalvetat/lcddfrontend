import React from 'react';
import { Container } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router';
import { SideBarWrapper } from '../shared/wrapper';

const ModifyInterestsForm = React.lazy(() => import('./ModifyInterestsForm'));
const ModifyPasswordForm = React.lazy(() => import('./ModifyPasswordForm'));
const MyProfileForm = React.lazy(() => import('./MyProfileForm'));

import SideBar from './SideBarNav';
import './MyProfile.scss';

const Profile = (props) => {
    const match = useRouteMatch();

    if (props.loggedIn)
        return (
            <div className="containerX">
                <div className="container-title">
                    <h1>Paramètres de profil</h1>
                </div>
                <SideBarWrapper>
                    <SideBar />
                </SideBarWrapper>

                <Container>
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
