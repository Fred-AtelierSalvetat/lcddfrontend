import { createSelector } from 'reselect';

const allUsersSelector = (state) => state.users;
const rolesFilterSelector = (state) => state.uiFilters.roles;
export const searchFilterSelector = (state) => state.uiFilters.search;

export const getVisibleUsers = createSelector(
    allUsersSelector,
    rolesFilterSelector,
    searchFilterSelector,
    (users, roles_filter, search_filter) => {
        return users.filter(
            (user) =>
                roles_filter.includes(user.role) &&
                (user.firstname.toLowerCase().includes(search_filter.toLowerCase()) ||
                    user.lastname.toLowerCase().includes(search_filter.toLowerCase())),
        );
    },
);

export const isRequestInProgress = (state, request_type) => state.inProgressRequests.includes(request_type);
export const getRequestStatusMsgs = (state) => state.requestsStatusMsgs;
