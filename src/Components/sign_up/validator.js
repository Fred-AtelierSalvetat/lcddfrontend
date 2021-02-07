const NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:(\s|.|-|.\s)[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])(?=.*[A-Za-z]).{8,}$/;

export const Validator = {
    "firstName": {
        required: "Le prénom est requis",
        minLength: {
            value: 2,
            message: "Le prénom doit contenir au moins 2 caractères"
        },
        maxLength: {
            value: 30,
            message: "Le prénom ne doit pas dépasser 30 caractères"
        },
        pattern: {
            value: NAME_PATTERN,
            message: "Le prénom ne doit pas contenir des numéros et des caractères spéciaux"
        }
    },
    "lastName": {
        required: {
            value: true,
            message: "Le nom est requis"
        },
        pattern: {
            value: NAME_PATTERN,
            message: "Le nom ne doit pas contenir des numéros et des caractères spéciaux"
        },
        minLength: {
            value: 2,
            message: "Le nom doit contenir au moins 2 caractères"
        },
        maxLength: {
            value: 30,
            message: "Le nom ne doit pas dépasser 30 caractères"
        }
    },
    "email": {
        required: {
            value: true,
            message: "L'adresse e-mail est requise"
        },
        pattern: {
            value: EMAIL_PATTERN,
            message: "Entrer une addresse e-mail valide",
        }
    },
    "password": {
        required: {
            value: true,
            message: "Le mot de passe est requis"
        },
        pattern: {
            value: PASSWORD_PATTERN,
            message: "Le mot de passe doit contenir et mélanger au moins 8 caractères alphanumériques et spéciaux"
        }
    }
}