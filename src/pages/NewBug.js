import InnerLayout from "../components/layout/InnerLayout";
import Header from "../components/UI/Header";
import Body from "../components/UI/Body";
import VerticalNavbar from "../components/UI/VerticalNavbar";
import NewBugPanel from "../components/NewBugPanel";

const NewBug = () =>{

    return(
        <InnerLayout>
            <Header />
            <Body>
                <VerticalNavbar className='verticalNavbar' />
                <NewBugPanel className='mainPanel'/>
            </Body>
        </InnerLayout>
    )

}

export default NewBug;