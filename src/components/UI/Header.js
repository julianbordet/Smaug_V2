import React from "react";
import flex from '../../styles/Flex.module.css';
import header from '../../styles/Header.module.css';

const Header = () =>{

    return(
        <header className={`${flex.row} ${flex.justifyBetween} ${flex.alignCenter} ${header.container}`} >
            <span className={`${header.title}`}>Smaug</span>
            <button className={`${header.logOut}`}>Log out</button>
        </header>
    )

}

export default Header;