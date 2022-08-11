import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import MainPanel from "./MainPanel";
import '../../styles/Body.css';


const Body = (props) =>{

    return(
        <div className='flex-container'>
            {props.children}
        </div>
    );

}

export default Body;