export type UserId = number;

export type User = {
    user_id: UserId;
    firstname: string;
    lastname: string;
    phone?: string;
    email_pro?: string;
    email: string;
    email_verified: boolean;
    town?: string;
    status?: string;
    role?: string;
};
export type UserUpdate = {
    user_id?: UserId;
    firstname?: string;
    lastname?: string;
    phone?: string;
    email_pro?: string;
    email?: string;
    email_verified?: boolean;
    town?: string;
    status?: string;
    role?: string;
};

export type UIfiltersRoles = string[];
export type UIfiltersSearch = string;

export type UIfilters = {
    roles: UIfiltersRoles;
    search: UIfiltersSearch;
};

export type UsersState = {
    users: User[];
    inProgressRequests: string[];
    uiFilters: UIfilters;
};
