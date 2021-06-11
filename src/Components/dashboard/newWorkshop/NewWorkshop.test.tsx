import React from 'react';
import { fireEvent, screen, render, within } from '@testing-library/react';

import NewWorkshop from './NewWorkshop';

describe('<NewWorkshop /> ', () => {
    it.todo('renders without crashing');
    it.todo('should present a form');

    it.todo('should contain a field "Titre d\'atelier (obligatoire)"');
    it.todo('\'s field "Titre d\'atelier (obligatoire)" should be mandatory');

    it.todo('should contain a field "Date & Heure (obligatoire)"');
    it.todo('\'s field "Date & Heure (obligatoire)" should be mandatory');

    it.todo('should contain a field "Intervenants (obligatoire)"');
    it.todo('\'s field "Intervenants (obligatoire)" should be a multiselect field');
    it.todo('\'s field "Intervenants (obligatoire)" should be mandatory');

    it.todo('should contain a field "Thématiques (obligatoire)"');
    it.todo('\'s field "Thématiques (obligatoire)" should be a multiselect field');
    it.todo('\'s field "Thématiques (obligatoire)" should be mandatory');

    it.todo('should contain a field "Références Légifrance"');
    it.todo('\'s field "Références Légifrance" should be a multiselect field');
    q;
    it.todo('\'s field "Références Légifrance" should not be mandatory');

    it.todo('should contain a field "Description"');
    it.todo('\'s field "Description" should be mandatory');

    it.todo('should contain a field "Mots-clés" section');
    it.todo('\'s field "Mots-clés" should not be mandatory');

    //Téléchargements
    //Liens

    it.todo('submit button "Créer atelier" shall submit the form');
    it.todo("reset button shall reset the form content to it's initial value");
});
