import React from 'react';
import { mount } from 'enzyme';
import { fireEvent, screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act, waitFor } from 'react-dom/test-utils';
import '@testing-library/jest-dom';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { MemoryRouter, Route } from 'react-router-dom';
import selectEvent from 'react-select-event';

//2 below lines of imports should be part of test once connexion to backend will be done
import { intervenants, refLegifrance } from '~/Components/dashboard/shared/WkspForm';
import topics from '~/Components/shared/thematiques';

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

    it("'s button 'Créer atelier', shall dispatch a CREATE_WORKSHOP action", async () => {
        const newWorkshop = {
            title: 'Test*title$',
            startingdate: '20/4/2001 12:34',
            speakers: [intervenants[1].value],
            topics: [topics[3].title, topics[8].title],
            refs: [refLegifrance[2].value, refLegifrance[0].value],
            description: 'A workshop desc',
        };
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/newWorkshop']}>
                    <Route path="/newWorkshop">
                        <NewWorkshop />
                    </Route>
                    <Route path="/dashboard/workshops">
                        <div>WORKSHOPS-PAGE</div>
                    </Route>
                </MemoryRouter>
            </Provider>,
        );

        // userEvent.type(screen.getByLabelText("Titre d'atelier (obligatoire)"), newWorkshop.title);
        // await userEvent.type(screen.getByLabelText('Date & Heure (obligatoire)'), '20/4/2001 12:34');
        // await selectEvent.select(screen.getByLabelText('Intervenants (obligatoire)'), newWorkshop.speakers);
        // await selectEvent.select(screen.getByLabelText('Thématiques (obligatoire)'), newWorkshop.topics);
        // await selectEvent.select(screen.getByLabelText('Références Légifrance'), newWorkshop.refs);
        // userEvent.type(screen.getByLabelText('Description'), newWorkshop.description);
        // userEvent.click(screen.getAllByText('Créer atelier')[0], { skipHover: true });

        //console.log('screen =', screen.debug());
        //await screen.findByText('WORKSHOPS-PAGE');
        const actionStoreArray = store.getActions();
        // expect(actionStoreArray[0]).to.nested.include('toto');
        //console.log('Screen', screen.debug());

        // await waitFor(() => expect(mockAPI).toHaveBeenCalledTimes(1))
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
