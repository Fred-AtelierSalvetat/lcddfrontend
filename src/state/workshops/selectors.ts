import { createSelector } from 'reselect';
import type { WorkshopsState, Workshop, SearchFilter, OrderBy } from './model';
import { statusOrder } from './constants/status';

const allWorkshopsSelector = (state: WorkshopsState): Workshop[] => state.workshops;
export const searchFilterSelector = (state: WorkshopsState): SearchFilter => state.searchFilter;
export const getWorkshopById = (state: WorkshopsState, id: Workshop.id): Workshop =>
    state.workshops.filter((workshop) => workshop.id === id)[0];
export const idWorkshopStoreInialized = (state: WorkshopsState): boolean => !!state.workshops.length;
export const getOrderBy = (state: WorkshopsState): OrderBy => state.orderBy;

export const sortFct = {
    title: (a: Workshop.title, b: Workshop.title): number => a.title.localeCompare(b.title),
    status: (a: Workshop.status, b: Workshop.status): number =>
        statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status),
};

export const getWorkshops = createSelector(
    allWorkshopsSelector,
    searchFilterSelector,
    getOrderBy,
    (workshops, search_filter, orderBy) =>
        workshops
            .filter(
                (workshop) =>
                    workshop.title.toLowerCase().includes(search_filter.toLowerCase()) ||
                    workshop.keywords.join().toLowerCase().includes(search_filter.toLowerCase()),
            )
            .sort(sortFct[orderBy]),
);
