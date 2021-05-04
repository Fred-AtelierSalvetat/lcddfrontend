import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import Home from './home/Home';
import Speakers from './speakers/Speakers';
import Profile from './speakers/Profile';
import ContactForm from './contact/ContactForm';
import MentionsLegales from './mentions_legales/MentionsLegales';
import SignUp from './sign_up/SignUp';
import Questions from './questions/Questions.component';
import DevenirIntervenant from './devenir_intervenant/DevenirIntervenant';
import DevenirIntervenantEnvoyee from './devenir_intervenant/DevenirIntervenantEnvoyee';
import SignInResetPassword from './sign_in/SignInResetPassword';
import Dashboard from './dashboard/Dashboard';

// eslint-disable-next-line @typescript-eslint/ban-types
const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <Header />
            <div id="lcdd-body">
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/speakers" component={Speakers} />
                        <Route path="/profile/:id" component={Profile} />
                        <Route path="/about" component={About} />
                        <Route path="/contact" component={ContactForm} />
                        <Route path="/mentions-legales" component={MentionsLegales} />
                        <Route path="/questions" component={Questions} />
                        <Route path="/sign-up" component={SignUp} />
                        <Route path="/sign-in/reset-password" component={SignInResetPassword} />
                        <Route path="/devenirintervenant" component={DevenirIntervenant} />
                        <Route path="/devenirintervenantenvoyee" component={DevenirIntervenantEnvoyee} />
                        <Route path="/dashboard" exact={true} component={Dashboard} />
                        <Route path="/dashboard/:selectedPage/:roleFilter?" component={Dashboard} />
                        <Route path="*">
                            <p>No Match</p>
                        </Route>
                    </Switch>
                </HashRouter>
            </div>
            <Footer />
        </div>
    );
};

function About() {
    return <h2>About</h2>;
}

export default App;
