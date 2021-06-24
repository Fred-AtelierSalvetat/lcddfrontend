import { createSelector } from 'reselect';
import type { WorkshopsState, Workshop, SearchFilter } from './model';

const allWorkshopsSelector = (state: WorkshopsState): Workshop[] => state.workshops;
export const searchFilterSelector = (state: WorkshopsState): SearchFilter => state.searchFilter;

export const getVisibleWorkshops = createSelector(
    allWorkshopsSelector,
    searchFilterSelector,
    (workshops, search_filter) =>
        workshops.filter(
            (workshop) =>
                workshop.title.toLowerCase().includes(search_filter.toLowerCase()) ||
                workshop.keywords.join().toLowerCase().includes(search_filter.toLowerCase()),
        ),
);
