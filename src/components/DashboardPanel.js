import '../styles/MainPanel.css';
import '../styles/DashboardPanel.css';
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Card from './UI/Card';
import DoughnutChart from '../util/DoughnutChart';
import { fetchBugData } from '../store/BugActions';
import {drawChartForBugsDueNotDue} from '../util/ChartUtil'


const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector( (state) => state.fetchChartData)
    const [data1, setData1] = useState();

    
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




    useEffect(()=>{
        
        if(bugData.bugs.bugs){
            
            const tempData1 = drawChartForBugsDueNotDue(bugData.bugs.bugs);
            setData1(tempData1);
            console.log(tempData1)
            //console.log(tempData1)
            //tempData2 = getDataForChart2(bugData.bugs.bugs);
            //tempData3 = getDataForChart3(bugData.bugs.bugs);
            //tempData4 = getDataForChart4(bugData.bugs.bugs);

            //setData1(tempData1)
            //setData2(tempData2)
            //setData3(tempData3)
            //setData4(tempData4)

        }

    }
    ,[bugData])


     /*
     esto es un array
   {console.log(bugData.bugs.bugs)}


     */


    return(
        <div className={classes}>

            <div className='flexColumn'>

                <div className='FlexRow'>

              {bugData.bugs.bugs && data1 && <Card className='dashboard-card'>
                        <h3>Bugs due:</h3>
                        <DoughnutChart chartData={data1} />
                         </Card>
                }
            
               

             


                </div>

            </div>

        </div>
    )
    

}

export default DashboardPanel;