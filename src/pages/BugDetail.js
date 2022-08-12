import React from "react";
import InnerLayout from "../components/layout/InnerLayout";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";
import BugDetailPanel from "../components/BugDetailPanel";

const BugDetail = () =>{

    return(
        <InnerLayout>
            <Header />
            <Body>
                <VerticalNavbar className='verticalNavbar' />
                <BugDetailPanel className='mainPanel'/>
            </Body>
        </InnerLayout>
    )

}

export default BugDetail;