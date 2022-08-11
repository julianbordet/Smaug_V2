import React from "react";
import NavbarItem from "./NavbarItem";
import flex from '../../styles/Flex.module.css';
import '../../styles/VerticalNavbar.css';
import { NavLink } from 'react-router-dom';
import { pages } from '../../util/Constants';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faBug, faTasks, faUserTag  } from '@fortawesome/free-solid-svg-icons'

const VerticalNavbar = (props) =>{

    const classes = props.className;

    
    return(
        <div className={`${flex.column} ${classes}`}>

            <NavLink className='link' to={pages.dashboardPage}>
                <NavbarItem className={` ${flex.column} ${flex.alignCenter} navButton`}>
                    <span className='navItemTitle'>Dashboard</span>
                    <FontAwesomeIcon icon={faTachometerAlt} size="4x" />
                </NavbarItem>
            </NavLink>

            <NavLink className='link' to={pages.myBugsPage}>
                <NavbarItem className={` ${flex.column} ${flex.alignCenter} navButton`}>
                    <span className='navItemTitle'>My Bugs</span>
                    <FontAwesomeIcon icon={faBug} size="4x" />
                </NavbarItem>
            </NavLink>

            <NavLink className='link' to={pages.myProjectsPage}>
                <NavbarItem className={` ${flex.column} ${flex.alignCenter} navButton`}>
                    <span className='navItemTitle'>My Projects</span>
                    <FontAwesomeIcon icon={faTasks} size="4x" />
                </NavbarItem>
            </NavLink>

            <NavLink className='link' to={pages.rolesPage}>
                <NavbarItem className={` ${flex.column} ${flex.alignCenter} navButton`}>
                    <span className='navItemTitle'>Roles</span>
                    <FontAwesomeIcon icon={faUserTag} size="4x" />
                </NavbarItem>
            </NavLink>

        </div>
    )

}

export default VerticalNavbar;