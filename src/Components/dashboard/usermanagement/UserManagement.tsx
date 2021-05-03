import React, { FC, useEffect } from 'react';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import { ReactComponent as ToggleOnIcon } from '../../../assets/icons/toggle_on_24px.svg';
import { ReactComponent as ToggleOffIcon } from '../../../assets/icons/toggle_off_24px.svg';
import { ReactComponent as DeleteForeverIcon } from '../../../assets/icons/delete_forever_16px.svg';
import { ReactComponent as AdminIcon } from '../../../assets/icons/admin_24px.svg';
import { ReactComponent as ValidateIcon } from '../../../assets/icons/validate_24px.svg';
import { ReactComponent as InviteSpeakerIcon } from '../../../assets/icons/group_add_24px.svg';

import * as userRoles from '../../../state/users/constants/Roles';
import * as userStatus from '../../../state/users/constants/Status';
import * as actionTypes from '../../../state/users/constants/ActionTypes';
import * as usersAction from '../../../state/users/actions';
import { getVisibleUsers, isRequestInProgress } from '../../../state/reducers';
import ErrorBoundary from '../ErrorBoundary';

import SearchBox from './Searchbox';
import ActionMenuCell from './ActionMenuCell';
import Action from './Action';
import ConfirmDialog from '../../shared/modals/ConfirmDialog';

import './UserManagement.scss';

const ADMIN_TAB_ROLE_FILTER = [userRoles.ROLE_ADMIN];
const SPEAKER_TAB_ROLE_FILTER = [
    userRoles.ROLE_SPEAKER_AWAITING_ANSWER,
    userRoles.ROLE_SPEAKER_AWAITING_VALIDATION,
    userRoles.ROLE_SPEAKER,
];
const USERS_TAB_ROLE_FILTER = [
    userRoles.ROLE_PRO_USER,
    userRoles.ROLE_STUDENT,
    userRoles.ROLE_CITIZEN,
    userRoles.ROLE_SPEAKER_AWAITING_ANSWER,
    userRoles.ROLE_SPEAKER_AWAITING_VALIDATION,
    userRoles.ROLE_SPEAKER,
];

const roleFilterMap = {
    admin: ADMIN_TAB_ROLE_FILTER,
    speaker: SPEAKER_TAB_ROLE_FILTER,
    user: USERS_TAB_ROLE_FILTER,
};

