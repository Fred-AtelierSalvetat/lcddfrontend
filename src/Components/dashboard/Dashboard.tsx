import React from 'react';
import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { ReactComponent as WorkShopsIcon } from '../../assets/icons/workshops_24px.svg';
import { ReactComponent as QuestionsIcon } from '../../assets/icons/questions_24px.svg';
import { ReactComponent as UsersIcon } from '../../assets/icons/users_24px.svg';
import { ReactComponent as AnalyticsIcon } from '../../assets/icons/analytics_24px.svg';
import { ReactComponent as NotificationsIcon } from '../../assets/icons/notifications_24px.svg';
import { ReactComponent as HelpIcon } from '../../assets/icons/help_24px.svg';
import ErrorBoundary from './ErrorBoundary';
import UserManagement from './usermanagement/UserManagement';
import './Dashboard.scss';

const Dashboard: FC = () => {
    const { selectedPage } = useParams() as {
        selectedPage: string;
    };

    interface PageDesc {
        icon: JSX.Element;
        label: string;
        href: string;
        page: JSX.Element;
        disabled?: boolean;
    }
    const pages: PageDesc[] = [
        {
            icon: <WorkShopsIcon />,
            label: 'Ateliers',
            href: '#/dashboard/workshops',
            page: <p>workshops</p>,
            disabled: true,
        },
        {
            icon: <QuestionsIcon />,
            label: 'Questions',
            href: '#/dashboard/questions',
            page: <p>Questions</p>,
            disabled: true,
        },
        {
            icon: <UsersIcon />,
            label: 'Gestion utilisateurs',
            href: '#/dashboard/users',
            page: <UserManagement />,
        },
        {
            icon: <AnalyticsIcon />,
            label: 'Analytics',
            href: '#/dashboard/analytics',
            page: <p>Analytics</p>,
            disabled: true,
        },
        {
            icon: <NotificationsIcon />,
            label: 'Notifications',
            href: '#/dashboard/notifications',
            page: <p>Notifications</p>,
            disabled: true,
        },
        {
            icon: <HelpIcon />,
            label: 'Aide',
            href: '#/dashboard/help',
            page: <p>Help</p>,
            disabled: true,
        },
    ];

    const isSelectedPage = (page_desc: PageDesc) => page_desc.href.split('/').slice(-1)[0] === selectedPage;

    const get_active_page = (selectedPage: string) => {
        const active_page_desc = pages.find((page_desc) => isSelectedPage(page_desc));
        return active_page_desc ? active_page_desc.page : null;
    };

    const activePage: JSX.Element | null = get_active_page(selectedPage);

    return (
        <ErrorBoundary>
            <div id="lcdd-dashboard">
                <Navbar>
                    <Nav className="flex-column">
                        {pages.map((page_desc) => (
                            <Nav.Link
                                key={page_desc.href}
                                href={page_desc.href}
                                active={isSelectedPage(page_desc)}
                                disabled={page_desc.disabled || false}
                            >
                                <div className="button-panel">
                                    {page_desc.icon}
                                    <p>{page_desc.label}</p>
                                </div>
                            </Nav.Link>
                        ))}
                    </Nav>
                </Navbar>
                <div id="lcdd-dashboard-page">{activePage}</div>
            </div>
        </ErrorBoundary>
    );
};

export default Dashboard;
