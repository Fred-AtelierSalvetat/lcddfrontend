import React from 'react';
import { mount } from 'enzyme';
import { fireEvent, screen, cleanup, render, within } from '@testing-library/react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { MemoryRouter, Route } from 'react-router-dom';

import { rootReducer, reducersList } from '~/state/reducers';

import UserManagement from './UserManagement';

import * as userRoles from '~/state/users/constants/roles';
import { fakeDatabase } from '~/api/fetchUsers';

describe('<UserManagement /> ', () => {
    let store = undefined;
    const globalStateWithUsers = {};
    const mockStore = configureMockStore([thunk]);
    beforeEach(() => {
        const mockStore = configureMockStore([thunk]);
        for (const prop of Object.getOwnPropertyNames(reducersList)) {
            globalStateWithUsers[prop] = undefined;
        }
        globalStateWithUsers.users = {
            users: fakeDatabase,
            uiFilters: {
                roles: [
                    //All users displayed
                    userRoles.ROLE_ADMIN,
                    userRoles.ROLE_SPEAKER_AWAITING_ANSWER,
                    userRoles.ROLE_SPEAKER_AWAITING_VALIDATION,
                    userRoles.ROLE_SPEAKER,
                    userRoles.ROLE_PRO_USER,
                    userRoles.ROLE_STUDENT,
                    userRoles.ROLE_CITIZEN,
                ],
                search: '',
            },
        };
        store = mockStore(rootReducer(globalStateWithUsers, { type: undefined }));
    });

    it('renders without crashing', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users']}>
                    <Route path={['/users/:roleFilter', '/users']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
    });

    it('proposes 3 tabs : "Admins", "Intervants" and "Utilisateurs"', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users']}>
                    <Route path={['/users/:roleFilter', '/users']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        const tabs = screen.getAllByRole('tab');
        expect(tabs).to.have.length(3);
        expect(within(tabs[0]).queryByText('Admins')).toBeInTheDocument();
        expect(within(tabs[1]).queryByText('Intervenants')).toBeInTheDocument();
        expect(within(tabs[2]).queryByText('Utilisateurs')).toBeInTheDocument();
    });

    it("'s 'Admins' tab selection should display the admin table with the specified columns", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        const awaitedHeaders = [
            'Nom',
            'Prénom',
            'Téléphone',
            'E-mail Pro',
            'E-mail Perso',
            'Ville',
            'Status',
            'Actions',
            '',
        ];
        const renderedHeaders = within(screen.getByRole('tabpanel')).getAllByRole('heading');
        expect(renderedHeaders).to.have.lengthOf(awaitedHeaders.length);
        awaitedHeaders.forEach((label, index) => expect(renderedHeaders[index]).toHaveTextContent(label));
    });

    it("'s 'Admins' tab's table should allow 'Revenir intervenant' action", async () => {
        const targetActionLabel = 'Revenir intervenant';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(screen.getAllByTitle('openUserActionMenu')[0]);
        await screen.findByText(targetActionLabel);
    });

    it("'s 'Admins' tab's table should allow 'Supprimer' action", async () => {
        const targetActionLabel = 'Supprimer';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(screen.getAllByTitle('openUserActionMenu')[0]);
        await screen.findByText(targetActionLabel);
    });

    it("'s 'Intervenants' tab selection should display the speakers table with the specified columns", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/speaker']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        const awaitedHeaders = [
            'Nom',
            'Prénom',
            'Téléphone',
            'E-mail Pro',
            'E-mail Perso',
            'Ville',
            'Status',
            'Actions',
            '',
        ];
        const renderedHeaders = within(screen.getByRole('tabpanel')).getAllByRole('heading');
        expect(renderedHeaders).to.have.lengthOf(awaitedHeaders.length);
        awaitedHeaders.forEach((label, index) => expect(renderedHeaders[index]).toHaveTextContent(label));
    });

    it("'s 'Intervenants' tab's table should allow 'Promouvoir admin' action on validated speakers", async () => {
        const targetActionLabel = 'Promouvoir admin';
        const targetUser = store.getState().users.users.filter((user) => user.role === userRoles.ROLE_SPEAKER)[0];
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/speaker']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(
            within(within(screen.getByRole('tabpanel')).getByTestId(targetUser.user_id)).getByTitle(
                'openUserActionMenu',
            ),
        );
        await screen.findByText(targetActionLabel);
    });

    it("'s 'Intervenants' tab's table should allow 'Valider candidat' action on speakers awaiting validation", async () => {
        const targetActionLabel = 'Valider candidat';
        const targetUser = store
            .getState()
            .users.users.filter((user) => user.role === userRoles.ROLE_SPEAKER_AWAITING_VALIDATION)[0];
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/speaker']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(
            within(within(screen.getByRole('tabpanel')).getByTestId(targetUser.user_id)).getByTitle(
                'openUserActionMenu',
            ),
        );
        await screen.findByText(targetActionLabel);
    });

    it("'s 'Utilisateurs' tab selection should display the users table with the specified columns", () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/user']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        const awaitedHeaders = ['Nom', 'Prénom', 'E-mail', 'Ville', 'Rôle', 'Status', 'Actions'];
        const renderedHeaders = within(screen.getByRole('tabpanel')).getAllByRole('heading');
        expect(renderedHeaders).to.have.lengthOf(awaitedHeaders.length);
        awaitedHeaders.forEach((label, index) => expect(renderedHeaders[index]).toHaveTextContent(label));
    });
    it("'s 'Utilisateurs' tab's table should allow 'Inviter à intervenir' action on legal professional users", async () => {
        const targetActionLabel = 'Inviter à intervenir';
        const targetUser = store.getState().users.users.filter((user) => user.role === userRoles.ROLE_PRO_USER)[0];
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/user']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(
            within(within(screen.getByRole('tabpanel')).getByTestId(targetUser.user_id)).getByTitle(
                'openUserActionMenu',
            ),
        );
        await screen.findByText(targetActionLabel);
    });
    it("'s 'Utilisateurs' tab's table should allow 'Supprimer' action", async () => {
        const targetActionLabel = 'Supprimer';
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/user']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(screen.queryByText(targetActionLabel)).to.be.null;
        fireEvent.click(screen.getAllByTitle('openUserActionMenu')[0]);
        await screen.findByText(targetActionLabel);
    });

    it('should filter users according to role', () => {
        const targetUser = store.getState().users.users.filter((user) => user.role === userRoles.ROLE_CITIZEN)[0];
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(within(screen.getByRole('tabpanel')).queryByTestId(targetUser.user_id)).toBeInTheDocument();
        cleanup();
        globalStateWithUsers.users.uiFilters.roles = [userRoles.ROLE_ADMIN];
        store = mockStore(rootReducer(globalStateWithUsers, { type: undefined }));
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(within(screen.getByRole('tabpanel')).queryByTestId(targetUser.user_id)).not.toBeInTheDocument();
    });
    it('should filter users firstname and lastname according to searchbox content', () => {
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        //Note: Add the header row to the count
        expect(within(screen.getByRole('tabpanel')).getAllByRole('row')).to.have.length(22);
        cleanup();
        globalStateWithUsers.users.uiFilters.search = 'Martin'; //Should return 6 users + 1 header row

        store = mockStore(rootReducer(globalStateWithUsers, { type: undefined }));
        render(
            <Provider store={store}>
                <MemoryRouter initialEntries={['/users/admin']}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(within(screen.getByRole('tabpanel')).getAllByRole('row')).to.have.length(7);
    });
    it('should match its reference snapshot', () => {
        const wrapper = mount(
            <Provider store={store}>
                <MemoryRouter initialEntries={[{ pathname: '/users/admin', key: 'invariableKeyForSnapshot' }]}>
                    <Route path={['/users/:roleFilter']}>
                        <UserManagement />
                    </Route>
                </MemoryRouter>
            </Provider>,
        );
        expect(wrapper).to.matchSnapshot();
    });
});