const UserManagement: FC = () => {
    const { roleFilter } = useParams() as {
        roleFilter?: string;
    };

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchAction = usersAction.fetchUsers({
            failureAlertMsg: (
                <div className="JSXalertMsg">
                    <span>Echec du des données utilisateurs</span>
                    <Button
                        className="retry"
                        onClick={() => {
                            dispatch(fetchAction);
                        }}
                    >
                        Relancer
                    </Button>
                </div>
            ),
        });
        dispatch(fetchAction);
    }, [dispatch]); //TODO Define refresh strategy

    let root_path = useLocation().pathname;
    roleFilter && (root_path = root_path.replace(new RegExp('/' + roleFilter + '$'), ''));

    const isFetching = useSelector(isRequestInProgress(actionTypes.FETCH_USERS_REQUEST));

    const users = useSelector(getVisibleUsers);

    if (!roleFilter) {
        return <Redirect to={root_path + '/admin'} />;
    }

    if (!Object.keys(roleFilterMap).includes(roleFilter)) {
        return <Redirect to="/no-match" />;
    }

    dispatch(usersAction.setUsersRoleFilter(roleFilterMap[roleFilter]));

    const tabs_desc: {
        tab_label: string;
        uri_filter: string;
        table_columns: {
            key: string;
            renderHeader: () => JSX.Element;
            renderCell: any;
        }[];
    }[] = [
        {
            tab_label: 'Admins',
            uri_filter: 'admin',
            table_columns: [
                {
                    key: 'lastname',
                    renderHeader: () => <div>Nom</div>,
                    renderCell: ({ lastname }) => <p>{lastname}</p>,
                },
                {
                    key: 'firstname',
                    renderHeader: () => <div>Prénom</div>,
                    renderCell: ({ firstname }) => <p>{firstname}</p>,
                },
                { key: 'phone', renderHeader: () => <div>Téléphone</div>, renderCell: ({ phone }) => <p>{phone}</p> },
                {
                    key: 'email_pro',
                    renderHeader: () => <div>E-mail Pro</div>,
                    renderCell: ({ email_pro }) => <p>{email_pro}</p>,
                },
                {
                    key: 'email',
                    renderHeader: () => <div>E-mail Perso</div>,
                    renderCell: ({ email }) => <p>{email}</p>,
                },
                { key: 'town', renderHeader: () => <div>Ville</div>, renderCell: ({ town }) => <p>{town}</p> },
                {
                    key: 'status',
                    renderHeader: () => <div className="CenteredHeader">Status</div>,

                    renderCell: ({ user_id, status }) => (
                        <div className="userStatus">
                            {status === userStatus.ACTIVE && (
                                <ToggleOnIcon onClick={() => dispatch(usersAction.deactivateUser(user_id))} />
                            )}
                            {status === userStatus.INACTIVE && (
                                <ToggleOffIcon onClick={() => dispatch(usersAction.activateUser(user_id))} />
                            )}
                        </div>
                    ),
                },
                {
                    key: 'actions',
                    renderHeader: () => <div className="CenteredHeader">Actions</div>,
                    renderCell: ({ user_id }) => {
                        return (
                            <ActionMenuCell>
                                <Action
                                    icon={<AdminIcon />}
                                    label="Revenir intervenant"
                                    action={() => dispatch(usersAction.revokeUserAdminRight(user_id))}
                                />
                                <Action
                                    icon={<DeleteForeverIcon />}
                                    label="Supprimer"
                                    modalConfirmation={
                                        <ConfirmDialog
                                            show={true}
                                            title="Supprimer cet utilisateur"
                                            body="Cette action n’est pas réversible."
                                            cancelButton="Annuler"
                                            okButton="Supprimer"
                                            handleClose={() => {}}
                                            handleConfirm={() => dispatch(usersAction.deleteUser(user_id))}
                                        />
                                    }
                                />
                            </ActionMenuCell>
                        );
                    },
                },
                {
                    key: 'profile',
                    renderHeader: () => <div></div>,
                    renderCell: ({ user_id }) => <a href={'#/profile/' + user_id}>Voir profil</a>,
                },
            ],
        },
        {
            tab_label: 'Intervenants',
            uri_filter: 'speaker',
            table_columns: [
                {
                    key: 'lastname',
                    renderHeader: () => <div>Nom</div>,
                    renderCell: ({ lastname }) => <p>{lastname}</p>,
                },
                {
                    key: 'firstname',
                    renderHeader: () => <div>Prénom</div>,
                    renderCell: ({ firstname }) => <p>{firstname}</p>,
                },
                { key: 'phone', renderHeader: () => <div>Téléphone</div>, renderCell: ({ phone }) => <p>{phone}</p> },
                {
                    key: 'email_pro',
                    renderHeader: () => <div>E-mail Pro</div>,
                    renderCell: ({ email_pro }) => <p>{email_pro}</p>,
                },
                {
                    key: 'email',
                    renderHeader: () => <div>E-mail Perso</div>,
                    renderCell: ({ email }) => <p>{email}</p>,
                },
                { key: 'town', renderHeader: () => <div>Ville</div>, renderCell: ({ town }) => <p>{town}</p> },
                {
                    key: 'status',
                    renderHeader: () => <div className="CenteredHeader">Status</div>,
                    renderCell: ({ user_id, role, status }) => {
                        return (
                            <div className="Centered">
                                {role === userRoles.ROLE_SPEAKER_AWAITING_ANSWER && (
                                    <div className="speakerStatus speakerAwaitingAnswer">
                                        <p>En attente</p>
                                    </div>
                                )}
                                {role === userRoles.ROLE_SPEAKER_AWAITING_VALIDATION && (
                                    <div className="speakerStatus speakerAwaitingValidation">
                                        <p>A valider</p>
                                    </div>
                                )}
                                {role !== userRoles.ROLE_SPEAKER_AWAITING_ANSWER &&
                                    role !== userRoles.ROLE_SPEAKER_AWAITING_VALIDATION && (
                                        <div className="userStatus">
                                            {status === userStatus.ACTIVE && (
                                                <ToggleOnIcon
                                                    onClick={() => dispatch(usersAction.deactivateUser(user_id))}
                                                />
                                            )}
                                            {status === userStatus.INACTIVE && (
                                                <ToggleOffIcon
                                                    onClick={() => dispatch(usersAction.activateUser(user_id))}
                                                />
                                            )}
                                        </div>
                                    )}
                            </div>
                        );
                    },
                },
                {
                    key: 'actions',
                    renderHeader: () => <div className="CenteredHeader">Actions</div>,
                    renderCell: ({ role, user_id }) => (
                        <ActionMenuCell>
                            {role === userRoles.ROLE_SPEAKER && (
                                <Action
                                    icon={<AdminIcon />}
                                    label="Promouvoir admin"
                                    action={() => dispatch(usersAction.promoteUserToAdmin(user_id))}
                                />
                            )}
                            {role === userRoles.ROLE_SPEAKER_AWAITING_VALIDATION && (
                                <Action
                                    icon={<ValidateIcon />}
                                    label="Valider candidat"
                                    action={() => dispatch(usersAction.validateSpeaker(user_id))}
                                />
                            )}
                            <Action
                                icon={<DeleteForeverIcon />}
                                label="Supprimer"
                                modalConfirmation={
                                    <ConfirmDialog
                                        show={true}
                                        title="Supprimer cet utilisateur"
                                        body="Cette action n’est pas réversible."
                                        cancelButton="Annuler"
                                        okButton="Supprimer"
                                        handleClose={() => {}}
                                        handleConfirm={() => dispatch(usersAction.deleteUser(user_id))}
                                    />
                                }
                            />
                        </ActionMenuCell>
                    ),
                },
                {
                    key: 'profile',
                    renderHeader: () => <div></div>,
                    renderCell: ({ user_id }) => <a href={'#/profile/' + user_id}>Voir profil</a>,
                },
            ],
        },
        {
            tab_label: 'Utilisateurs',
            uri_filter: 'user',
            table_columns: [
                {
                    key: 'lastname',
                    renderHeader: () => <div>Nom</div>,
                    renderCell: ({ lastname }) => <p>{lastname}</p>,
                },
                {
                    key: 'firstname',
                    renderHeader: () => <div>Prénom</div>,
                    renderCell: ({ firstname }) => <p>{firstname}</p>,
                },
                { key: 'email', renderHeader: () => <div>E-mail</div>, renderCell: ({ email }) => <p>{email}</p> },
                { key: 'town', renderHeader: () => <div>Ville</div>, renderCell: ({ town }) => <p>{town}</p> },
                {
                    key: 'role',
                    renderHeader: () => <div>Rôle</div>,
                    renderCell: ({ role }) => (
                        <p>
                            {role
                                .replace(userRoles.ROLE_SPEAKER_AWAITING_ANSWER, userRoles.ROLE_PRO_USER)
                                .replace(userRoles.ROLE_SPEAKER_AWAITING_VALIDATION, userRoles.ROLE_PRO_USER)
                                .replace(userRoles.ROLE_SPEAKER, userRoles.ROLE_PRO_USER)}
                        </p>
                    ),
                },

                {
                    key: 'status',
                    renderHeader: () => <div className="CenteredHeader">Status</div>,
                    renderCell: ({ user_id, status }) => (
                        <div className="userStatus">
                            {status === userStatus.ACTIVE && (
                                <ToggleOnIcon onClick={() => dispatch(usersAction.deactivateUser(user_id))} />
                            )}
                            {status === userStatus.INACTIVE && (
                                <ToggleOffIcon onClick={() => dispatch(usersAction.activateUser(user_id))} />
                            )}
                        </div>
                    ),
                },
                {
                    key: 'actions',
                    renderHeader: () => <div className="CenteredHeader">Actions</div>,
                    renderCell: ({ role, user_id }) => (
                        <ActionMenuCell>
                            {role === userRoles.ROLE_PRO_USER && (
                                <Action
                                    icon={<InviteSpeakerIcon />}
                                    label="Inviter à intervenir"
                                    action={() => dispatch(usersAction.promoteUserToSpeaker(user_id))}
                                />
                            )}
                            <Action
                                icon={<DeleteForeverIcon />}
                                label="Supprimer"
                                modalConfirmation={
                                    <ConfirmDialog
                                        show={true}
                                        title="Supprimer cet utilisateur"
                                        body="Cette action n’est pas réversible."
                                        cancelButton="Annuler"
                                        okButton="Supprimer"
                                        handleClose={() => {}}
                                        handleConfirm={() => dispatch(usersAction.deleteUser(user_id))}
                                    />
                                }
                            />
                        </ActionMenuCell>
                    ),
                },
            ],
        },
    ];

    return (
        <ErrorBoundary>
            {!users.length && isFetching ? (
                <p>Chargement...</p>
            ) : (
                <div className="table_and_filters_pane">
                    <Tab.Container>
                        <Nav variant="pills">
                            {tabs_desc.map((tab_desc) => {
                                return (
                                    <Nav.Item key={'tab_' + tab_desc.tab_label}>
                                        {/* <CSSTransition
                                            in={tab_desc.uri_filter === roleFilter}
                                            timeout={{ enter: 3000, exit: 3000 }}
                                            classNames="navPill"
                                        > */}
                                        <Nav.Link
                                            href={`#${root_path}/${tab_desc.uri_filter}`}
                                            active={tab_desc.uri_filter === roleFilter}
                                        >
                                            {tab_desc.tab_label}
                                        </Nav.Link>
                                        {/* </CSSTransition> */}
                                    </Nav.Item>
                                );
                            })}
                            <SearchBox />
                        </Nav>

                        <Tab.Content>
                            {tabs_desc.map((tab_desc) => {
                                return (
                                    <Tab.Pane
                                        key={'pane_' + tab_desc.tab_label}
                                        active={tab_desc.uri_filter === roleFilter}
                                    >
                                        <Table borderless>
                                            <thead>
                                                <tr>
                                                    {tab_desc.table_columns.map((col) => {
                                                        return (
                                                            <th key={tab_desc.tab_label + col.key}>
                                                                {col.renderHeader()}
                                                            </th>
                                                        );
                                                    })}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {users.map((user) => (
                                                    <tr key={tab_desc.tab_label + user.user_id}>
                                                        {tab_desc.table_columns.map((col) => {
                                                            return (
                                                                <td key={tab_desc.tab_label + user.user_id + col.key}>
                                                                    {col.renderCell(user)}
                                                                </td>
                                                            );
                                                        })}
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Tab.Pane>
                                );
                            })}
                        </Tab.Content>
                    </Tab.Container>
                </div>
            )}
        </ErrorBoundary>
    );
};

export default UserManagement;
