import { Auth } from 'aws-amplify';

export const userServices = {
    register,
    login,
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
        console.log("register response", response);
        const _user = response.user;
        console.log("_user", _user);

        // const _user = await handleResponse(response);
        return _user;
    }
    catch (error) {
        return Promise.reject(error && error.message);
    }
}

function confirmRegister() {

}

function login(username, password) {
    // Auth.signIn()

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