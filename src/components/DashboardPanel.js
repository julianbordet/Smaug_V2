import '../styles/MainPanel.css';
import '../styles/DashboardPanel.css';
import { useSelector } from 'react-redux/';
import Card from './UI/Card';


import DoughnutChart from '../util/DoughnutChart';

const DashboardPanel = (props) =>{

    const classes = props.className;

    const bugData = useSelector(state => state.chartData);

    console.log(bugData);



    const data1 = {
        labels: ['Due', 'Not Due'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Bugs due',
              data: [bugData.bugsDue.due, bugData.bugsDue.notDue],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
            }
        ]
    };
    
    const data2 = {
        labels: ['Critical', 'Major', 'Minor', 'Low'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Bug Severity',
              data: [bugData.bugSeverity.critical, bugData.bugSeverity.major, bugData.bugSeverity.minor, bugData.bugSeverity.low],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
            }
        ]
    };

    const data3 = {
        labels: ['High', 'Medium', 'Low'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Bug Priority',
              data: [bugData.bugPriority.high, bugData.bugPriority.medium, bugData.bugPriority.low],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
            }
        ]
    };

    const data4 = {
        labels: ['Project1', 'Project2', 'Project3'],
        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
        datasets: [
            {
              label: 'Bugs by Project',
              data: [bugData.bugsByProject.project1, bugData.bugsByProject.project2, bugData.bugsByProject.project3],
              // you can set indiviual colors for each bar
              backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
            }
        ]
    };




    return(
        <div className={classes}>

            <div className='flexColumn'>

                <div className='FlexRow'>
                    <Card className='dashboard-card'>
                        <h3>Bugs due:</h3>
                        <DoughnutChart chartData={data1} />
                    </Card>

                    <Card className='dashboard-card'>
                        <h3>Bug Severity:</h3>
                        <DoughnutChart chartData={data2} />
                    </Card>
                </div>

                <div className='FlexRow'>
                    <Card className='dashboard-card'>
                        <h3>Bugs Priority:</h3>
                        <DoughnutChart chartData={data3} />
                    </Card>

                    <Card className='dashboard-card'>
                        <h3>Bugs by Project:</h3>
                        <DoughnutChart chartData={data4} />
                    </Card>
                </div>

            </div>

        </div>
    )
    

}

export default DashboardPanel;