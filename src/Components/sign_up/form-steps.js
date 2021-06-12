import React, { FC } from 'react';
import UserRole from './UserRole';
import UserDetails from './UserDetails';
import Interests from './Interests';

import PropTypes from 'prop-types';

const formStepsPropTypes = {
    step: PropTypes.number.isRequired,
    setStep: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    setUser: PropTypes.func.isRequired,
};
const FormSteps: FC<PropTypes.InferProps<typeof formStepsPropTypes>> = (step, setStep, user, setUser) => [
    {
        title: 'Créer votre compte',
        content: <UserRole setStep={setStep} step={step} user={user} setUser={setUser} />,
    },
    {
        title: 'Créer votre compte',
        content: <UserDetails setStep={setStep} step={step} user={user} setUser={setUser} />,
    },
    {
        title: 'Quels sont vos intérêts ?',
        content: <Interests setStep={setStep} step={step} user={user} setUser={setUser} />,
    },
];
FormSteps.propTypes = formStepsPropTypes;

export default FormSteps;
