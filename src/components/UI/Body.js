import React from "react";
import VerticalNavbar from "./VerticalNavbar";
import MainPanel from "./MainPanel";
import '../../styles/Body.css';


const Body = () =>{

    return(
        <div className='flex-container'>
            <VerticalNavbar className='verticalNavbar' />
            <MainPanel className="mainPanel"></MainPanel>
        </div>
    );

}

export default Body;