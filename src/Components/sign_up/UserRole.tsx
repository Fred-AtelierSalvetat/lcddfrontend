import React, { useEffect, useState } from 'react';
import { Form, Row } from 'react-bootstrap';
import { ReactComponent as CitoyenSquare } from '~/assets/images/CitoyenS.svg';
import { ReactComponent as ProDuDroitSquare } from '~/assets/images/ProS.svg';
import { ReactComponent as EtudiantSquare } from '~/assets/images/EtudiantS.svg';
import { ReactComponent as CitoyenRect } from '~/assets/images/CitoyenR.svg';
import { ReactComponent as ProDuDroitRect } from '~/assets/images/ProR.svg';
import { ReactComponent as EtudiantRect } from '~/assets/images/EtudiantR.svg';
import { FranceConnectButton, FranceConnectButtonEmail } from '../shared/buttons/FranceConnectButton';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DESKTOP_VIEW_BREAKPOINT = 726;

const OU = () => {
    return (
        <div style={{ maxWidth: "100%", margin: "24px 0" }}>–––&nbsp;&nbsp;ou&nbsp;&nbsp;–––</div>
    )
}

// Step 1 UI
const UserRole = ({ step, setStep, user, setUser }) => {

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > DESKTOP_VIEW_BREAKPOINT);

    useEffect(() => {
        window.addEventListener("resize", updatePredicate);
    })

    const updatePredicate = () => {
        setIsDesktop(window.innerWidth > DESKTOP_VIEW_BREAKPOINT);
    }

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
        if (e.keyCode === 32 || e.keyCode === 13) {
            e.preventDefault();
            handleChange(role);
        }
    }

    return (
        <Form onSubmit={handleContinue}>
            <div className="form-group">
                <h2>Vous êtes</h2>
                <Row style={{ margin: "10px auto", flexWrap: "wrap", justifyContent: isDesktop ? "space-between" : "center" }}>

                    {isDesktop ?
                        <>
                            <CitoyenSquare
                                className={getListClasses(user.role === "citoyen")}
                                title="Citoyen"
                                onClick={e => handleChange("citoyen")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "citoyen")}
                            />
                            <ProDuDroitSquare
                                className={getListClasses(user.role === "proDuDroit")}
                                title="Professionel du Droit"
                                onClick={e => handleChange("proDuDroit")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "proDuDroit")}
                            />
                            <EtudiantSquare
                                className={getListClasses(user.role === "etudiant")}
                                title="Etudiant"
                                onClick={e => handleChange("etudiant")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "etudiant")}
                            />
                        </>
                        :
                        <>
                            <CitoyenRect
                                className={getListClasses(user.role === "citoyen")}
                                title="Citoyen"
                                onClick={e => handleChange("citoyen")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "citoyen")}
                            />
                            <ProDuDroitRect
                                className={getListClasses(user.role === "proDuDroit")}
                                title="Professionel du Droit"
                                onClick={e => handleChange("proDuDroit")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "proDuDroit")}
                            />
                            <EtudiantRect
                                className={getListClasses(user.role === "etudiant")}
                                title="Etudiant"
                                onClick={e => handleChange("etudiant")}
                                tabIndex={1}
                                onKeyUp={e => handleSpaceKeyUp(e, "etudiant")}
                            />
                        </>
                    }

                </Row>

                {user.role !== '' &&
                    <>
                        <Row>
                            <p>Vous pouvez créer votre compte</p>
                        </Row>
                        {isDesktop ?
                            <Row style={{ justifyContent: "space-between" }}>
                                <FranceConnectButton
                                    text="S'incrire avec"
                                    style={{ flexGrow: "5", maxWidth: "310px" }}
                                />
                                <OU />
                                <FranceConnectButtonEmail
                                    text="S'incrire avec"
                                    style={{ flexGrow: "5", maxWidth: "310px" }}
                                    onClick={handleContinue}
                                />
                            </Row>
                            :
                            <div style={{ display: "flex", flexFlow: "column wrap", alignItems: "center" }}>
                                <FranceConnectButton
                                    text="Avec"
                                    style={{ flexGrow: "5", maxWidth: "330px", width: "100%" }}
                                />
                                <OU />
                                <FranceConnectButtonEmail
                                    text="Avec"
                                    style={{ flexGrow: "5", maxWidth: "330px", width: "100%" }}
                                    onClick={handleContinue}
                                />
                            </div>
                        }

                    </>
                }
            </div>

        </Form >

    )
}

UserRole.propTypes = {
    step: PropTypes.number,
    setStep: PropTypes.func,
    user: PropTypes.object,
    setUser: PropTypes.func,
}

export default UserRole;