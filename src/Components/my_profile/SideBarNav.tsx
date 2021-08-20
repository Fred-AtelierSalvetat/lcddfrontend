import React, { FC, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { SideBarData } from './SideBarData';

const sideBarPropTypes = { defaultActive: PropTypes.number.isRequired };

const SideBar: FC<PropTypes.InferProps<typeof sideBarPropTypes>> = ({ defaultActive }) => {
  // If no active prop is passed, use `0` instead
  const [activeIndex, setActiveIndex] = useState(defaultActive || 0);
  const location = useLocation();

  useEffect(() => {
    for (let i = 0; i < SideBarData.length; i++) {
      if (SideBarData[i].path === location.pathname) {
        setActiveIndex(i);
        break;
      }
    }
  });

  return (
        <>
            <ul className="sidebar-menu">
                {SideBarData.map((item, index) => (
                    <li key={index} className={`sidebar-item ${index === activeIndex ? 'active' : ''}`}>
                        <Link to={item.path} onClick={() => setActiveIndex(index)}>
                            {item.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
  );
};
SideBar.propTypes = sideBarPropTypes;

export default SideBar;
