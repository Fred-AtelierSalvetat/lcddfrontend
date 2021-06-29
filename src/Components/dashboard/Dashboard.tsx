import React, { Fragment, FC, useState, useEffect } from 'react';
import { useParams, useHistory, Redirect } from 'react-router-dom';
import { ReactComponent as WorkShopsIcon } from '~/assets/icons/workshops_24px.svg';
import { ReactComponent as WorkshopCreationIcon } from '~/assets/icons/add_24px.svg';
//import { ReactComponent as QuestionsIcon } from '~/assets/icons/questions_24px.svg';
import { ReactComponent as UsersIcon } from '~/assets/icons/users_24px.svg';
//import { ReactComponent as AnalyticsIcon } from '~/assets/icons/analytics_24px.svg';
// import { ReactComponent as NotificationsIcon } from '~/assets/icons/notifications_24px.svg';
// import { ReactComponent as HelpIcon } from '~/assets/icons/help_24px.svg';
import ErrorBoundary from '~/Components/shared/ErrorBoundary';
import UserManagement from './usermanagement/UserManagement';
import NewWorkshop from './newWorkshop/NewWorkshop';
import Workshops from './workshops/Workshops';
import EditWorkshop from './editWorkshop/EditWorkshop';
import AlertNotificationBox from './AlertNotificationBox';
import './Dashboard.scss';

const Dashboard: FC = () => {
    const [selectedPageParam, setSelectedPageParam] = useState('');
    const { selectedPage } = useParams() as {
        selectedPage: string;
    };
    useEffect(() => setSelectedPageParam(selectedPage), [selectedPage]);

    const history = useHistory();

    interface PageDesc {
        icon: JSX.Element;
        label: JSX.Element;
        href: string;
        page: JSX.Element;
    }
    const pages: PageDesc[] = [
        {
            icon: <WorkShopsIcon />,
            label: <p>Ateliers</p>,
            href: '/dashboard/workshops',
            page: <Workshops />,
        },
        // {
        //     icon: <QuestionsIcon />,
        //     label: <p>Questions</p>,
        //     href: '#/dashboard/questions',
        //     page: <p>Questions</p>,
        // },
        {
            icon: <WorkshopCreationIcon />,
            label: (
                <p>
                    Créer
                    <br />
                    un atelier
                </p>
            ),
            href: '/dashboard/newWorkshop',
            page: <NewWorkshop />,
        },
        {
            icon: <UsersIcon />,
            label: (
                <p>
                    Gestion
                    <br />
                    utilisateurs
                </p>
            ),
            href: '/dashboard/users',
            page: <UserManagement />,
        },
        {
            href: '/dashboard/editWorkshop',
            page: <EditWorkshop />,
        },
        // {
        //     icon: <AnalyticsIcon />,
        //     label: <p>Analytics</p>,
        //     href: '#/dashboard/analytics',
        //     page: <p>Analytics</p>,
        //     disabled: true,
        // },
        // {
        //     icon: <NotificationsIcon />,
        //     label:  <p>Notifications</p>,
        //     href: '#/dashboard/notifications',
        //     page: <p>Notifications</p>,
        //     disabled: true,
        // },
        // {
        //     icon: <HelpIcon />,
        //     label: <p>Aide</p>,
        //     href: '#/dashboard/help',
        //     page: <p>Help</p>,
        //     disabled: true,
        // },
    ];

    const isSelectedPage = (page_desc: PageDesc) => page_desc.href.split('/').slice(-1)[0] === selectedPageParam;

    const get_active_page = () => {
        const active_page_desc = pages.find((page_desc) => isSelectedPage(page_desc));
        return active_page_desc ? active_page_desc.page : null;
    };

    const activePage: JSX.Element | null = get_active_page();

    if (selectedPageParam && !activePage) {
        return <Redirect to="/no-match" />;
    }

    return (
        <ErrorBoundary>
            <div id="lcdd-dashboard">
                <div id="lcdd-dashboard-navbar">
                    {pages
                        .filter((page) => !!page.icon)
                        .map((page_desc) => (
                            <Fragment key={page_desc.href}>
                                <input
                                    type="radio"
                                    id={page_desc.href}
                                    value={page_desc.href}
                                    checked={isSelectedPage(page_desc)}
                                    onChange={(changeEvent) => {
                                        history.push(changeEvent.target.value);
                                        setSelectedPageParam(page_desc.href.split('/').slice(-1)[0]);
                                    }}
                                />
                                <label htmlFor={page_desc.href}>
                                    <div>
                                        {page_desc.icon}
                                        {page_desc.label}
                                    </div>
                                </label>
                            </Fragment>
                        ))}
                    <div className="selection-sliding-background"></div>
                </div>
                <div id="lcdd-dashboard-page">
                    <AlertNotificationBox />
                    <div id="activePage">{activePage}</div>
                </div>
            </div>
        </ErrorBoundary>
    );
};

export default Dashboard;
