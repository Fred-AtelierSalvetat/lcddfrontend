import React from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { ReactComponent as CitoyenImage } from '~/assets/images/Citoyen.svg';
import { ReactComponent as ProDuDroitImage } from '~/assets/images/Pro-du-droit.svg';
import { ReactComponent as EtudiantImage } from '~/assets/images/Etudiant.svg';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Step 1 UI
const UserRole = ({ step, setStep, user, setUser }) => {

    const getListClasses = (clicked: boolean) => {
        return classNames({
            'role-image': true,
            'role-image-clicked': clicked
        });
    }

    const handleChange = (role: string) => {
        setUser({
            type: 'UPDATE_PERSONAL_INFO',
            payload: { role: role }
        })
    }

    const handleContinue = (e) => {
        e.preventDefault();
        if (user.role !== "") setStep(step + 1);
        else alert("Veuillez choisir un rôle avant de continuer !");
    }

    const handleSpaceKeyUp = (e, role: string) => {
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            handleChange(role);
        }
    }

    return (
        <Form onSubmit={handleContinue}>
            <div className="form-group">
                <Row>
                    <h4>Vous êtes</h4>
                </Row>
                <Row>
                    <i><span>*</span> Veuillez choisir un rôle</i>
                </Row>
                <Row style={{ margin: "10px auto", flexWrap: "nowrap", justifyContent: "space-between" }}>
                    <CitoyenImage
                        className={getListClasses(user.role === "citoyen")}
                        title="Citoyen"
                        onClick={e => handleChange("citoyen")}
                        tabIndex={1}
                        onKeyUp={e => handleSpaceKeyUp(e, "citoyen")}
                    />
                    <ProDuDroitImage
                        className={getListClasses(user.role === "proDuDroit")}
                        title="Professionel du Droit"
                        onClick={e => handleChange("proDuDroit")}
                        tabIndex={1}
                        onKeyUp={e => handleSpaceKeyUp(e, "proDuDroit")}
                    />
                    <EtudiantImage
                        className={getListClasses(user.role === "etudiant")}
                        title="Etudiant"
                        onClick={e => handleChange("etudiant")}
                        tabIndex={1}
                        onKeyUp={e => handleSpaceKeyUp(e, "etudiant")}
                    />
                </Row>
            </div>

            <Button
                className="btn btn-primary float-right"
                type="button"
                tabIndex={1}
                onClick={handleContinue}>
                Suivant
            </Button>

        </Form>

    )
}

UserRole.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}

export default UserRole;