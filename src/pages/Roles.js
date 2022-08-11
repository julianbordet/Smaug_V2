import InnerLayout from "../components/layout/InnerLayout";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";
import RolesPanel from "../components/RolesPanel";

const Roles = () =>{

    return(
        <InnerLayout>
        <Header />
        <Body>
            <VerticalNavbar className='verticalNavbar' />
            <RolesPanel className='mainPanel'/>
        </Body>
    </InnerLayout>
    )

}

export default Roles;