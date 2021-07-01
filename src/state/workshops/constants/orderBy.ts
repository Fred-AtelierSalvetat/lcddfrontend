import { statusOrder } from './status';

export const SORT_DEFAULT_VALUE = 'status';

export const sortFct = {
    title: (a: Workshop.title, b: Workshop.title): number => a.title.localeCompare(b.title),
    status: (a: Workshop.status, b: Workshop.status): number =>
        statusOrder.indexOf(a.status) - statusOrder.indexOf(b.status),
};

export const sortOptions = Object.keys(sortFct);
