import React, { FC, Suspense } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Header from './header';
import Footer from './footer';
const Home = React.lazy(() => import('./home'));
const LegalNotice = React.lazy(() => import('./legal_notice'));
const SignUp = React.lazy(() => import('./sign_up'));
const SignInResetPassword = React.lazy(() => import('./sign_in/SignInResetPassword'));
const Questions = React.lazy(() => import('./questions/Questions.component'));
const DevenirIntervenant = React.lazy(() => import('./devenir_intervenant/DevenirIntervenant'));
const Speakers = React.lazy(() => import('./speakers/Speakers'));
const SpeakerProfile = React.lazy(() => import('./speakers/Profile'));
const Dashboard = React.lazy(() => import('./dashboard/Dashboard'));
const ContactUs = React.lazy(() => import('./contact_us'));
const MyProfile = React.lazy(() => import('./my_profile'));
const ErrorForm = React.lazy(() => import('./error/ErrorForm'));
const Logout = React.lazy(() => import('./logout'));

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
                    <Suspense fallback={<div>Chargement...</div>}>
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
                    </Suspense>
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
