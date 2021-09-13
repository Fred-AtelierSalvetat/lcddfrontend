import { Auth } from 'aws-amplify';
import type { User } from './Components/sign_up/user-reducers';

export const userServices = {
    register,
    confirmRegister,
    login,
    logout,
};

async function register(user: User): Promise {
    try {
        const response = await Auth.signUp({
            username: user.email,
            password: user.password,
            attributes: {
                // attributes name are given by Cognito
                family_name: user.lastName,
                given_name: user.firstName,
                email: user.email,
                locale: user.city,
            },
        });
        // console.log("register response", response);
        const _user = response.user;

        return _user;
    } catch (error) {
        return Promise.reject(error && error.message);
    }
}

async function confirmRegister(username: string, code: string): Promise {
    try {
        const response = await Auth.confirmSignUp(username, code);
        // console.log("register response", response);
        const _user = response.user;

        return _user;
    } catch (error) {
        return Promise.reject(error && error.message);
    }
}

async function login(username: string, password: string): Promise {
    try {
        const response = await Auth.signIn(username, password);
        console.log('response', response);
        return response;
    } catch (error) {
        return Promise.reject(error && error.message);
    }
}

async function logout(): void | Promise {
    try {
        await Auth.signOut();
    } catch (error) {
        return Promise.reject(error && error.message);
    }
}
