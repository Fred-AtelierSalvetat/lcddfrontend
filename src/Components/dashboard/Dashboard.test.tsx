import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import { MemoryRouter, Route } from 'react-router-dom';
import { NavLink } from 'react-bootstrap';

import Dashboard from './Dashboard';
import UserManagement from './usermanagement/UserManagement';

jest.mock('./usermanagement/UserManagement');

describe('<Dashboard />', () => {
    it('contains 6 navigation links', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find(NavLink)).to.have.length(6);
    });
    it('contains a link to #/dashboard/workshops', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find({ href: '#/dashboard/workshops' })).to.exist;
    });

    it('contains a link to #/dashboard/users', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find({ href: '#/dashboard/users' })).to.exist;
    });

    it('contains a link to #/dashboard/analytics', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find({ href: '#/dashboard/analytics' })).to.exist;
    });

    it('contains a link to #/dashboard/notifications', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find({ href: '#/dashboard/notifications' })).to.exist;
    });

    it('contains a link to #/dashboard/help', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard']}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find({ href: '#/dashboard/help' })).to.exist;
    });

    it("shall handle route's params to activate the corresponding NavLink", () => {
        const userManagementMockContent = <div>UserManagementTESTPAGE</div>;
        UserManagement.mockImplementation(() => userManagementMockContent);
        const wrapper = mount(
            <MemoryRouter initialEntries={['/dashboard/users']}>
                <Route path="/dashboard/:selectedPage" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );
        expect(wrapper.find(NavLink).filter({ href: '#/dashboard/users' })).to.have.length(1);
        expect(wrapper.find(NavLink).filter({ href: '#/dashboard/users' }).at(0).props().active).to.equal(true);
        expect(wrapper.find('#lcdd-dashboard-page').childAt(0)).to.contain(userManagementMockContent);
    });

    it('should match its reference snapshot', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries={[{ pathname: '/dashboard', key: 'testKey' }]}>
                <Route path="/dashboard" exact={true}>
                    <Dashboard />
                </Route>
            </MemoryRouter>,
        );

        expect(wrapper).to.matchSnapshot();
    });
});
