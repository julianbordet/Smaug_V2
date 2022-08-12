import React from "react";
import LandingLayout from "../components/layout/LandingLayout";
import LandingPanel from "../components/LandingPanel";
import LandingFooter from "../components/LandingFooter";
import "../styles/Landing.css"

const Landing = () =>{

    return(
        <LandingLayout>
            <LandingPanel className='landing-panel'/>
            <LandingFooter className='landing-footer'/>
        </LandingLayout>
    )

}

export default Landing;