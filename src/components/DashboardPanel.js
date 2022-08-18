import '../styles/MainPanel.css';
import '../styles/DashboardPanel.css';
import { useEffect, useState} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import Card from './UI/Card';
import DoughnutChart from '../util/DoughnutChart';
import { fetchBugData } from '../store/BugSliceAsyncActions';
import {drawChartForBugsDueNotDue, drawSeverityChart, drawPriorityChart} from '../util/ChartUtil'



const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector( (state) => state.fetchBugData.bugListFetchedFromDB)

    const [data1, setData1] = useState();
    const [data2, setData2] = useState();
    const [data3, setData3] = useState();
    const [data4, setData4] = useState();

    
    const dispatch = useDispatch();
    
    useEffect( () =>{
        dispatch(fetchBugData());
    }
    ,[dispatch])


    useEffect(()=>{
        
        if(bugData){
            
        
            
            const tempData1 = drawChartForBugsDueNotDue(bugData);
            setData1(tempData1);

            const tempData2 = drawSeverityChart(bugData);
            setData2(tempData2);

            const tempData3 = drawPriorityChart(bugData);
            setData3(tempData3);
            
        
           console.log(bugData)

            //TODO CHART4
        }
    }
    ,[bugData])


    return(
        <div className={classes}>

            <div className='flexColumn'>

                <div className='FlexRow'>

              {bugData && data1 && <Card className='dashboard-card'>
                        <h3>Bugs due:</h3>
                        <DoughnutChart chartData={data1} />
                         </Card>
                }

                {bugData && data2 && <Card className='dashboard-card'>
                        <h3>Bugs Severity</h3>
                        <DoughnutChart chartData={data2} />
                         </Card>
                }

                </div>

                <div className='FlexRow'>

                {bugData && data3 && <Card className='dashboard-card'>
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