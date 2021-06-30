import React, { FC } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Home from './home';
import LegalNotice from './legal_notice';
import SignUp from './sign_up';
import { SignInResetPassword } from './sign_in';
import Questions from './questions/Questions.component';
import DevenirIntervenant from './devenir_intervenant/DevenirIntervenant';
import { Speakers, SpeakerProfile } from './speakers';
import Dashboard from './dashboard/Dashboard';
import ContactUs from './contact_us';
import MyProfile from './my_profile';
import ErrorForm from './error/ErrorForm';
import Logout from './logout';
import Auth from '@aws-amplify/auth';
import { useDispatch } from 'react-redux';
import { userActionTypes } from '~/state/user/constants/UserActionType';
import { getUserFromCognitoUser } from '~/state/users/constants/utils/CognitoUser';

import './App.scss';

const App: FC = () => {
    const dispatch = useDispatch();

    Auth.currentAuthenticatedUser()
        .then((user) => {
            const cognitoUser = user.attributes;
            const currentUser = getUserFromCognitoUser(cognitoUser);
            console.log('current user', currentUser);
            dispatch({ type: userActionTypes.GET_CURRENT_USER_SUCCESS, user: currentUser });
        })
        .catch((err) => {
            console.log('current user', err);
            dispatch({ type: userActionTypes.GET_CURRENT_USER_FAILURE });
        });

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <div id="lcdd-body">
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/profile/:id" component={SpeakerProfile} />
                        <Route path="/about" component={About} />
                        <Route path="/contact-us" component={ContactUs} />
                        <Route path="/legal-notice" component={LegalNotice} />
                        <Route path="/questions" component={Questions} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/logout" component={Logout} />
                        <Route path="/sign-in/reset-password" component={SignInResetPassword} />
                        <Route path="/my-profile" component={MyProfile} />
                        <Route path="/devenirintervenant" component={DevenirIntervenant} />
                        <Route path="/devenirintervenantenvoyee" component={DevenirIntervenant} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/error" component={ErrorForm} />
                        <Route path="*">
                            <p>No Match</p>
                        </Route>
                    </Switch>
                </div>
                <Footer />
            </BrowserRouter>
        </div>
    );
};

function About() {
    return <h2>About</h2>;
}

export default App;
