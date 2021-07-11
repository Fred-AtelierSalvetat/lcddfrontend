import React from 'react';
import { mount } from 'enzyme';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import NewWorkshop from './NewWorkshop';
describe('<NewWorkshop /> ', () => {
    const store = configureMockStore([thunk])({});

    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <NewWorkshop />
            </Provider>,
        );
    });
    it('should present a form', () => {
        render(
            <Provider store={store}>
                <NewWorkshop />
            </Provider>,
        );
        expect(screen.getByRole('form')).toBeInTheDocument();
    });

    it("shall contain two buttons 'Créer atelier'", () => {
        render(
            <Provider store={store}>
                <NewWorkshop />
            </Provider>,
        );
        expect(screen.getAllByText('Créer atelier')).to.have.lengthOf(2);
    });

    it("'s button 'Créer atelier', shall ", async () => {
        render(
            <Provider store={store}>
                <NewWorkshop />
            </Provider>,
        );
        screen.getByLabelText("Titre d'atelier (obligatoire)");
        await userEvent.type(screen.getByLabelText("Titre d'atelier (obligatoire)"), 'TestTitle');
        await userEvent.type(screen.getByLabelText('Date & Heure (obligatoire)'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Intervenants (obligatoire)'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Thématiques (obligatoire)'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Références Légifrance'), 'TestTitle');
        await userEvent.type(screen.getByLabelText('Description'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Mots-clés'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Téléchargements'), 'TestTitle');
        // await userEvent.type(screen.getByLabelText('Liens'), 'TestTitle');
    });

    it("shall contain one button 'Annuler'", () => {
        render(
            <Provider store={store}>
                <NewWorkshop />
            </Provider>,
        );
        expect(screen.getByText('Annuler')).toBeInTheDocument();
    });

    it.todo("'s button 'Annuler', shall empty all fields");
    // it('should match its reference snapshot', () => {
    //     const wrapper = mount(
    //         <Provider store={store}>
    //             <NewWorkshop />
    //         </Provider>,
    //     );
    //     expect(wrapper).to.matchSnapshot();
    // });
});
