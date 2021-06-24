import * as action from './constants/actionTypes';
import type { WorkshopsActionType } from './constants/actionTypes';
import * as status from './constants/status';
import * as api from '~/api/fetchWorkshops';

import type { Speaker, Topic, RefLegiFrance, KeyWord, File, Link, Workshop, SearchFilter } from './model';

export const fetchWorkshops: { type: WorkshopsActionType; workshops: Workshop[] } = {
    type: action.FETCH_WORKSHOPS,
    workshops: api.fetchWorkshops(),
};

export const newWorkshop: (newWorkshop: {
    title: string;
    startingdate: date;
    endingdate: date;
    speakers: Speaker[];
    topics: Topic[];
    refsLegifrance: RefLegiFrance[];
    description: string;
    keywords: KeyWord[];
    files: File[];
    links: Link[];
}) => { type: WorkshopsActionType; workshop: Workshop } = ({
    title,
    startingdate,
    endingdate,
    speakers,
    topics,
    refsLegifrance,
    description,
    keywords,
    files,
    links,
}) => (dispatch) => {
    const newWorkshop = api.postNewWorkshop({
        status: status.INCOMING,
        title,
        startingdate,
        endingdate,
        speakers,
        topics,
        refsLegifrance,
        description,
        keywords,
        files,
        links,
    });
    dispatch({
        type: action.CREATE_WORKSHOP,
        workshop: newWorkshop,
    });
};

export const setWorkshopSearchFilter = (
    search_filter: SearchFilter,
): { type: typeof action.SET_WORKSHOP_SEARCH_FILTER; search_filter: SearchFilter } => ({
    type: action.SET_WORKSHOP_SEARCH_FILTER,
    search_filter,
});

export const cancelWorkshop = (id: Workshop.id): { type: typeof action.CANCEL_WORKSHOP; id: Workshop.id } => ({
    type: action.CANCEL_WORKSHOP,
    id,
});

export const deleteWorkshop = (id: Workshop.id): { type: typeof action.DELETE_WORKSHOP; id: Workshop.id } => ({
    type: action.DELETE_WORKSHOP,
    id,
});
export const archiveWorkshop = (id: Workshop.id): { type: typeof action.ARCHIVE_WORKSHOP; id: Workshop.id } => ({
    type: action.ARCHIVE_WORKSHOP,
    id,
});
export const restoreWorkshop = (id: Workshop.id): { type: typeof action.RESTORE_WORKSHOP; id: Workshop.id } => ({
    type: action.RESTORE_WORKSHOP,
    id,
});
