import '../styles/MainPanel.css';
import '../styles/DashboardPanel.css';
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Card from './UI/Card';
import DoughnutChart from '../util/DoughnutChart';
import { fetchBugData } from '../store/BugActions';
import {drawChartForBugsDueNotDue, drawSeverityChart, drawPriorityChart} from '../util/ChartUtil'






const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector( (state) => state.fetchChartData)
    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [data4, setData4] = useState();

    
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

            const tempData2 = drawSeverityChart(bugData.bugs.bugs);
            setData2(tempData2);

            const tempData3 = drawPriorityChart(bugData.bugs.bugs);
            setData3(tempData3);
            //console.log(tempData1)
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

                {bugData.bugs.bugs && data2 && <Card className='dashboard-card'>
                        <h3>Bugs Severity</h3>
                        <DoughnutChart chartData={data2} />
                         </Card>
                }

                {bugData.bugs.bugs && data3 && <Card className='dashboard-card'>
                        <h3>Bugs Priority</h3>
                        <DoughnutChart chartData={data3} />
                         </Card>
                }
            
               

             


                </div>

            </div>

        </div>
    )
    

}

export default DashboardPanel;