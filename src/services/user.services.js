import { Auth } from 'aws-amplify';

export const userServices = {
    register,
    confirmRegister,
    login,
    logout,
}

async function register(user) {
    try {
        const response = await Auth.signUp({
            username: user.email,
            password: user.password,
            attributes: {
                // attributes name are given by Cognito
                family_name: user.lastName,
                given_name: user.firstName,
                email: user.email,
                locale: user.city
            }
        });
        // console.log("register response", response);
        const _user = response.user;

        return _user;
    }
    catch (error) {
        return Promise.reject(error && error.message);
    }
}

async function confirmRegister(username, code) {
    try {
        const response = await Auth.confirmSignUp(username, code);
        // console.log("register response", response);
        const _user = response.user;

        return _user;
    }
    catch (error) {
        return Promise.reject(error && error.message);
    }
}

async function login(username, password) {
    try {
        const response = await Auth.signIn(username, password);
        console.log("response", response);
        return response;
    }
    catch (error) {
        return Promise.reject(error && error.message);
    }

}

async function logout() {
    try {
        await Auth.signOut();
    }
    catch (error) {
        return Promise.reject(error && error.message);
    }
}


const handleResponse = (response) => {
    const data = response || JSON.parse(response);
    if (!response.ok) {
        if (response.status === 401) {
            // auto logout if 401 response returned from api
            console.log("error 401");
            // logout();
            // location.reload();
        }

        const error = (data && data.message) || response.statusText;
        return Promise.reject(error);
    }
    return data;
}