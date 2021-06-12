export const DefaultUser = {
    role: '',
    firstName: '',
    lastName: '',
    city: '',
    email: '',
    password: '',
};

export type User = {
    role: string;
    firstName: string;
    lastName: string;
    city: string;
    email: string;
    password: string;
};

export const UserReducer: (user: User, action: { type: string; payload: User }) => User = (User, { type, payload }) => {
    switch (type) {
        case 'UPDATE_PERSONAL_INFO':
            return {
                ...user,
                ...payload,
            };
        default:
            return user;
    }
};
