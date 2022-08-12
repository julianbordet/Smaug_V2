import InnerLayout from "../components/layout/InnerLayout";
import MyBugsPanel from "../components/MyBugsPanel";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";

const MyBugs = () =>{

    return(
        <InnerLayout>
        <Header />
        <Body>
            <VerticalNavbar className='verticalNavbar' />
            <MyBugsPanel className='mainPanel bugsPanel'/>
        </Body>
    </InnerLayout>
    )

}

export default MyBugs;