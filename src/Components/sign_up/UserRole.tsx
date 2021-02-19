import React, { useEffect, useState } from 'react';
import { Button, Form, Row } from 'react-bootstrap';
import { ReactComponent as CitoyenSquare } from '~/assets/images/CitoyenS.svg';
import { ReactComponent as ProDuDroitSquare } from '~/assets/images/ProS.svg';
import { ReactComponent as EtudiantSquare } from '~/assets/images/EtudiantS.svg';
import { ReactComponent as CitoyenRect } from '~/assets/images/CitoyenR.svg';
import { ReactComponent as ProDuDroitRect } from '~/assets/images/ProR.svg';
import { ReactComponent as EtudiantRect } from '~/assets/images/EtudiantR.svg';
import ButtonFCDesktop from '~/assets/images/ButtonFC-desktop.png';
import ButtonFCMobile from '~/assets/images/ButtonFC-mobile.png';

import classNames from 'classnames';
import PropTypes from 'prop-types';

const DESKTOP_VIEW_BREAKPOINT = 720;

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
        if (e.keyCode == 32 || e.keyCode == 13) {
            e.preventDefault();
            handleChange(role);
        }
    }

    return (
        <Form onSubmit={handleContinue}>
            <div className="form-group">
                <h2>Vous êtes</h2>
                <Row>
                    <i><span>*</span> Veuillez choisir un rôle</i>
                </Row>
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
                            <Row style={{ justifyContent: isDesktop ? "space-between" : "space-around" }}>
                                <div>
                                    <img
                                        src={isDesktop ? ButtonFCDesktop : ButtonFCMobile}
                                        alt="Button FranceConnect"
                                        tabIndex={1}
                                        className="img-button"
                                        style={{ backgroundColor: "white", maxWidth: "100%" }}
                                    />
                                </div>
                                <div style={{ backgroundColor: "white", maxWidth: "100%", margin: "24px 0" }}>–––&nbsp;&nbsp;ou&nbsp;&nbsp;–––</div>
                                <Button
                                    className="btn btn-primary float-right"
                                    type="button"
                                    tabIndex={1}
                                    onClick={handleContinue}
                                    style={{ width: "280px", height: "62px", textAlign: "left", paddingLeft: "42px" }}>
                                    Avec<br /><span style={{ fontSize: "1.1rem" }}>votre adresse e-mail</span>
                                </Button>
                            </Row>
                            :
                            <div style={{ display: "flex", flexFlow: "column wrap", alignItems: "center" }}>
                                <div>
                                    <img
                                        src={isDesktop ? ButtonFCDesktop : ButtonFCMobile}
                                        alt="Button FranceConnect"
                                        tabIndex={1}
                                        className="img-button"
                                        style={{ backgroundColor: "white", maxWidth: "100%" }}
                                    />
                                </div>
                                <div style={{ backgroundColor: "white", maxWidth: "100%", margin: "24px 0" }}>–––&nbsp;&nbsp;ou&nbsp;&nbsp;–––</div>
                                <Button
                                    className="btn btn-primary float-right"
                                    type="button"
                                    tabIndex={1}
                                    onClick={handleContinue}
                                    style={{ width: "100%", maxWidth: "330px", height: "62px", textAlign: "left", paddingLeft: "42px" }}>
                                    Avec<br /><span style={{ fontSize: "1.1rem" }}>votre adresse e-mail</span>
                                </Button>
                            </div>
                        }

                    </>
                }
            </div>

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