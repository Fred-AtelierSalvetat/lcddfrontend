import React from 'react';
import UserRole from './UserRole';
import UserDetails from './UserDetails';
import Interests from './Interests';

const FormSteps = (step, setStep, user, setUser) => [
    {
        title: "Créer votre compte",
        content: (
            <UserRole
                setStep={setStep}
                step={step}
                user={user}
                setUser={setUser}
            />
        ),
    },
    {
        title: "Créer votre compte",
        content: (
            <UserDetails
                setStep={setStep} 
                step={step}
                user={user}
                setUser={setUser}
            />
        ),
    },
    {
        title: "Quels sont vos intérêts ?",
        content: (
            <Interests
                setStep={setStep}
                step={step}
                user={user}
                setUser={setUser}
            />
        )
    }
];

export default FormSteps
