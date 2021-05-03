import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';

import UserManagement from './UserManagement';

describe('<UserManagement /> ', () => {
    it('renders without crashing', () => {
        //const wrapper = mount(<UserManagement />);
    });
    it('proposes 3 tabs : "Admins", "Intervants" and "Utilisateurs"', () => {});
    it("'s 'Admins' tab selection should display the admin table with the specified columns", () => {});
    it("'s 'Admins' tab's table should allow 'Revenir intervenant' action", () => {});
    it("'s 'Admins' tab's table should allow 'Supprimer' action", () => {});
    it("'s 'Intervenants' tab selection should display the speakers table with the specified columns", () => {});
    it("'s 'Intervenants' tab's table should allow 'Promouvoir admin' action on validated speakers", () => {});
    it("'s 'Intervenants' tab's table should allow 'Valider candidat' action on speakers awaiting validation", () => {});
    it("'s 'Intervenants' tab's table should allow 'Valider candidat' action on speakers awaiting validation", () => {});
    it("'s 'Intervenants' tab's table should allow 'Supprimer' action", () => {});
    it("'s 'Utilisateurs' tab selection should display the users table with the specified columns", () => {});
    it("'s 'Utilisateurs' tab's table should allow 'Inviter à intervenir' action on legal professional users", () => {});
    it("'s 'Utilisateurs' tab's table should allow 'Supprimer' action", () => {});

    it('should filter users according to role', () => {});
    it('should filter users according to search', () => {});
});
