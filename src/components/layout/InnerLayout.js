import React from "react";
import Header from "../UI/Header";
import Body from "../UI/Body";

const InnerLayout = (props) =>{

    return(
        <React.Fragment>{props.children}</React.Fragment>
    )

}

export default InnerLayout;