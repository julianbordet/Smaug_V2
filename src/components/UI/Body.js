import React from "react";
import '../../styles/Body.css';


const Body = (props) =>{

    return(
        <div className='flex-container'>
            {props.children}
        </div>
    );

}

export default Body;