import '../styles/MainPanel.css'
import { useSelector } from 'react-redux/';

const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector(state => state.chartData);

    console.log(bugData);

    return(
        <div className={classes}>
            <h1>Dashboard panel</h1>
            <h1>Dashboard panel</h1>
            <h1>Dashboard panel</h1>
            
        </div>
    )
    

}

export default DashboardPanel;