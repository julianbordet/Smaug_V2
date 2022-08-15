import '../styles/MainPanel.css';
import '../styles/DashboardPanel.css';
import { useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Card from './UI/Card';
import DoughnutChart from '../util/DoughnutChart';
import { fetchBugData } from '../store/BugActions';


const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector( (state) => state.fetchChartData)

    
    const dispatch = useDispatch();
    
    useEffect( () =>{
        dispatch(fetchBugData());

        

        
    }
    ,[dispatch])


     /*
    {bugData.bugs.map((bug) => (
        <h1>hola</h1>
     ))}
     */


    return(
        <div className={classes}>

            <div className='flexColumn'>

                <div className='FlexRow'>

              
             {console.log(bugData)}


                </div>

            </div>

        </div>
    )
    

}

export default DashboardPanel;