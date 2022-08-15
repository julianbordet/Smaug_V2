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

        /*
        for(const item in bugData.bugs) {
            console.log(item)  
        }
        */

       
        








        
    }
    ,[dispatch])


     /*
     esto es un array
   {console.log(bugData.bugs.bugs)}


     */


    return(
        <div className={classes}>

            <div className='flexColumn'>

                <div className='FlexRow'>

              {bugData.bugs.bugs && bugData.bugs.bugs.map((bug) => (
                <h1>hello</h1>
              ))}
            
               

             


                </div>

            </div>

        </div>
    )
    

}

export default DashboardPanel;