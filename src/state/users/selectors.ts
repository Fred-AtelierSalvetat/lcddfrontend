import { createSelector } from 'reselect';
import { UsersState, User, UIfiltersRoles, UIfiltersSearch } from './model';
import { UsersActionType } from './constants/actionTypes';

const allUsersSelector = (state: UsersState): User[] => state.users;
export const rolesFilterSelector = (state: UsersState): UIfiltersRoles => state.uiFilters.roles;
export const searchFilterSelector = (state: UsersState): UIfiltersSearch => state.uiFilters.search;

export const getVisibleUsers = createSelector(
    allUsersSelector,
    rolesFilterSelector,
    searchFilterSelector,
    (users, roles_filter, search_filter) => {
        return users.filter(
            (user) =>
                user.role &&
                roles_filter.includes(user.role) &&
                (user.firstname.toLowerCase().includes(search_filter.toLowerCase()) ||
                    user.lastname.toLowerCase().includes(search_filter.toLowerCase())),
        );
    },
);

export const isRequestInProgress = (state: UsersState, request_type: UsersActionType): boolean =>
    state.inProgressRequests.includes(request_type);
