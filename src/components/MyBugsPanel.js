import {React, useEffect} from 'react';
import '../styles/MainPanel.css';
import '../styles/MyBugsPanel.css';
import "../styles/TableStyles.css"
import { useSelector, useDispatch } from 'react-redux';
import { fetchBugData } from '../store/BugActions';
import { useHistory } from 'react-router-dom';

const MyBugsPanel = (props) => {

    const classes = props.className;
    const history = useHistory();
    const dispatch = useDispatch()

    const bugData = useSelector( (state) => state.fetchChartData)

    useEffect( () =>{
        dispatch(fetchBugData());
    }
    ,[dispatch])


    const selectBugHandler = (bugId) =>{

        //redirect to bugs/bugId
        history.push(`/mybugs/detail?${bugId}`)

    }

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
                        <tr onClick={() =>{selectBugHandler(bug.bugId)}}>
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