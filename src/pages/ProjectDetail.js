import InnerLayout from "../components/layout/InnerLayout";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";
import ProjectDetailPanel from "../components/ProjectDetailPanel";


const ProjectDetail = () =>{

    return(
        <InnerLayout>
        <Header />
        <Body>
            <VerticalNavbar className='verticalNavbar' />
            <ProjectDetailPanel className='mainPanel'/>
        </Body>
    </InnerLayout>
    )

}

export default ProjectDetail;