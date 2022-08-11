import InnerLayout from "../components/layout/InnerLayout";
import MyProjectsPanel from "../components/MyProjectsPanel";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";

const MyProjects = () =>{

    return(
        <InnerLayout>
        <Header />
        <Body>
            <VerticalNavbar className='verticalNavbar' />
            <MyProjectsPanel className='mainPanel'/>
        </Body>
    </InnerLayout>
    )

}

export default MyProjects;