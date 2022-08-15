import {React, useEffect} from 'react';
import '../styles/MainPanel.css';
import '../styles/MyBugsPanel.css';
import "../styles/TableStyles.css"
import { useSelector, useDispatch } from 'react-redux';
import { fetchBugData } from '../store/BugActions';

const MyBugsPanel = (props) => {

    const classes = props.className;
    const dispatch = useDispatch()

    const bugData = useSelector( (state) => state.fetchChartData)

    useEffect( () =>{
        dispatch(fetchBugData());
    }
    ,[dispatch])

    return (
        <div className={classes}>

            {bugData.bugs.bugs && <div className='table-container'>
                <table>
                    <tr>
                        <td>Bug ID</td>
                        <td>Bug Title</td>
                        <td>Project</td>
                        <td>Severity</td>
                        <td>Priority</td>
                        <td>Status</td>
                        <td>Fix Due Date</td>
                    </tr>
                    
                    {bugData.bugs.bugs.map( (bug) =>(
                        <tr>
                            <td>{bug.bugId}</td>
                            <td>{bug.title}</td>
                            <td>{bug.projectId}</td>
                            <td>{bug.severity}</td>
                            <td>{bug.priority}</td>
                            <td>{bug.isFixed}</td>
                            <td>{bug.dueDate}</td>
                        </tr>
                        ))}
                
                </table>
            </div>}

           

        </div>
    )


}

export default MyBugsPanel;