import React from 'react';

/**
 * Used for title in pages: Intervenants (Speakers), Contactez-nous
 */
export const Wrapper = ({children}) => {
    return (
        <div className="wrapper">
            {children}
        </div>
    )
}

/**
 * Used for sidebar in pages: profile
 */
export const SideBarWrapper = ({children}) => {
    return (
        <div className="sidebar-wrapper">
            {children}
        </div>
    )
}