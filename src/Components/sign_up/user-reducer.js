export const DefaultUser = {
    role: '',
    firstName: '',
    lastName: '',
    city: '',
    email: '',
    password: '',
}

export const UserReducer = (user, { type, payload }) => {
    switch (type) {
        case 'UPDATE_PERSONAL_INFO':
            return {
                ...user,
                ...payload,
            }
        default:
            return user
    }
}