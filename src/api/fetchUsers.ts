import * as userModel from '../state/users/constants/Roles';
import * as userStatus from '../state/users/constants/Status';

export let fakeDatabase = [
    {
        user_id: 0,
        firstname: 'François',
        lastname: 'Dupont',
        phone: '0102030405',
        email_pro: '',
        email: 'francois.dupont@free.fr',
        town: 'Paris',
        status: userStatus.INACTIVE,
        role: userModel.ROLE_SPEAKER,
    },
    {
        user_id: 1,
        firstname: 'Michel',
        lastname: 'Petit',
        phone: '0607080910',
        email_pro: '',
        email: 'michel.petit@etu-univ.fr',
        town: 'Grenoble',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_PRO_USER,
    },
    {
        user_id: 2,
        firstname: 'Albert',
        lastname: 'Dupont',
        phone: '111122224444',
        email_pro: 'Albert@avocat.fr',
        email: 'albert.dupont@gmail.com',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_STUDENT,
    },
    {
        user_id: 3,
        firstname: 'Camille',
        lastname: 'Martin',
        phone: '987654321',
        email_pro: 'Camille.Martin@pro.com',
        email: '',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_CITIZEN,
    },
    {
        user_id: 4,
        firstname: 'Admin',
        lastname: 'ROOT',
        phone: '987654321',
        email_pro: 'admin@root.com',
        email: '',
        town: '@',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_ADMIN,
    },
    {
        user_id: 5,
        firstname: 'Albert',
        lastname: 'Endormi',
        phone: '987654321',
        email_pro: 'albert@lcdd.com',
        email: '',
        town: 'Toulouse',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_ANSWER,
    },
    {
        user_id: 6,
        firstname: 'Martin',
        lastname: 'Impatient',
        phone: '987654321',
        email_pro: 'martin@lcdd.com',
        email: '',
        town: 'Nantes',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_VALIDATION,
    },
    {
        user_id: 20,
        firstname: 'François2',
        lastname: 'Dupont',
        phone: '0102030405',
        email_pro: '',
        email: 'francois.dupont@free.fr',
        town: 'Paris',
        status: userStatus.INACTIVE,
        role: userModel.ROLE_SPEAKER,
    },
    {
        user_id: 21,
        firstname: 'Michel2',
        lastname: 'Petit',
        phone: '0607080910',
        email_pro: '',
        email: 'michel.petit@etu-univ.fr',
        town: 'Grenoble',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_PRO_USER,
    },
    {
        user_id: 22,
        firstname: 'Albert2',
        lastname: 'Dupont',
        phone: '111122224444',
        email_pro: 'Albert@avocat.fr',
        email: 'albert.dupont@gmail.com',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_STUDENT,
    },
    {
        user_id: 23,
        firstname: 'Camille2',
        lastname: 'Martin',
        phone: '987654321',
        email_pro: 'Camille.Martin@pro.com',
        email: '',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_CITIZEN,
    },
    {
        user_id: 24,
        firstname: 'Admin2',
        lastname: 'ROOT',
        phone: '987654321',
        email_pro: 'admin@root.com',
        email: '',
        town: '@',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_ADMIN,
    },
    {
        user_id: 25,
        firstname: 'Albert2',
        lastname: 'Endormi',
        phone: '987654321',
        email_pro: 'albert@lcdd.com',
        email: '',
        town: 'Toulouse',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_ANSWER,
    },
    {
        user_id: 26,
        firstname: 'Martin2',
        lastname: 'Impatient',
        phone: '987654321',
        email_pro: 'martin@lcdd.com',
        email: '',
        town: 'Nantes',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_VALIDATION,
    },
    {
        user_id: 30,
        firstname: 'François3',
        lastname: 'Dupont',
        phone: '0102030405',
        email_pro: '',
        email: 'francois.dupont@free.fr',
        town: 'Paris',
        status: userStatus.INACTIVE,
        role: userModel.ROLE_SPEAKER,
    },
    {
        user_id: 31,
        firstname: 'Michel3',
        lastname: 'Petit',
        phone: '0607080910',
        email_pro: '',
        email: 'michel.petit@etu-univ.fr',
        town: 'Grenoble',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_PRO_USER,
    },
    {
        user_id: 32,
        firstname: 'Albert3',
        lastname: 'Dupont',
        phone: '111122224444',
        email_pro: 'Albert@avocat.fr',
        email: 'albert.dupont@gmail.com',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_STUDENT,
    },
    {
        user_id: 33,
        firstname: 'Camille3',
        lastname: 'Martin',
        phone: '987654321',
        email_pro: 'Camille.Martin@pro.com',
        email: '',
        town: 'Marseille',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_CITIZEN,
    },
    {
        user_id: 34,
        firstname: 'Admin3',
        lastname: 'ROOT',
        phone: '987654321',
        email_pro: 'admin@root.com',
        email: '',
        town: '@',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_ADMIN,
    },
    {
        user_id: 35,
        firstname: 'Albert3',
        lastname: 'Endormi',
        phone: '987654321',
        email_pro: 'albert@lcdd.com',
        email: '',
        town: 'Toulouse',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_ANSWER,
    },
    {
        user_id: 36,
        firstname: 'Martin3',
        lastname: 'Impatient',
        phone: '987654321',
        email_pro: 'martin@lcdd.com',
        email: '',
        town: 'Nantes',
        status: userStatus.ACTIVE,
        role: userModel.ROLE_SPEAKER_AWAITING_VALIDATION,
    },
];
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const fetchUsers = () => () => {
    return delay(1000).then(() => {
        if (Math.random() > 0.7) {
            throw new Error("Pas de panique, c'est une erreur simulée (taux d'occurence 50%).");
        }
        return fakeDatabase;
    });
};

export const updateUser = (id, userUpdate) => () =>
    delay(100).then(() => {
        // if (Math.random() > 0.5) {
        //     throw new Error("Pas de panique, c'est une erreur simulée (taux d'occurence 50%).");
        // }
        const user = fakeDatabase.find((user) => user.user_id === id);
        if (user === undefined) {
            throw new Error(`UserId ${id} not found. Can't perform status update.`);
        }

        fakeDatabase = fakeDatabase.map((user) => (user.user_id !== id ? user : { ...user, ...userUpdate }));
    });

export const deleteUser = (id) => () =>
    delay(100).then(() => {
        // if (Math.random() > 0.5) {
        //     throw new Error("Pas de panique, c'est une erreur simulée (taux d'occurence 50%).");
        // }
        const user = fakeDatabase.find((user) => user.user_id === id);
        if (user === undefined) {
            throw new Error(`UserId ${id} not found. Can't perform delete user.`);
        }
        fakeDatabase = fakeDatabase.filter((user) => user.user_id !== id);
    });
