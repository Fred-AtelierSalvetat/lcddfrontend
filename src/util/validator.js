const NAME_PATTERN = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:(\s|.|-|.\s)[A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const PASSWORD_PATTERN = /^(?=.*[0-9])(?=.*[!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"])(?=.*[A-Z])(?=.*[a-z]).{8,}$/;
const PHONE_NUMBER_PATTERN = /^[0-9]*$/;

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
            message: "Entrer une addresse e-mail valide (Ex: exemple@xxx.xx)",
        }
    },
    "password": {
        required: {
            value: true,
            message: "Le mot de passe est requis"
        },
        pattern: {
            value: PASSWORD_PATTERN,
            message: "Le mot de passe doit contenir au minimum 8 caractères, à savoir : " +
                "au moins 1 lettre minuscule et 1 lettre majuscule, 1 caractère spécial et 1 chiffre"
        }
    },
    "phone_number": {
        required: {
            value: true,
            message: "Numéro de téléphone"
        },
        pattern: {
            value: PHONE_NUMBER_PATTERN,
            message: "Le numéro de téléphone doit contenir des nombres"
        }
    },
    "contactSubject": {
        required: {
            value: true,
            message: "Le sujet est requis"
        },
        minLength: {
            value: 2,
            message: "Le sujet doit contenir au moins 2 caractères"
        },
        maxLength: {
            value: 100,
            message: "Le sujet ne doit pas dépasser 100 caractères"
        }
    },
    "contactMessage": {
        required: {
            value: true,
            message: "Le message est requis"
        },
        minLength: {
            value: 2,
            message: "Le message doit contenir au moins 2 caractères"
        },
        maxLength: {
            value: 300,
            message: "Le message ne doit pas dépasser 300 caractères"
        }
    },
    "loginPassword": {
        required: {
            value: true,
            message: "Le mot de passe est requis"
        }
    }

}