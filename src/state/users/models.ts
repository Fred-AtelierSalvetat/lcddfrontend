export type User = {
    user_id: number;
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

export type UIfilters = {
    roles: string[];
    search: string;
};

export type RequestErrorType = {
    request_type: string;
    message: string;
};
