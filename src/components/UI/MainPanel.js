import React from "react";

const MainPanel = (props) =>{

    const classes = props.className;

    return(
        <div className={classes}>{props.children}</div>
    )


}

export default MainPanel;