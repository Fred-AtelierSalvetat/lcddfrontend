/* eslint-disable */
import React from 'react';
import { Switch, Route, BrowserRouter, Router, useHistory } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Speakers from './speakers/Speakers';
import SpeakerProfile from './speakers/Profile';
import MentionsLegales from './mentions_legales/MentionsLegales';
import SignUp from './sign_up/SignUp';
import Questions from './questions/Questions.component';
import DevenirIntervenant from './devenir_intervenant/DevenirIntervenant';
import DevenirIntervenantEnvoyee from './devenir_intervenant/DevenirIntervenantEnvoyee';
import SignInResetPassword from './sign_in/SignInResetPassword';
import Dashboard from './dashboard/Dashboard';
import ContactUs from './contact/ContactUs';
import Auth from '@aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '~/state/user/constants/UserActionType';
import { getUserFromCognitoUser } from '~/state/users/constants/utils/CognitoUser';
import Logout from './logout/Logout';
import history from '../util/history';
import MyProfile from './my-profile';
import './App.scss';

// eslint-disable-next-line @typescript-eslint/ban-types
const App: React.FC<{}> = () => {

    const dispatch = useDispatch();

    Auth.currentAuthenticatedUser()
        .then(user => {
            let cognitoUser = user.attributes;
            let currentUser = getUserFromCognitoUser(cognitoUser);
            console.log("current user", currentUser);
            dispatch({ type: userActionTypes.GET_CURRENT_USER_SUCCESS, user: currentUser })
        })
        .catch(err => {
            console.log("current user", err);
            dispatch({ type: userActionTypes.GET_CURRENT_USER_FAILURE })
        });

    return (
        <div className="App">
            <Router history={history}>
                <Header />
                <div id="lcdd-body">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/profile/:id" component={SpeakerProfile} />
                        <Route path="/about" component={About} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/mentions-legales" component={MentionsLegales} />
                        <Route path="/questions" component={Questions} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/sign-in/reset-password" component={SignInResetPassword} />
                        <Route path="/my-profile" component={MyProfile} />
                        <Route path="/devenirintervenant" component={DevenirIntervenant} />
                        <Route path="/devenirintervenantenvoyee" component={DevenirIntervenantEnvoyee} />
                        <Route path="/dashboard" exact={true} component={Dashboard} />
                        <Route path="/dashboard/:selectedPage/:roleFilter?" component={Dashboard} />
                        <Route path="*">
                            <p>No Match</p>
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </Router>
        </div>
    );
};

function About() {
    return <h2>About</h2>;
}

export default App;
