import React from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Header from './header/Header';
import Footer from "./footer/Footer";
import Home from './home/Home';
import Speakers from './speakers/Speakers';
import Profile from './speakers/Profile';
import ContactForm from "./contact/ContactForm";
import MentionsLegales from './mentions_legales/MentionsLegales';
import SignUp from './sign_up/SignUp';
import SignIn from './sign_in/SignIn';

// eslint-disable-next-line @typescript-eslint/ban-types
const App: React.FC<{}> = () => {
    return (
        <div className="App">
            <Header />
            <HashRouter>
                <Route path="/" exact component={Home} />
                <Route path="/speakers" component={Speakers} />
                <Route path="/profile/:id" component={Profile} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={ContactForm} />
                <Route path="/mentions-legales" component={MentionsLegales} />
                <Route path="/signUp" component={SignUp} />
                <Route path="/signIn" component={SignIn} />
            </HashRouter>
            <Footer />
        </div>
    );
};

function About() {
    return <h2>About</h2>;
}

export default App;
