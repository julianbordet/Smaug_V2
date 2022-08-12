import React from "react";
import DashboardPanel from "../components/DashboardPanel";
import InnerLayout from "../components/layout/InnerLayout";
import VerticalNavbar from "../components/UI/VerticalNavbar";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";

const Dashboard = () =>{

    return(
    
        <InnerLayout>
            <Header />
            <Body>
                <VerticalNavbar className='verticalNavbar' />
                <DashboardPanel className='mainPanel'/>
            </Body>
        </InnerLayout>
        
    )

}

export default Dashboard;