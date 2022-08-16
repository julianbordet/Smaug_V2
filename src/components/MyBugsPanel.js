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
                    <tbody>
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
                            <tr key={Math.random()} onClick={() =>{selectBugHandler(bug.bugId)}}>
                                <td key={Math.random()}>{bug.bugId}</td>
                                <td key={Math.random()}>{bug.title}</td>
                                <td key={Math.random()}>{bug.projectId}</td>
                                <td key={Math.random()}>{bug.severity}</td>
                                <td key={Math.random()}>{bug.priority}</td>
                                <td key={Math.random()}>{bug.isFixed}</td>
                                <td key={Math.random()}>{bug.dueDate}</td>
                            </tr>
                            ))}
                    </tbody>
                
                </table>
            </div>}

           

        </div>
    )


}

export default MyBugsPanel;